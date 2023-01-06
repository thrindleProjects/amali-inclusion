import React from "react";
import { AmountButtonProps } from "./types";
import * as CONSTANTS from "@/types/constants";
import { AmountBtn } from "./styled";

const AmountButton: React.FC<AmountButtonProps> = ({
	data,
	onClick,
	selected,
}) => {
	const { amount, to_pay } = data;
	const handleOnClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		onClick(CONSTANTS.AMOUNT, amount, true);
	};
	return (
		<AmountBtn
			selected={selected}
			className="flex flex-col items-center p-4 text-xs xl:text-sm transition-all duration-300"
			onClick={handleOnClick}
		>
			<span>₦{amount}</span>
			<span>pay ₦{to_pay}</span>
		</AmountBtn>
	);
};

export default AmountButton;
