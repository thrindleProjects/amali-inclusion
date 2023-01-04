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
						? `py-8 px-7 lg:pl-14 w-full h-full ${className}`
						: "py-8 px-7 lg:pl-14 w-full h-full"
			}`}
		>
			{children}
		</div>
	);
};

export default MainContentLayout;
