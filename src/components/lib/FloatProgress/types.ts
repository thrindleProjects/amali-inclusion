export interface FloatProgressProps {
	items: (string | number)[];
	active: string | number;
	onClick(arg: string | number): void;
	available: (string | number)[];
}
