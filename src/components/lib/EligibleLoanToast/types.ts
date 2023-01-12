import { Toast } from "react-hot-toast";

export interface EligibleLoanToastProps {
	t: Toast;
	onContinue(): void;
}
