import React from "react";
import CableForm from "@/components/lib/CableForm";
import MainContentLayout from "@/layout/MainContentLayout";

const CableLayout = () => {
	return (
		<MainContentLayout>
			<section className="mb-4">
				<h3 className="font-bold mb-6">Cable TV</h3>
				<p className="text-sm font-extralight">
					Subscribe to any of the many Cable TV service providers
				</p>
			</section>
			<div className="w-full lg:w-2/3 xl:w-1/2 mx-auto mt-10">
				<CableForm />
			</div>
		</MainContentLayout>
	);
};

export default CableLayout;
