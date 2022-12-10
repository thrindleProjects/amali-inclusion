import React, { useRef } from "react";

import { allMasterAgents } from "@/data/data";
import { Icon } from "@iconify/react";
import PrimaryButton from "../Button/PrimaryButton";

import { AssignTerminalProps } from "./AssignTerminalModal.props";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "@/components/shared/Select";
import Input from "@/components/shared/Input";

const AssignTerminalModal: React.FC<AssignTerminalProps> = ({
	setShowModal,
}) => {
	const formik = useFormik({
		initialValues: {
			selectAgent: "",
			serialNumber: "",
		},
		validationSchema: Yup.object({
			selectAgent: Yup.string().required("Agent  is required"),
			serialNumber: Yup.string().required("Serial Number is required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const divRef = useRef<null | HTMLDivElement>(null);

	// close modal on click outside
	useOnClickOutside(divRef, () => setShowModal(false));

	return (
		<div
			className="fixed inset-0 z-[99999999999] flex justify-center items-center px-10"
			style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
		>
			<div
				ref={divRef}
				className="bg-white p-10 rounded-lg  w-full md:w-[500px]"
			>
				<div className="flex justify-between">
					<p className="text-center text-sm md:text-xl font-bold">
						Assign Terminal To agent
					</p>
					<Icon
						icon="mdi:window-close"
						className="text-red-500"
						onClick={() => setShowModal(false)}
					/>
				</div>
				<hr className="bg-amali-grey my-4" />
				<Select
					label="Agent"
					id="select-agent"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.selectAgent && formik.touched.selectAgent}
					errorText={formik.errors.selectAgent}
					required={true}
					options={allMasterAgents}
				/>
				<Input
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.serialNumber && formik.touched.serialNumber}
					errorText={formik.errors.serialNumber}
					required={true}
					label="Serial Number"
					type="text"
					id="serial-number"
				/>

				<div className="mt-6 md:flex justify-between gap-10">
					<PrimaryButton
						onClick={formik.handleSubmit}
						text="Assign Terminal"
						bgColor="#42B0A8"
					/>
					<PrimaryButton
						onClick={() => setShowModal(false)}
						text="Close"
						bgColor="red"
					/>
				</div>
			</div>
		</div>
	);
};

export default AssignTerminalModal;
