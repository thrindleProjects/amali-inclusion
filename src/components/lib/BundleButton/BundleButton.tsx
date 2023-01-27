import React from "react";
import { AmountButtonProps } from "./types";
import { BundleBtn } from "./styled";

const AmountButton: React.FC<AmountButtonProps> = ({
	data,
	onClick,
	selected,
}) => {
	const { amount, to_pay, duration } = data;
	const handleOnClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		onClick(amount, to_pay, true);
	};
	return (
		<BundleBtn
			type="button"
			selected={selected}
			className="flex flex-col items-center p-4 text-xs xl:text-sm transition-all duration-300"
			onClick={handleOnClick}
		>
			<span>{amount}</span>
			<span>pay ₦{to_pay}</span>
			<span>{duration}</span>
		</BundleBtn>
	);
};

export default AmountButton;
