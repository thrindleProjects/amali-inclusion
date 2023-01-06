export interface CablePlansButtonProps {
	data: {
		name: string;
		value: string;
	};
	selected: boolean;
	onClick: (
		plan: string,
		value: string,
		shouldValidate?: boolean | undefined
	) => void;
}
