import React from "react";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import Input from "@/components/lib/Input";
import SelectInput from "@/components/lib/Input/SelectInput";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";

const CreateAgent = () => {
	return (
		<AuthLayout>
			<BodyLayout>
				<div className="my-8">
					<div className='md:flex justify-between gap-6  '>
						<Input label='First Name' type='text' />
						<Input label='Last Name' type='text' />

					</div>
					<div className='md:flex justify-between mt-6 gap-6 '>
						<Input label='Date of birth' type='date' />
						<Input label='Phone' type='number' />

					</div>
					<div className='md:flex justify-between mt-6 gap-6 '>
						<Input label="Email" type='email' />
						<SelectInput label='Gender' data={[{ name: "Male", value: "male" }, { name: "Female", value: "Female" }]} />

					</div>
					<div className='md:flex justify-between mt-6 w-full md:w-[48%] '>
						<Input label="Transaction Limit" type='text' placeholder="0 means unlimited" />

					</div>
					<div className="mt-6 mx-auto w-full md:w-[30%]">
						<PrimaryButton text="Create Agent" bgColor="#42B0A8" />

					</div>
				</div>
			</BodyLayout>
		</AuthLayout>
	);
};

export default CreateAgent;