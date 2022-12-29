import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import React from "react";
import { useFormik } from "formik";
import * as CONSTANTS from "@/types/constants";
import * as Yup from "yup";
import Input from "@/components/shared/Input";

const CreateCustomerLayout = () => {
	const formik = useFormik({
		initialValues: {
			[CONSTANTS.BVN]: "",
			[CONSTANTS.DATE_OF_BIRTH]: "",
			[CONSTANTS.PHONE_NO]: "",
			[CONSTANTS.EMAIL_ADDRESS]: "",
		},
		validationSchema: Yup.object({
			[CONSTANTS.BVN]: Yup.string().required("Please enter your BVN"),
			[CONSTANTS.DATE_OF_BIRTH]: Yup.string().required(
				"Please enter your date of birth"
			),
			[CONSTANTS.PHONE_NO]: Yup.string().required(
				"Please enter your phone number"
			),
			[CONSTANTS.EMAIL_ADDRESS]: Yup.string()
				.email("Please a valid email address")
				.required("Please enter your email address"),
		}),
		onSubmit: (values) => {
			console.log({ values });
		},
	});
	return (
		<AuthLayout>
			<p className="font-bold mb-6">Dashboard</p>
			<BodyLayout>
				<form onSubmit={formik.handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Input
							id={CONSTANTS.BVN}
							type={CONSTANTS.TEXT}
							value={formik.values[CONSTANTS.BVN]}
							placeholder="Enter your BVN"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors[CONSTANTS.BVN] && formik.touched[CONSTANTS.BVN]
							}
							errorText={formik.errors[CONSTANTS.BVN]}
							required={true}
							label={"BVN"}
						/>
						<Input
							id={CONSTANTS.DATE_OF_BIRTH}
							type={CONSTANTS.DATE}
							value={formik.values[CONSTANTS.DATE_OF_BIRTH]}
							placeholder="Enter your DOB"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors[CONSTANTS.DATE_OF_BIRTH] &&
								formik.touched[CONSTANTS.DATE_OF_BIRTH]
							}
							errorText={formik.errors[CONSTANTS.DATE_OF_BIRTH]}
							required={true}
							label={"Date Of Birth"}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Input
							id={CONSTANTS.PHONE_NO}
							type={CONSTANTS.TEXT}
							value={formik.values[CONSTANTS.PHONE_NO]}
							placeholder="Enter phone number"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors[CONSTANTS.PHONE_NO] &&
								formik.touched[CONSTANTS.PHONE_NO]
							}
							errorText={formik.errors[CONSTANTS.PHONE_NO]}
							required={true}
							label={"Phone Number"}
						/>
						<Input
							id={CONSTANTS.EMAIL_ADDRESS}
							type={CONSTANTS.EMAIL}
							value={formik.values[CONSTANTS.EMAIL_ADDRESS]}
							placeholder="Enter your email address"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors[CONSTANTS.EMAIL_ADDRESS] &&
								formik.touched[CONSTANTS.EMAIL_ADDRESS]
							}
							errorText={formik.errors[CONSTANTS.EMAIL_ADDRESS]}
							required={true}
							label={"Date Of Birth"}
						/>
					</div>
					<button
						type="submit"
						className="bg-amali-green block mx-auto w-full md:w-1/2 px-2 py-4 text-amali-bg text-sm lg:text-base border-2 rounded-md border-transparent hover:bg-amali-bg focus:bg-amali-bg hover:text-amali-green focus:text-amali-green focus:outline-2 focus:outline-amali-green hover:border-amali-green"
					>
						Proceed
					</button>
				</form>
			</BodyLayout>
		</AuthLayout>
	);
};

export default CreateCustomerLayout;
