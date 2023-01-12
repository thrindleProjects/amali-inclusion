import { Variants } from "framer-motion";

export interface ConfirmPaymentPlanModalProps {
	onCancel(): void;
	plan_data: {
		duration: number;
		interest: number;
		loan_amount: number;
		amount_payable: number;
	};
	changeStage(): void;
	variants: Variants;
}
