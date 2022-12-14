import React from "react";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import ElectricityForm from "@/components/lib/ElectricityForm";

const ElectricityLayout = () => {
	return (
		<AuthLayout>
			<section className="mb-4">
				<h3 className="font-bold mb-6">Electricity</h3>
				<p className="text-sm font-extralight">
					Buy electricity Units from any of the Listed service providers
				</p>
			</section>
			<div className="w-full lg:w-2/3 xl:w-1/2 mx-auto mt-10">
				<ElectricityForm />
			</div>
		</AuthLayout>
	);
};

export default ElectricityLayout;
