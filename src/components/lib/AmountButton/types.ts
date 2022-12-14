import * as CONSTANTS from "@/types/constants";

type AMOUNT = typeof CONSTANTS.AMOUNT;

export interface AmountButtonProps {
	data: {
		amount: string;
		to_pay: string;
	};
	selected: boolean;
	onClick: (
		field: AMOUNT,
		value: string,
		shouldValidate?: boolean | undefined
	) => void;
}
