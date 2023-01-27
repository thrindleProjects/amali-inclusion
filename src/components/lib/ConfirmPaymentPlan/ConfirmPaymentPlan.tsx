import React from "react";
import { ConfirmPaymentPlanProps } from "./types";
import { motion } from "framer-motion";
import { formatDate } from "@/utils/formatDate";
import { paymentInstallments } from "@/data/data";

const ConfirmPaymentPlan: React.FC<ConfirmPaymentPlanProps> = ({
	variants,
	changeStage,
	onCancel,
}) => {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex flex-col items-center justify-start w-full h-full gap-4"
		>
			<div className="w-full h-max md:w-2/3 xl:w-1/2 bg-white drop-shadow-lg shadow-lg px-2 md:px-4 lg:px-6 py-8 mx-auto">
				<section className="bg-[#6C6C6C] text-amali-bg w-full flex flex-col md:flex-row justify-between p-4 rounded-md">
					<div>
						<h3 className="text-xs md:text-sm lg:text-base text-[#C8C8C8] font-semibold">
							Eligible Loan Amount:
						</h3>
						<p className="text-sm md:text-base lg:text-lg">₦105,000.00</p>
					</div>
					<p className="mt-auto text-xxs md:text-xs lg:text-sm">
						{formatDate(new Date().toISOString())}
					</p>
				</section>
				<div className="mt-6">
					<p className="font-light text-xs md:text-sm lg:text-base">
						Your first payment of <span className="font-bold">₦35,000.00</span>{" "}
						will be included in your statement with a payment due date of
						September 17, 2022
					</p>
				</div>
				<div className="mt-4">
					<p className="font-light text-xxs md:text-xs lg:text-sm">
						PAYMENT SCHEDULE
					</p>
					<ul className="mt-4">
						{paymentInstallments.map((pay, index) => {
							return (
								<li
									key={index}
									className="font-light text-xs md:text-sm lg:text-base flex justify-between min-h-max h-12"
								>
									<div className="w-1/12 flex items-start justify-center relative">
										{/* before:absolute before:w-px before:h-full before:bg-black
										before:z-0 */}
										{index !== paymentInstallments.length - 1 && (
											<span className="w-px h-full mx-auto bg-amali-steel-blue absolute inset-0 z-0"></span>
										)}
										<span
											className={`h-1/5 aspect-square rounded-full relative z-10 ${
												index
													? "bg-white border border-amali-steel-blue"
													: "bg-amali-green"
											}`}
										></span>
									</div>
									<div className="flex justify-between w-11/12">
										<span>{pay.date}</span>
										<span>{pay.amount}</span>
									</div>
								</li>
							);
						})}
					</ul>
					<p className="font-light text-xs md:text-sm lg:text-base flex justify-between mt-5">
						<span>Total Amount to pay</span>
						<span className="text-amali-green">₦195,000.00</span>
					</p>

					<div className="grid grid-cols-2 gap-4 mt-8 w-full sm:w-2/3 xl:w-1/2 mx-auto">
						<button
							onClick={onCancel}
							className="font-light text-xs md:text-sm lg:text-base w-full py-3 rounded-sm bg-[#6C6C6C] text-amali-bg"
						>
							Cancel
						</button>
						<button
							onClick={changeStage}
							className="font-light text-xs md:text-sm lg:text-base w-full py-3 rounded-sm bg-amali-green text-amali-bg"
						>
							Confirm Plan
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ConfirmPaymentPlan;
