import { Variants } from "framer-motion";

export interface ConfirmPaymentPlanProps {
	variants: Variants;
	changeStage(): void;
	onCancel(): void;
}
