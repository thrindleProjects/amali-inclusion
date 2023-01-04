import CheckEligibility from "@/components/lib/CheckEligibility";
import ChoosePaymentPlan from "@/components/lib/ChoosePaymentPlan";
import ConfirmPaymentPlan from "@/components/lib/ConfirmPaymentPlan";
import EnterLoanAmount from "@/components/lib/EnterLoanAmount";
import FloatRequestDone from "@/components/lib/FloatRequestDone";
import VerifyFloatOTP from "@/components/lib/VerifyFloatOTP";
import MainContentLayout from "@/layout/MainContentLayout";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Stages } from "./types";
import { variants } from "./variants";

const RequestFloatLayout = () => {
	const [stage, setStage] = useState<Stages>("check");

	const handleSetStage = (stage: Stages) => {
		setStage(stage);
	};

	return (
		<MainContentLayout>
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
				{stage === "done" && (
					<FloatRequestDone
						key={stage}
						variants={variants}
						changeStage={() => handleSetStage("check")}
					/>
				)}
			</AnimatePresence>
		</MainContentLayout>
	);
};

export default RequestFloatLayout;
