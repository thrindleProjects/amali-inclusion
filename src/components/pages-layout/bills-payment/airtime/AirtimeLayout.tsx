import AirtimeForm from "@/components/lib/AirtimeForm";
import MainContentLayout from "@/layout/MainContentLayout";
import React from "react";

const AirtimeLayout = () => {
	return (
		<MainContentLayout>
			<section className="mb-4">
				<h3 className="font-bold mb-6">Airtime Purchase</h3>
				<p className="text-sm font-extralight">
					Please use the form below to purchase your airtime and and get value
					instantly!
				</p>
			</section>
			<div className="w-full lg:w-2/3 xl:w-1/2 mx-auto mt-10">
				<AirtimeForm />
			</div>
		</MainContentLayout>
	);
};

export default AirtimeLayout;
