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
import styles from "./styles.module.css";
import FloatProgress from "@/components/lib/FloatProgress";

const allStages: Stages[] = [
	"check",
	"verify",
	"request",
	"choose",
	"confirm",
	"done",
];

const RequestFloatLayout = () => {
	const [stage, setStage] = useState<Stages>("check");
	const [successStages, setSuccessStages] = useState<Stages[]>(["check"]);

	const handleSetStage = (stage: Stages, done?: boolean) => {
		setSuccessStages((oldStages) => {
			if (done) {
				return ["check"];
			}
			if (oldStages.includes(stage)) {
				return oldStages;
			}
			oldStages.push(stage);
			return oldStages;
		});
		setStage(stage);
	};

	const handleProgressStage = (stage: Stages) => {
		setStage(stage);
	};

	return (
		<MainContentLayout>
			<AnimatePresence mode="wait" initial={false}>
				<div className={`${styles.float_wrapper}`}>
					<FloatProgress
						items={allStages}
						active={stage}
						onClick={handleProgressStage}
						available={successStages}
					/>
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
							changeStage={() => handleSetStage("check", true)}
						/>
					)}
				</div>
			</AnimatePresence>
		</MainContentLayout>
	);
};

export default RequestFloatLayout;
