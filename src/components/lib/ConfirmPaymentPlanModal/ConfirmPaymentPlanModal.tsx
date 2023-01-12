import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import React, { useRef, useState } from "react";
import { ConfirmPaymentPlanModalProps } from "./types";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
const ConfirmPaymentPlanModal: React.FC<ConfirmPaymentPlanModalProps> = ({
	onCancel,
	changeStage,
	plan_data,
	variants,
}) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const modalRef = useRef(null);
	useOnClickOutside(modalRef, onCancel);

	const handleContinue = () => {
		if (isChecked) {
			changeStage();
		}
	};

	return (
		<motion.section
			variants={variants}
			initial={"initial"}
			animate={"animate"}
			className="absolute top-0 right-0 bg-white drop-shadow-lg shadow-lg p-4 rounded-md w-full md:w-6/12 lg:w-7/12 xl:w-5/12 flex flex-col gap-3"
			ref={modalRef}
		>
			<h4 className="underline text-xs md:text-sm lg:text-base font-bold">
				Loan Details
			</h4>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
				<div>
					<p className="text-xs md:text-sm lg:text-base text-amali-grey font-semibold">
						Duration
					</p>
					<p className="text-amali-green font-semibold text-sm md:text-base lg:text-lg">
						{plan_data.duration} {plan_data.duration > 1 ? "months" : "month"}
					</p>
				</div>
				<div>
					<p className="text-xs md:text-sm lg:text-base text-amali-grey font-semibold">
						Repayment Frequency
					</p>
					<p className="text-amali-green font-semibold text-sm md:text-base lg:text-lg">
						Weekly
					</p>
				</div>
				<p className="text-xs md:text-sm text-amali-grey">
					<p className="text-xs md:text-sm lg:text-base text-amali-grey font-semibold">
						Interest:
					</p>
					<p className="text-amali-green font-semibold text-sm md:text-base lg:text-lg">
						{plan_data.interest}%
					</p>
				</p>
			</div>
			<div className="flex items-start gap-2">
				<label htmlFor="agree" className="w-max">
					<Icon
						icon={
							isChecked
								? "material-symbols:check-box-outline"
								: "material-symbols:check-box-outline-blank-sharp"
						}
						className={`text-lg md:text-xl lg:text-2xl ${
							isChecked ? "text-amali-green" : "text-amali-grey"
						}`}
					/>
				</label>
				<input
					type="checkbox"
					name="agree"
					id="agree"
					className="hidden"
					checked={isChecked}
					onChange={(e) => setIsChecked(e.target.checked)}
				/>
				<div className="text-xs md:text-sm text-amali-grey">
					I have read the and accept the{" "}
					<span className="text-amali-green font-semibold cursor-pointer">
						Terms
					</span>{" "}
					and{" "}
					<span className="text-amali-green font-semibold cursor-pointer">
						Conditions
					</span>{" "}
					for loans request and repayment
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<button
					onClick={onCancel}
					className="font-light text-xs md:text-sm lg:text-base w-full py-3 rounded-sm bg-amali-grey text-amali-bg"
				>
					Cancel
				</button>
				<button
					onClick={handleContinue}
					className="font-light text-xs md:text-sm lg:text-base w-full py-3 rounded-sm bg-amali-green text-amali-bg"
				>
					Yes, I Agree
				</button>
			</div>
		</motion.section>
	);
};

export default ConfirmPaymentPlanModal;
