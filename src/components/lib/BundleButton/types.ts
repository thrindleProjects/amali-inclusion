export interface AmountButtonProps {
	data: {
		amount: string;
		to_pay: string;
		duration: string;
	};
	selected: boolean;
	onClick: (
		amount: string,
		value: string,
		shouldValidate?: boolean | undefined
	) => void;
}
