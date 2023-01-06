import { loanPayment } from "@/data/data";
import { formatDate } from "@/utils/formatDate";
import { Icon } from "@iconify/react";
import React from "react";
import { PaymentPlansListProps } from "./types";

const PaymentPlansList: React.FC<PaymentPlansListProps> = ({
	changePlan,
	activePlan,
}) => {
	return (
		<div className="w-full md:w-2/3 xl:w-1/2 bg-white drop-shadow-lg shadow-lg px-2 md:px-4 lg:px-6 py-8">
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
				<p className="font-bold text-xxs md:text-xs lg:text-sm">LOAN OFFERS</p>
				<p className="font-light text-xs md:text-sm lg:text-base">
					Choose the loan offer that is convenient for you.
				</p>
			</div>
			<div>
				{loanPayment.map((loan, index) => {
					return (
						<button
							key={index}
							className="flex items-center gap-2 w-full cursor-pointer py-3 border-b border-b-amali-steel-blue outline-amali-green px-2"
							onClick={() => changePlan(index)}
						>
							<div className="w-1/12">
								<Icon
									icon={
										index === activePlan
											? "material-symbols:check-box-outline"
											: "material-symbols:check-box-outline-blank-sharp"
									}
									className={`text-lg md:text-xl lg:text-2xl ${
										activePlan === index
											? "text-amali-green"
											: "text-amali-grey"
									}`}
								/>
							</div>
							<div className="flex justify-between w-11/12">
								<div className="text-start ">
									<p className="text-sm md:text-base lg:text-lg">
										{loan.duration} {loan.duration > 1 ? "months" : "month"}
									</p>
									<p className="text-xs md:text-sm text-amali-grey">
										Interest: {loan.interest}%
									</p>
								</div>
								<div className="text-end md:text-start">
									<p className="text-amali-green font-semibold text-sm md:text-base lg:text-lg">
										₦{loan.loan_amount.toLocaleString()}.00
									</p>
									<p className="text-xs md:text-sm text-amali-grey">
										To pay: ₦{loan.amount_payable.toLocaleString()}.00
									</p>
								</div>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default PaymentPlansList;
