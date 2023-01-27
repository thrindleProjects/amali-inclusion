import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChoosePaymentPlanProps } from "./types";
import PaymentPlansList from "../PaymentPlansList";
import { loanPayment } from "@/data/data";
import ConfirmPaymentPlanModal from "../ConfirmPaymentPlanModal";
const ChoosePaymentPlan: React.FC<ChoosePaymentPlanProps> = ({
	variants,
	changeStage,
}) => {
	const [activePlan, setActivePlan] = useState<null | number>(null);
	const [confirmData, setConfirmData] = useState<null | {
		duration: number;
		interest: number;
		loan_amount: number;
		amount_payable: number;
	}>();
	const changePlan = (plan: null | number) => {
		setActivePlan(plan);
		if (typeof plan === "number") {
			setConfirmData(loanPayment[plan]);
			return;
		}
		setConfirmData(null);
	};

	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex flex-col items-center justify-start w-full h-full gap-4 relative"
		>
			<PaymentPlansList changePlan={changePlan} activePlan={activePlan} />
			<AnimatePresence mode="wait" initial={false}>
				{typeof activePlan === "number" && confirmData && (
					<ConfirmPaymentPlanModal
						onCancel={() => changePlan(null)}
						changeStage={changeStage}
						plan_data={confirmData}
						variants={variants}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default ChoosePaymentPlan;
