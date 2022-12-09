export interface CardDataProps {
	id: number;
	image: string;
	text: string;
	color: string;
	number: string;
}

export interface CardProps {
	item: CardDataProps;
	xlWidth: string;
}
