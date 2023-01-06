import React from "react";
import { LoanSettingsProps } from "./types";

const LoanSettingsCard: React.FC<LoanSettingsProps> = ({
	loan,
	handleModals,
}) => {
	return (
		<div
			key={loan.id}
			className="drop-shadow-xl shadow-lg w-full lg:w-11/12 xl:w-8/12 aspect-video"
		>
			<section className="bg-white shadow-inner h-full grid grid-cols-1 justify-between px-3 py-4 sm:px-4 sm:py-6">
				<div className="flex justify-between items-center w-full">
					<h5 className="text-amali-steel-blue text-lg lg:tex-xl xl:text-2xl font-bold capitalize">
						{loan.duration}
					</h5>
					<button
						className="ml-auto block w-max text-center bg-amali-green text-[#EDF8F7] rounded-md py-1 md:py-2 px-3 lg:px-4 font-medium hover:bg-opacity-80 text-xs md:text-sm lg:text-sm"
						onClick={() => handleModals("SHOW_EDIT_MODAL", loan)}
					>
						Edit
					</button>
				</div>
				<div className="flex justify-between items-center gap-8 w-full">
					<div>
						<p className="text-xxs md:text-xs lg:text-sm text-amali-grey">
							Interest
						</p>
						<p className="text-amali-green text-xs md:text-sm lg:text-base">
							{loan.interest}%
						</p>
					</div>
					<div>
						<p className="text-xxs md:text-xs lg:text-sm text-amali-grey">
							Repayment Frequency
						</p>
						<p className="text-amali-green text-xs md:text-sm lg:text-base">
							{loan.frequency}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LoanSettingsCard;
