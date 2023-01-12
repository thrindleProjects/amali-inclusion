import React from "react";
import { FloatRequestDoneProps } from "./types";
import { motion } from "framer-motion";
import { formatDate } from "@/utils/formatDate";

const FloatRequestDone: React.FC<FloatRequestDoneProps> = ({
	variants,
	changeStage,
}) => {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="w-full h-max gap-4"
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
				<p className="bg-amali-green text-amali-bg rounded-md mt-4 text-center py-2 px-2 md:px-4 lg:px-6 text-xxs md:text-xs lg:text-sm">
					Loan requested has been disbursed into your wallet successfully{" "}
				</p>

				<div className="mt-4">
					<p className="font-light text-xxs md:text-xs lg:text-sm">
						LOAN SUMMARY
					</p>
					<ul className="mt-4">
						<li className="font-light text-xs md:text-sm lg:text-base flex justify-between min-h-max h-12">
							<span>Loan Amount</span>
							<span>₦150,000.00</span>
						</li>
						<li className="font-light text-xs md:text-sm lg:text-base flex justify-between min-h-max h-12">
							<span>Duration</span>
							<span>6 months</span>
						</li>
						<li className="font-light text-xs md:text-sm lg:text-base flex justify-between min-h-max h-12">
							<span>Interest</span>
							<span>15%</span>
						</li>
						<li className="font-light text-xs md:text-sm lg:text-base flex justify-between min-h-max h-12">
							<span>Amount Payable</span>
							<span>₦195,000.00</span>
						</li>
					</ul>
				</div>

				<button
					className="font-light text-xs md:text-sm lg:text-base py-2 w-full sm:w-1/2 lg:w-2/5 rounded-sm bg-amali-green text-amali-bg block mx-auto"
					onClick={changeStage}
				>
					Done
				</button>
			</div>
		</motion.div>
	);
};

export default FloatRequestDone;
