import React from "react";
import { CreateFloatSettingsModalProps } from "./types";
import Modal from "react-modal";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import { loanDurations, loanFrequency } from "@/data/data";

const CreateFloatSettingsModal: React.FC<CreateFloatSettingsModalProps> = ({
	closeModal,
	isOpen,
	onSubmit,
}) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			const interest = parseInt(String(values.interest));
			onSubmit({ ...values, id: Date.now(), interest });
			handleCloseModal();
		},
	});

	function handleCloseModal() {
		formik.resetForm();
		closeModal();
	}

	return (
		<Modal
			isOpen={isOpen}
			shouldCloseOnEsc
			onRequestClose={handleCloseModal}
			style={{
				overlay: {
					backgroundColor: "#00000020",
					zIndex: 100,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflow: "auto",
				},
				content: {
					outline: "none",
				},
			}}
			shouldCloseOnOverlayClick={true}
			shouldReturnFocusAfterClose={true}
			ariaHideApp={false}
			className="bg-white rounded-md flex-shrink-0 w-[90%] md:w-4/6 lg:w-2/6 drop-shadow-2xl"
		>
			<section className="flex-shrink-0 border-b border-b-amali-grey border-opacity-40 flex justify-between items-center py-3 px-4">
				<h1 className="text-bold text-sm md:text-lg lg:text-xl p-3">
					Add New Loan Details
				</h1>
				<Icon
					icon="ic:outline-close"
					className="text-amali-grey tex- lg:text-2xl"
					onClick={handleCloseModal}
				/>
			</section>
			<form onSubmit={formik.handleSubmit} className="py-3 px-7">
				<Select
					id={"duration"}
					name={"duration"}
					onChange={formik.handleChange}
					options={loanDurations}
					value={formik.values.duration}
					placeholder={"Select a duration"}
					label={"Duration"}
					onBlur={formik.handleBlur}
					error={formik.errors.duration && formik.touched.duration}
					errorText={formik.errors.duration}
					required={true}
				/>
				<Select
					id={"frequency"}
					name={"frequency"}
					onChange={formik.handleChange}
					options={loanFrequency}
					value={formik.values.frequency}
					placeholder={"Select a frequency"}
					label={"Frequency"}
					onBlur={formik.handleBlur}
					error={formik.errors.frequency && formik.touched.frequency}
					errorText={formik.errors.frequency}
					required={true}
				/>
				<Input
					id={"interest"}
					name={"interest"}
					type="text"
					onChange={formik.handleChange}
					value={formik.values.interest}
					placeholder={"Interest rate"}
					label={"Interest (%)"}
					onBlur={formik.handleBlur}
					error={formik.errors.interest && formik.touched.interest}
					errorText={formik.errors.interest}
					required={true}
				/>
				<div className="grid grid-cols-2 gap-4">
					<button
						onClick={handleCloseModal}
						className="font-light text-xs md:text-sm lg:text-base w-full py-3 rounded-sm bg-amali-grey text-amali-bg"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="font-light text-xs md:text-sm lg:text-base w-full py-3 rounded-sm bg-amali-green text-amali-bg"
					>
						Add
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateFloatSettingsModal;
