import MainContentLayout from "@/layout/MainContentLayout";
import React from "react";

const BuyNowPayLater = () => {
	return (
		<MainContentLayout>
			<div>
				<p className='my-6 font-bold text-center'>Buy Now pay Later</p>
				<iframe className="w-full h-screen" src="https://prodapps.intelligra.io:160/" ></iframe>
			</div>
		</MainContentLayout>
	);
};

export default BuyNowPayLater;