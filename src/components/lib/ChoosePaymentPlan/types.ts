import { Variants } from "framer-motion";

export interface ChoosePaymentPlanProps {
	variants: Variants;
	changeStage(): void;
}
