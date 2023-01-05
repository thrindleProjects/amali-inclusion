import React from "react";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import Input from "@/components/shared/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "@/components/shared/Select";
import MainContentLayout from "@/layout/MainContentLayout";
import { agentType, gender } from "@/data/data";

const CreateAgent = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			dob: "",
			phone: "",
			email: "",
			gender: "",
			transactionLimit: "",
			agentType:""
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("First  name is required"),
			lastName: Yup.string().required("Last Name is required"),
			dob: Yup.string().required("Date of birth is required"),
			phone: Yup.string().required("Phone is required"),
			gender: Yup.string().required("Gender is required"),
			transactionLimit: Yup.string().required("Transaction Limit is required"),
			agentType: Yup.string().required(" Agent Type is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<MainContentLayout>
			<BodyLayout>
				<div className="my-8">
					<div className="md:flex justify-between gap-6  ">
						<Input
							id="first-name"
							label="First Name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.firstName && formik.touched.firstName}
							errorText={formik.errors.firstName}
							required={true}
							type="text"
							placeholder="First name"
						/>

						<Input
							id="last-name"
							label="Last Name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.lastName && formik.touched.lastName}
							errorText={formik.errors.lastName}
							required={true}
							type="text"
							placeholder="Last name"
						/>
					</div>
					<div className="md:flex justify-between mt-6 gap-6 ">
						<Input
							id="dob"
							label="Date of birth"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.dob && formik.touched.dob}
							errorText={formik.errors.dob}
							required={true}
							type="date"
							placeholder="Date of Birth"
						/>
						<Input
							id="phone-number"
							label="Phone Number"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.phone && formik.touched.phone}
							errorText={formik.errors.phone}
							required={true}
							type="text"
							placeholder="Phone Number"
						/>
					</div>
					<div className="md:flex justify-between mt-6 gap-6 ">
						<Input
							id="email"
							label="Email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.email && formik.touched.email}
							errorText={formik.errors.email}
							required={true}
							type="email"
							placeholder="Email"
						/>
						<Select
							label="Gender"
							id="gender"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.gender && formik.touched.gender}
							errorText={formik.errors.gender}
							required={true}
							options={gender}
						/>
					</div>
					<div className="md:flex justify-between mt-6 w-full gap-6 ">
						<Select
							label="Agent type"
							id="Agent_type"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.agentType && formik.touched.agentType}
							errorText={formik.errors.agentType}
							required={true}
							options={agentType}
						/>
						<Input
							id="transaction-limit"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.transactionLimit && formik.touched.transactionLimit}
							errorText={formik.errors.transactionLimit}
							required={true}
							type="text"
							label="Transaction Limit"
							placeholder="0 means unlimited"
						/>
					</div>
					<div className="mt-6 mx-auto w-full md:w-[30%]">
						<PrimaryButton
							onClick={formik.handleSubmit}
							text="Create Agent"
							bgColor="#42B0A8"
						/>
					</div>
				</div>
			</BodyLayout>
		</MainContentLayout>
	);
};

export default CreateAgent;
