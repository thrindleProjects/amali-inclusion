import {
	InputPasswordType,
	InputTextType,
	InputEmailType,
	InputDateType,
} from "@/types/appTypes";
import React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	id: string;
	error?: boolean | string;
	label?: string;
	errorText?: string;
	type: InputPasswordType | InputTextType | InputEmailType | InputDateType;
}
