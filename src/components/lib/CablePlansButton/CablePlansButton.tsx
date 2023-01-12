import React from "react";
import { CablePlansButtonProps } from "./types";
import { CablePlansButton } from "./styled";

const AmountButton: React.FC<CablePlansButtonProps> = ({
	data,
	onClick,
	selected,
}) => {
	const { name, value } = data;
	const handleOnClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		onClick(name, value, true);
	};
	return (
		<CablePlansButton
			selected={selected}
			className="flex flex-col items-center p-4 text-xs xl:text-sm transition-all duration-300"
			onClick={handleOnClick}
		>
			<span>{name}</span>
			<span>pay ₦{value}</span>
		</CablePlansButton>
	);
};

export default AmountButton;
