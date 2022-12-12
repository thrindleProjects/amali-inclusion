import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import Input from "@/components/shared/Input";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import React from "react";

const Terminals = () => {
	return (
		<AuthLayout>
			<p className="my-6 text-xl text-amali-grey"> Profile </p>

			<BodyLayout>
				<div className="md:flex justify-between items-center my-2">
					<p className="text-md w-[30%] text-amali whitespace-nowrap">Name</p>
					<Input
						id="profile-first-name"
						type="text"
						defaultValue={"Admin Admin"}
						readOnly
						className="md:w-[60%] w-full ml-auto"
						
					/>
				</div>
				<div className="md:flex justify-between items-center my-2">
					<p className="text-md w-[30%] text-amali whitespace-nowrap">Email</p>
					<Input
						id="profile-email"
						type="text"
						defaultValue={"Admin@gmail.com"}
						readOnly
						className="md:w-[60%] w-full ml-auto"
					/>
				</div>
				<div className="md:flex justify-between items-center my-2">
					<p className="text-md w-[30%] text-amali whitespace-nowrap">Phone Number</p>
					<Input
						id="profile-phone-number"
						type="text"
						defaultValue={"08011111111"}
						readOnly
						className="md:w-[60%] w-full ml-auto"
					/>
				</div>
				<div className="md:flex justify-between items-center my-2">
					<p className="text-md w-[30%] text-amali whitespace-nowrap">Business Name</p>
					<Input
						id="Business name"
						type="text"
						defaultValue={"Amali"}
						readOnly
						className="md:w-[60%] w-full ml-auto"
					/>
				</div>
				<div className="md:flex justify-between items-center my-2">
					<p className="text-md w-[30%] text-amali whitespace-nowrap">Business Address</p>
					<Input
						id="Business Address"
						type="text"
						defaultValue={"Amali"}
						readOnly
						className="md:w-[60%] w-full ml-auto"
					/>
				</div>
				<div className="md:w-[25%] w-full mt-6 ml-auto">
					<PrimaryButton text="Save Changes" bgColor="#42B0A8" />
				</div>

			</BodyLayout>
		</AuthLayout>
	);
};

export default Terminals;
