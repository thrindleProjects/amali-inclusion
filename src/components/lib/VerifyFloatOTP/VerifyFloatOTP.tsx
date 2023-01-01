import React from "react";
import { VerifyFloatOTPProps } from "./types";
import { AnimatePresence, motion } from "framer-motion";
import PinInput from "react-pin-input";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "./validation";
import * as CONSTANTS from "@/types/constants";

const VerifyFloatOTP: React.FC<VerifyFloatOTPProps> = ({
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

	const handleChange = (value: string) => {
		formik.setFieldValue(CONSTANTS.PIN, value, true);
	};

	return (
		<motion.div
			variants={variants}
			initial={"initial"}
			animate={"animate"}
			exit={"exit"}
			className="flex flex-col items-center justify-center w-full h-full gap-4"
		>
			<div className="w-full md:w-2/3 xl:w-1/2 flex flex-col items-center justify-center gap-4">
				<section className="bg-white drop-shadow-lg shadow-lg p-6 w-full">
					<h3 className="pb-2 text-base lg:text-xl xl:text-2xl font-semibold text-amali-steel-blue">
						Verify OTP
					</h3>
					<p className="text-amali-grey font-light text-xs md:text-base">
						Enter the 4 digit code sent to 08184 257 312
					</p>
					<form onSubmit={formik.handleSubmit} className="mt-4">
						<div className="w-full lg:w-3/4 mx-auto">
							<PinInput
								length={4}
								secret={true}
								type={"numeric"}
								focus={true}
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
									gap: "0.5rem",
								}}
								inputStyle={{
									borderTop: "0px",
									borderLeft: "0px",
									borderRight: "0px",
									borderBottom: "2px solid #88c3c1",
									width: "100%",
									aspectRatio: 1,
									height: "auto",
									margin: "0",
									fontSize: "1.5rem",
									color: "#88c3c1",
								}}
								placeholder="*"
								inputFocusStyle={{
									borderBottom: "2px solid #718096",
									backgroundColor: "#71809620",
								}}
								onChange={handleChange}
							/>
							<AnimatePresence>
								{formik.errors[CONSTANTS.PIN] &&
									formik.touched[CONSTANTS.PIN] && (
									<motion.div
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 100 }}
										transition={{ ease: "easeOut", duration: 0.5 }}
										className="text-red-300 text-xs font-semibold pt-1 pl-1"
									>
										{formik.errors[CONSTANTS.PIN]}
									</motion.div>
								)}
							</AnimatePresence>
							<button className="w-full mx-auto mt-4 lg:mt-8 text-center bg-amali-green text-[#EDF8F7] rounded-md py-2 lg:py-4 font-bold hover:bg-opacity-80 text-xs md:text-sm lg:text-sm xl:text-base">
								Verify
							</button>
							<p className="text-xs lg:text-sm w-full text-end mt-2 text-amali-grey">
								Didn&apos;t receive code? <span className="text-amali-green cursor-pointer">Resend</span>
							</p>
						</div>
					</form>
				</section>
			</div>
		</motion.div>
	);
};

export default VerifyFloatOTP;
