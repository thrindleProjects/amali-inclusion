import InternetForm from "@/components/lib/InternetForm";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import React from "react";

const InternetLayout = () => {
	return (
		<AuthLayout>
			<section className="mb-4">
				<h3 className="font-bold mb-6">Internet Data Subscription</h3>
				<p className="text-sm font-extralight">
					Provide information below to complete your purchase process with your
					preferred network provider
				</p>
			</section>
			<div className="w-full lg:w-2/3 xl:w-1/2 mx-auto mt-10">
				<InternetForm />
			</div>
		</AuthLayout>
	);
};

export default InternetLayout;
