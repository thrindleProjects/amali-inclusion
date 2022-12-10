import Input from "@/components/shared/Input";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import Modal from "react-modal";
import { initialValues, validationSchema } from "./validation";
import * as CONSTANTS from "@/types/constants";

const NewTerminalModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleShowModal = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setIsOpen(true);
	};

	const handleHideModal = (
		e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
	) => {
		e.preventDefault();
		setIsOpen(false);
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log({ values });
		},
	});

	return (
		<>
			{/* Button to open the modal */}
			<button
				className="bg-amali-green outline-none text-white rounded-md py-4 px-2 text-sm lg:text-base focus:bg-opacity-70 hover:bg-opacity-70"
				onClick={handleShowModal}
			>
				Create New Terminal
			</button>

			{/* Modal */}
			<Modal
				isOpen={isOpen}
				shouldCloseOnEsc={true}
				onRequestClose={handleHideModal}
				className="bg-white rounded-md flex-shrink-0 w-[90%] md:w-4/6 lg:w-2/6 drop-shadow-2xl"
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
			>
				<div>
					<section className="flex-shrink-0 border-b border-b-amali-grey border-opacity-40 flex justify-between items-center py-3 px-4">
						<h1 className="text-bold text-sm md:text-lg lg:text-xl p-3 text-amali-grey text-opacity-90">
							Create New Terminal
						</h1>
						<Icon
							icon="ic:outline-close"
							className="text-amali-grey tex- lg:text-2xl"
							onClick={handleHideModal}
						/>
					</section>
					<form onSubmit={formik.handleSubmit} className="px-4 pt-4 pb-6">
						<Input
							id={CONSTANTS.TERMINAL_ID}
							type={CONSTANTS.TEXT}
							value={formik.values[CONSTANTS.TERMINAL_ID]}
							placeholder={"Terminal ID"}
							label={"Terminal ID"}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors[CONSTANTS.TERMINAL_ID] &&
								formik.touched[CONSTANTS.TERMINAL_ID]
							}
							errorText={formik.errors[CONSTANTS.TERMINAL_ID]}
							required={true}
						/>
						<Input
							id={CONSTANTS.TERMINAL_NUMBER}
							type={CONSTANTS.TEXT}
							value={formik.values[CONSTANTS.TERMINAL_NUMBER]}
							placeholder={"Terminal Number"}
							label={"Terminal Number"}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors[CONSTANTS.TERMINAL_NUMBER] &&
								formik.touched[CONSTANTS.TERMINAL_NUMBER]
							}
							errorText={formik.errors[CONSTANTS.TERMINAL_NUMBER]}
							required={true}
						/>
						<div className="flex items-center gap-2">
							<button
								className="text-red-400 border border-red-400 p-3 rounded-md outline-none hover:bg-red-400 focus:bg-red-400 hover:text-white focus:text-white transition-all duration-500 text-xs xl:text-sm"
								onClick={handleHideModal}
							>
								Cancel
							</button>
							<button className="text-center outline-none bg-amali-green text-[#EDF8F7] rounded-md p-3  font-bold hover:bg-opacity-80 focus:bg-opacity-80 text-xs xl:text-sm">
								Create
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	);
};

export default NewTerminalModal;
