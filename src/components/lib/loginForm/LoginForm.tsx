import Input from "@/components/shared/Input";
import React from "react";
import {
	ACCOUNT_PASSWORD,
	BUSINESS_PHONE,
	PASSWORD,
	TEXT,
} from "@/types/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const LoginForm = () => {
	const formik = useFormik({
		initialValues: { phone: "", password: "" },
		validationSchema: Yup.object({
			phone: Yup.string().required("Phone number is required"),
			password: Yup.string().required("Password is required"),
		}),
		onSubmit: (values) => {
			values.phone = values.phone.trim();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				id={BUSINESS_PHONE}
				type={TEXT}
				value={formik.values.phone}
				placeholder={"Phone Number"}
				label="Phone Number"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.errors.phone && formik.touched.phone}
				errorText={formik.errors.phone}
				required={true}
			/>
			<Input
				id={ACCOUNT_PASSWORD}
				type={PASSWORD}
				value={formik.values.password}
				placeholder={"Password"}
				label="Password"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.errors.password && formik.touched.password}
				errorText={formik.errors.password}
				required={true}
			/>
			<Link
				href={"/forgot-password"}
				className="block text-amali-green w-max text-xs lg:text-sm relative before:w-0 before:absolute before:-bottom-px before:mx-auto before:inset-x-0 before:bg-amali-green hover:before:w-full before:transition-all before:duration-500 before:ease-out hover:before:h-[2px]"
			>
				Forgot Password?
			</Link>
			<button className="w-full text-center bg-amali-green text-[#EDF8F7] mt-4 rounded-md py-4 font-bold hover:bg-opacity-80">
				Sign In
			</button>
		</form>
	);
};

export default LoginForm;