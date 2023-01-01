import CheckEligibility from "@/components/lib/CheckEligibility";
import ChoosePaymentPlan from "@/components/lib/ChoosePaymentPlan";
import ConfirmPaymentPlan from "@/components/lib/ConfirmPaymentPlan";
import EnterLoanAmount from "@/components/lib/EnterLoanAmount";
import VerifyFloatOTP from "@/components/lib/VerifyFloatOTP";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Stages } from "./types";
import { variants } from "./variants";

const RequestFloatLayout = () => {
	const [stage, setStage] = useState<Stages>("confirm");

	const handleSetStage = (stage: Stages) => {
		setStage(stage);
	};

	return (
		<AuthLayout>
			<AnimatePresence mode="wait" initial={false}>
				{stage === "check" && (
					<CheckEligibility
						key={stage}
						variants={variants}
						changeStage={() => handleSetStage("verify")}
					/>
				)}
				{stage === "verify" && (
					<VerifyFloatOTP
						key={stage}
						variants={variants}
						changeStage={() => handleSetStage("request")}
					/>
				)}
				{stage === "request" && (
					<EnterLoanAmount
						key={stage}
						variants={variants}
						changeStage={() => handleSetStage("choose")}
					/>
				)}
				{stage === "choose" && (
					<ChoosePaymentPlan
						key={stage}
						variants={variants}
						changeStage={() => handleSetStage("confirm")}
					/>
				)}
				{stage === "confirm" && (
					<ConfirmPaymentPlan
						key={stage}
						variants={variants}
						changeStage={() => handleSetStage("done")}
						onCancel={() => handleSetStage("check")}
					/>
				)}
			</AnimatePresence>
		</AuthLayout>
	);
};

export default RequestFloatLayout;
