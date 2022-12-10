import React from "react";
import { InputLabelProps } from "./types";

const InputLabel: React.FC<InputLabelProps> = ({ id = "", label }) => {
	if (!id || !label) {
		return <></>;
	}
	return (
		<label
			className="text-xs md:text-sm font-medium pb-1 text-text-color-a"
			htmlFor={id}
		>
			{label}
		</label>
	);
};

export default InputLabel;
