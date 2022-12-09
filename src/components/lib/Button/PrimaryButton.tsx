import React from "react";
import { ButtonProps } from "./Button.props";

const PrimaryButton: React.FC<ButtonProps> = ({bgColor, text}) => {
	return (
		<div style={{ backgroundColor: `${bgColor}` }} className='p-4 rounded-lg cursor-pointer w-full mt-4 md:mt-0'>
			<p className="text-sm text-center text-white">{text }</p>
		</div>
	);
};

export default PrimaryButton;