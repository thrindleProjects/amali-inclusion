import { Icon } from "@iconify/react";
import React from "react";
import { toast } from "react-hot-toast";
import { EligibleLoanToastProps } from "./types";

const EligibleLoanToast: React.FC<EligibleLoanToastProps> = ({
	t,
	onContinue,
}) => {
	const handleContinue = () => {
		onContinue();
		toast.remove();
	};

	return (
		<div
			className={`${
				t.visible ? "animate-enter" : "animate-leave"
			} w-56 md:w-72 xl:w-[24rem] bg-white shadow-lg rounded-lg pointer-events-auto flex gap-2 ring-1 ring-black ring-opacity-5 p-3`}
		>
			<Icon
				icon={"material-symbols:check-circle"}
				className={"text-3xl xl:text-5xl text-amali-green"}
			/>
			<div className="flex flex-col gap-4">
				<div className="text-xs md:text-sm lg:text-sm xl:text-base">
					Congrats! You are eligible to request for a loan.
				</div>
				<button
					className="w-full mx-auto text-center bg-amali-green text-[#EDF8F7] rounded-md py-1 md:py-2 font-bold hover:bg-opacity-80 text-xs md:text-sm lg:text-sm xl:text-base"
					onClick={handleContinue}
				>
					Continue
				</button>
			</div>
		</div>
	);
};

export default EligibleLoanToast;
