import React from "react";
import { EnterLoanAmountProps } from "./types";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import Input from "@/components/shared/Input";
import * as CONSTANTS from "@/types/constants";

const EnterLoanAmount: React.FC<EnterLoanAmountProps> = ({
	variants,
	changeStage,
}) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log({ values });
			changeStage();
		},
	});
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex flex-col items-center justify-center w-full h-full gap-4"
		>
			<div className="w-full md:w-2/3 xl:w-1/2 flex flex-col items-center justify-center gap-4">
				<form
					onSubmit={formik.handleSubmit}
					className="bg-white drop-shadow-lg shadow-lg p-6 w-full py-20"
				>
					<label
						htmlFor={CONSTANTS.LOAN_AMOUNT}
						className={
							"w-full text-start text-amali-grey pb-2 text-xs md:text-sm lg:text-base"
						}
					>
						Enter Loan Amount
					</label>
					<Input
						id={CONSTANTS.LOAN_AMOUNT}
						name={CONSTANTS.LOAN_AMOUNT}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.LOAN_AMOUNT]}
						placeholder="Enter loan amount"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.LOAN_AMOUNT] &&
							formik.touched[CONSTANTS.LOAN_AMOUNT]
						}
						errorText={formik.errors[CONSTANTS.LOAN_AMOUNT]}
						required={true}
					/>
					<button className="w-full mx-auto mt-2 lg:mt-4 text-center bg-amali-green text-[#EDF8F7] rounded-md py-2 lg:py-4 font-bold hover:bg-opacity-80 text-xs md:text-sm lg:text-sm xl:text-base">
						Request Loan
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default EnterLoanAmount;
