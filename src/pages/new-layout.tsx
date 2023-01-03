import SideNav from "@/components/shared/SideNav";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { PropsWithChildren } from "react";

const NewLayout: React.FC<PropsWithChildren> = () => {
	const largeScreen = useMediaQuery("(min-width: 1024px)");

	return (
		<div className="layout_wrapper">
			{largeScreen && <SideNav />}
			<div>green</div>
		</div>
	);
};

export default NewLayout;
