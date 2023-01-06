import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React from "react";

const BackButton = () => {
	const router = useRouter();
	return (
		<div className='flex items-center gap-2 mb-4 cursor-pointer' onClick={() =>router.back()}>
			<Icon icon="material-symbols:arrow-back-ios-new" />
			<p>back</p>
		</div>
	);
};

export default BackButton;