import { Icon } from "@iconify/react";
import React from "react";
import { CheckEligibilityProps } from "./types";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import EligibleLoanToast from "../EligibleLoanToast";
import IneligibleLoanToast from "../IneligibleLoanToast";

const CheckEligibility: React.FC<CheckEligibilityProps> = ({
	variants,
	changeStage,
}) => {
	const handleCheckEligibility = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		const random_boolean = Math.random() < 0.5;
		if (random_boolean) {
			toast.custom((t) => <EligibleLoanToast onContinue={changeStage} t={t} />);
			return;
		}
		toast.custom((t) => <IneligibleLoanToast t={t} />);
	};

	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex flex-col items-center justify-start w-full h-full gap-4 mx-auto"
		>
			<div className="w-full md:w-2/3 xl:w-1/2 flex flex-col items-center justify-center gap-4">
				<section className="bg-white drop-shadow-lg shadow-lg p-6 text-center w-full">
					<h3 className="border-b-4 border-b-amali-green pb-2 text-base lg:text-xl xl:text-2xl font-medium text-amali-steel-blue">
						NEW LOAN
					</h3>
					<div className="py-4 lg:py-6 xl:py-8">
						<button
							className="w-full lg:w-1/2 mx-auto text-center bg-amali-green text-[#EDF8F7] rounded-md py-2 lg:py-4 font-bold hover:bg-opacity-80"
							onClick={handleCheckEligibility}
						>
							Check Eligibility
						</button>
					</div>
				</section>
				<div className="flex items-center gap-2 text-amali-grey text-xxs md:text-xs lg:text-sm xl:text-lg">
					<Icon
						icon={"material-symbols:info"}
						className={"flex-shrink-0 text-2xl text-amali-green"}
					/>
					You must have been a registered agent for 2 months and above
				</div>
			</div>
		</motion.div>
	);
};

export default CheckEligibility;
