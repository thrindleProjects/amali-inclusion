import React from "react";
import { DateInputProps } from "./Input.props";

const DateInput: React.FC<DateInputProps> = ({ label, type, placeholder }) => {
	return (
		<div className="mt-4 w-full">
			<p className='text-sm mb-2'>{label}</p>

			<div className=" border border-grey-300 h-auto rounded-md   px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amali-green focus:border-amali-green ">
				<input type={type} placeholder={placeholder} className='w-full h-full outline-none  ' />
			</div>
		</div>
	);
};

export default DateInput;