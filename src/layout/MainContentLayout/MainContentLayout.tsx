import React from "react";
import { MainContentLayoutProps } from "./types";

const MainContentLayout: React.FC<MainContentLayoutProps> = ({
	children,
	className,
	overwriteStyles,
	...rest
}) => {
	return (
		<div
			{...rest}
			className={`${
				overwriteStyles && className
					? className
					: className
						? `py-8 px-7 lg:pl-14 w-full h-full overflow-y-auto ${className}`
						: "py-8 px-7 lg:pl-14 w-full h-full overflow-y-auto"
			}`}
		>
			{children}
		</div>
	);
};

export default MainContentLayout;
