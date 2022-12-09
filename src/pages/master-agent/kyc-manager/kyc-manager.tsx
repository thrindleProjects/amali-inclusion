import Card from "@/components/lib/card/Card";
import { KycVerificationCardData } from "@/data/data";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import React from "react";


const KYCManager = () => {
	return (
		<AuthLayout>
			<p>KYC Verification</p>

			<div className="md:flex  flex-wrap  justify-between">
				{KycVerificationCardData.map((item, index) => (
					<Card key={index} item={item} xlWidth="48%" />
				))}
			</div>

			<p>KYC Verification</p>
			<hr className="bg-amali-grey my-10" />

			<BodyLayout>
				
			</BodyLayout>
		</AuthLayout>
	);
};

export default KYCManager;