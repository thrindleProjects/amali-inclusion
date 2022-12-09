import React from "react";
import InputLabel from "../InputLabel";
import { FileInput } from "./styled";
import { InputFileProps } from "./types";
import { AnimatePresence, motion } from "framer-motion";

const InputFile: React.FC<InputFileProps<HTMLInputElement>> = ({
	error,
	label,
	value,
	onChange,
	required,
	onBlur,
	placeholder,
	className,
	errorText,
	id,
	name,
	multiple,
	extensions,
}) => {
	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (!file) {
			return;
		}

		console.log({ file, name });
		onChange(id, file);
	};

	return (
		<div className="w-full mb-5">
			{label && !!label.length && <InputLabel id={id} label={label} />}
			<FileInput
				className={`relative w-full px-2 md:px-4 outline-none text-xs xl:text-sm xl:placeholder:text-sm placeholder:text-xs border-b-2 shadow-inner transition-all ease-in duration-300 ${
					className ? className : ""
				}`}
			>
				<input
					type="file"
					name={name}
					id={id}
					onBlur={onBlur}
					className="absolute w-full h-full opacity-0"
					required={required}
					onChange={handleFileUpload}
					multiple={Boolean(multiple)}
					accept={`${extensions ? extensions : ".doc, .docx, .pdf"}`}
				/>
				<div className="grid grid-cols-4 divide-x-2 divide-amali-grey">
					<span className="col-span-1 py-3 lg:py-4 xl:py-5 text-center">{placeholder}</span>
					<span className="col-span-3 py-3 lg:py-4 xl:py-5 pl-2 flex items-center">
						{value && typeof value !== "string" ? value.name : "No file chosen"}
					</span>
				</div>
			</FileInput>
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

export default InputFile;
