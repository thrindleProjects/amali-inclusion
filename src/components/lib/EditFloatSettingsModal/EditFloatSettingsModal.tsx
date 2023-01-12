import React, { useState } from "react";
import { EditFloatSettingsModalProps } from "./types";
import Modal from "react-modal";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "@/components/pages-layout/sub-agent/float/request/variants";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import { loanFrequency } from "@/data/data";

const tabs: {
	name: "interest" | "frequency";
	text: "Interest" | "Frequency";
}[] = [
	{ name: "interest", text: "Interest" },
	{ name: "frequency", text: "Frequency" },
];

const EditFloatSettingsModal: React.FC<EditFloatSettingsModalProps> = ({
	isOpen,
	closeModal,
	onSubmit,
	loan,
}) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			const { interest, frequency } = values;
			const numInterest = parseInt(String(values.interest));

			const updated: {
				interest?: number;
				frequency?: string;
			} = {};

			if (interest) {
				updated.interest = numInterest;
			}
			if (frequency.length) {
				updated.frequency = frequency;
			}

			onSubmit({ ...loan, ...updated });
		},
	});
	const [activeTab, setActiveTab] = useState<"interest" | "frequency">(
		"interest"
	);

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
			className="bg-white rounded-md flex-shrink-0 w-[90%] md:w-4/6 lg:w-2/6 drop-shadow-2xl overflow-x-hidden"
		>
			<section className="flex-shrink-0 border-b border-b-amali-grey border-opacity-40 flex justify-between items-center py-3 px-4">
				<h1 className="text-bold text-sm md:text-lg lg:text-xl p-3">
					Add New Loan Details
				</h1>
				<Icon
					icon="ic:outline-close"
					className="text-amali-grey lg:text-2xl"
					onClick={handleCloseModal}
				/>
			</section>
			<AnimatePresence mode="popLayout">
				<form onSubmit={formik.handleSubmit} className="py-3 px-7">
					<nav className="w-full">
						<ul className="w-full grid grid-cols-2 gap-2 text-center p-2 bg-amali-green bg-opacity-20 rounded-md">
							{tabs.map((tab, index) => {
								return (
									<li key={index} className={"w-full"}>
										<button
											className={`px-2 py-3 text-xs md:text-sm font-medium rounded-md w-full ${
												activeTab === tab.name
													? "bg-amali-green text-white"
													: "bg-transparent text-amali-green"
											}`}
											onClick={(e) => {
												e.preventDefault();
												setActiveTab(tab.name);
											}}
										>
											{tab.text}
										</button>
									</li>
								);
							})}
						</ul>
					</nav>
					{activeTab === "interest" && (
						<motion.div
							variants={variants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="mt-8 flex flex-col gap-4"
						>
							<div>
								<p className="text-xs md:text-sm font-medium pb-1">
									Old Interest (%)
								</p>
								<div className="px-2 md:px-4 py-3 lg:py-4 xl:py-5 text-xs xl:text-sm border-amali-green border-2">
									{loan.interest}
								</div>
							</div>
							<Input
								id={activeTab}
								name={activeTab}
								type="text"
								onChange={formik.handleChange}
								value={formik.values.interest}
								placeholder={"Interest rate"}
								label={"New Interest (%)"}
								onBlur={formik.handleBlur}
								error={formik.errors.interest && formik.touched.interest}
								errorText={formik.errors.interest}
								required={true}
							/>
						</motion.div>
					)}
					{activeTab === "frequency" && (
						<motion.div
							variants={variants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="mt-8 flex flex-col gap-4"
						>
							<div>
								<p className="text-xs md:text-sm font-medium pb-1">
									Old Frequency
								</p>
								<div className="px-2 md:px-4 py-3 lg:py-4 xl:py-5 text-xs xl:text-sm border-amali-green border-2">
									{loan.frequency}
								</div>
							</div>
							<Select
								id={"frequency"}
								name={"frequency"}
								onChange={formik.handleChange}
								options={loanFrequency}
								value={formik.values.frequency}
								placeholder={"Select a frequency"}
								label={"New Frequency"}
								onBlur={formik.handleBlur}
								error={formik.errors.frequency && formik.touched.frequency}
								errorText={formik.errors.frequency}
								required={true}
							/>
						</motion.div>
					)}
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
			</AnimatePresence>
		</Modal>
	);
};

export default EditFloatSettingsModal;
