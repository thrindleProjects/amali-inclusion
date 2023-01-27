import React from "react";
import { ProgressWrapper } from "./styled";
import { FloatProgressProps } from "./types";
import { toast } from "react-hot-toast";

const FloatProgress: React.FC<FloatProgressProps> = ({
	items,
	active,
	onClick,
	available,
}) => {
	const handleOnClick = (item: string | number) => {
		if (available.includes(item)) {
			onClick(item);
			return;
		}
		toast.remove();
		toast.error("Please complete this stage before continuing", {duration: 3000});
		return;
	};

	return (
		<nav className="w-full">
			<ProgressWrapper
				length={items.length}
				className={"w-full grid grid-rows-1 gap-3"}
			>
				{items.map((item) => {
					return (
						<li key={item} className="w-full h-full">
							<button
								onClick={() => handleOnClick(item)}
								className={`w-full h-full border rounded-sm ${
									active === item
										? "bg-amali-green border-transparent"
										: available.includes(item)
											? "bg-transparent border-amali-green"
											: "bg-amali-grey bg-opacity-70 border-amali-grey"
								}`}
							></button>
						</li>
					);
				})}
			</ProgressWrapper>
		</nav>
	);
};

export default FloatProgress;
