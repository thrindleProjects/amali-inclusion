import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import React from "react";

const BuyNowPayLater = () => {
	return (
		<AuthLayout>
			<div>
				<p className='my-6 font-bold text-center'>Buy Now pay Later</p>
				<iframe className="w-full h-screen" src="https://prodapps.intelligra.io:160/" ></iframe>
			</div>
		</AuthLayout>
	);
};

export default BuyNowPayLater;