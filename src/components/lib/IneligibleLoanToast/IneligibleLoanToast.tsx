import { Icon } from "@iconify/react";
import React from "react";
import { toast } from "react-hot-toast";
import { IneligibleLoanToastProps } from "./types";

const IneligibleLoanToast: React.FC<IneligibleLoanToastProps> = ({ t }) => {
	return (
		<div
			className={`${
				t.visible ? "animate-enter" : "animate-leave"
			} w-56 md:w-72 xl:w-[24rem] bg-white shadow-lg rounded-lg pointer-events-auto flex gap-2 ring-1 ring-black ring-opacity-5 p-3`}
		>
			<Icon
				icon={"material-symbols:error"}
				className={"text-3xl xl:text-5xl text-red-400"}
			/>
			<div className="flex flex-col gap-4">
				<div className="text-xs md:text-sm lg:text-sm xl:text-base">
					Oops! You are not eligible for this loan at the moment. Please check
					back .
				</div>
				<button
					className="w-full mx-auto text-center bg-amali-grey text-[#EDF8F7] rounded-md py-1 md:py-2 font-bold hover:bg-opacity-80 text-xs md:text-sm lg:text-sm xl:text-base"
					onClick={() => toast.remove(t.id)}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default IneligibleLoanToast;
