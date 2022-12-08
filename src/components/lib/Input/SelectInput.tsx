import React from "react";
import {  SelectInputProps } from "./Input.props";

const SelectInput: React.FC<SelectInputProps> = ({ label, data }) => {
	return (
		<div className="mt-4 w-full">
			<p className='text-sm mb-2'>{label}</p>

			<div className=" border border-grey-300 h-auto rounded-md   px-3 py-2 ">
				<select className='w-full h-full outline-none' >
					{data.map((item, index) => (
						<option value={item.value} key={index}>{ item.name}</option>
					))}

				</select>
			</div>
		</div>
	);
};

export default SelectInput;