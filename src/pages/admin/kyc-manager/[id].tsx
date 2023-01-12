import React from "react";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import BackButton from "@/components/lib/backButton/BackButton";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import MainContentLayout from "@/layout/MainContentLayout";

const SingleKYCManager = () => {
	return (
		<MainContentLayout>
			<div className="h-screen">
				<BackButton />
				<p className="text-lg text-mali-grey mb-10">View KYC Verification</p>
				<BodyLayout>
					<div className="my-6  md:w-[30%] md:flex justify-between gap-10">
						<PrimaryButton text="Approve KYC" bgColor="#42B0A8" />
						<PrimaryButton text="Reject KYC" bgColor="red" />
					</div>
					<div className="lg:flex justify-between gap-6">
						<div className=" w-full lg:w-[60%]">
							<table id="customers" className=" w-full h-full ">
								<tr>
									<td>Agent Name</td>
									<td>Master Agent</td>
								</tr>
								<tr>
									<td>Agent Email</td>
									<td>amalimaster@gmail.com</td>
								</tr>
								<tr>
									<td>Agent Phone</td>
									<td>08161112404</td>
								</tr>
								<tr>
									<td>Agent Status</td>
									<td>Approved</td>
								</tr>
							</table>
						</div>
						<div className="bg-white border border-grey-amali w-full lg:w-[40%] h-[300px] mt-10 lg:mt-0 flex justify-center items-center">
							<div>
								<p className="text-sm ">Utility bill</p>
								<div className=" bg-amali-green text-white text-xs p-1 rounded-md mt-2">
									download
								</div>
							</div>
						</div>
					</div>
				</BodyLayout>
			</div>
		</MainContentLayout>
	);
};

export default SingleKYCManager;
