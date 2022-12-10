import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import InputLabel from "../InputLabel";
import { SelectInput } from "./styled";
import { SelectProps } from "./types";

const Select: React.FC<SelectProps> = ({
	label,
	id,
	error,
	options,
	errorText,
	value,
	onChange,
	onFocus,
	disabled,
	required,
	onBlur,
	placeholder,
	name,
}) => {
	return (
		<div className="w-full mb-5">
			{label && !!label.length && <InputLabel id={id} label={label} />}
			<SelectInput
				error={error}
				className="w-full outline-none focus:outline-none py-3 lg:py-4 xl:py-5 border-b-2 shadow-inner transition-all ease-in duration-300 flex flex-row items-center px-2 md:px-4 text-xs xl:text-sm xl:placeholder:text-sm placeholder:text-xs"
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				disabled={disabled}
				required={required}
				onBlur={onBlur}
				placeholder={placeholder}
				id={id}
				name={name}
			>
				<option value="" label={placeholder}>
					Select a {label}
				</option>
				{options &&
					options.map((option, index) => (
						<option key={index} value={option.value} label={option.name}>
							{option.name}
						</option>
					))}
			</SelectInput>
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

export default Select;
