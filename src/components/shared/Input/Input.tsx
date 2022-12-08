import { DATE, EMAIL, PASSWORD, TEXT } from "@/types/constants";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { MainInput, PasswordInput } from "./styled";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
	error,
	label,
	value,
	onChange,
	onFocus,
	disabled,
	required,
	type,
	onBlur,
	placeholder,
	maxLength,
	className,
	errorText,
	id,
	name,
	...rest
}) => {
	const [hidden, setHidden] = useState<boolean>(true);
	const toggleVisibility = (): void => {
		setHidden((prevState) => !prevState);
	};

	return (
		<div className="w-full mb-5">
			{label && !!label.length && (
				<label
					className="text-xs md:text-sm font-medium pb-1 text-text-color-a"
					htmlFor={id}
				>
					{label}
				</label>
			)}
			{type === PASSWORD && (
				<PasswordInput
					error={error}
					className="w-full py-3 lg:py-4 xl:py-5 border-b-8 shadow-inner transition-all ease-in duration-300 flex flex-row items-center px-2 md:px-4"
				>
					<input
						type={hidden ? PASSWORD : TEXT}
						value={value}
						onChange={onChange}
						onFocus={onFocus}
						disabled={disabled}
						required={required}
						onBlur={onBlur}
						placeholder={placeholder}
						id={id}
						name={name}
						className={`outline-none focus:outline-none bg-transparent h-full w-11/12 text-xs xl:text-sm xl:placeholder:text-sm placeholder:text-xs ${
							className ? className : ""
						}`}
						{...rest}
					/>
					<span className="eye">
						{!hidden ? (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								onClick={toggleVisibility}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								></path>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								onClick={toggleVisibility}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
								/>
							</svg>
						)}
					</span>
				</PasswordInput>
			)}
			{[TEXT, EMAIL, DATE].includes(type) && (
				<MainInput
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					disabled={disabled}
					required={required}
					onBlur={onBlur}
					error={error}
					placeholder={placeholder}
					type={type}
					maxLength={maxLength}
					id={id}
					name={name}
					className={`w-full px-2 md:px-4 py-3 lg:py-4 xl:py-5 outline-none text-xs xl:text-sm xl:placeholder:text-sm placeholder:text-xs border-b-8 shadow-inner transition-all ease-in duration-300 ${
						className ? className : ""
					}`}
					{...rest}
				/>
			)}
			<AnimatePresence>
				{error && (
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						transition={{ ease: "easeOut", duration: 0.5 }}
						className="text-red-300 text-xs font-semibold pt-1 pl-1"
					>
						{errorText}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Input;
