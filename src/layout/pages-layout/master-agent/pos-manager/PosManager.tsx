import React from "react";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import { posCardData } from "@/data/data";
import Card from "@/components/lib/card";

const PosManagerLayout = () => {
	return (
		<AuthLayout>
			<section className="mb-4">
				<h3 className="font-bold mb-6">Dashboard</h3>
				<p className="text-sm font-extralight">All POS terminals</p>
				<div className="md:flex flex-wrap lg:flex-nowrap gap-4">
					{posCardData.map((item) => (
						<Card key={item.id} item={item} xlWidth="30%" />
					))}
				</div>
				<button className="bg-amali-green text-white rounded-md py-4 px-2 text-sm lg:text-base">
					Create New Terminal
				</button>
			</section>
			<BodyLayout>
				
			</BodyLayout>
		</AuthLayout>
	);
};

export default PosManagerLayout;
