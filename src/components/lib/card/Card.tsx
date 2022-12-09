import { Icon } from "@iconify/react";
import React from "react";
import { CardProps } from "./Card.props";

const Card: React.FC<CardProps> = ({  item, xlWidth }) => {
	return (
		<div
			style={{ backgroundColor: `${item.color}` }}
			className={`my-6  w-full  lg:w-[${xlWidth}] md:w-[48%] px-4 py-6 flex justify-between items-center rounded-lg shadow-md text-white`}
		>
			<div>
				<p className="font-semi-bold text-xl md:text-2xl mb-4">
					{item.number.toLocaleString()}
				</p>
				<p className="text-sm">{item.text}</p>
			</div>
			<Icon icon={item.image} className="text-6xl" />
		</div>
	);
};

export default Card;
