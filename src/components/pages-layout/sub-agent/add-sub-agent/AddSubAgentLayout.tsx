import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import MainContentLayout from "@/layout/MainContentLayout";

const AddSubAgentLayout = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			dob: "",
			phone: "",
			email: "",
			gender: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("First  name is required"),
			lastName: Yup.string().required("Last Name is required"),
			dob: Yup.string().required("Date of birth is required"),
			phone: Yup.string().required("Phone is required"),
			gender: Yup.string().required("Gender is required"),
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
				<div className="">
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
							options={[
								{ name: "Male", value: "male" },
								{ name: "Female", value: "Female" },
							]}
						/>
					</div>
					<div className="md:flex justify-between mt-6 w-full md:w-[48%] ">
						<Input
							id="transaction-limit"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.firstName && formik.touched.firstName}
							errorText={formik.errors.firstName}
							required={true}
							type="text"
							label="Transaction Limit"
							placeholder="0 means unlimited"
						/>
					</div>
					<div className="mt-6 mx-auto w-full md:w-[30%]">
						<PrimaryButton
							onClick={formik.handleSubmit}
							text="Add Submit Agent"
							bgColor="#42B0A8"
						/>
					</div>
				</div>
			</BodyLayout>
		</MainContentLayout>
	);
};

export default AddSubAgentLayout;
