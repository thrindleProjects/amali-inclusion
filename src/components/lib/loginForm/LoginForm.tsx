import Input from "@/components/shared/Input";
import React, { useEffect } from "react";
import {
	PASSWORD,
	TEXT,
} from "@/types/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginForm = () => {
	const router = useRouter();

	useEffect(() => {
		localStorage.setItem("userRole", "master-agent");

	}, []);


	const formik = useFormik({
		initialValues: { phone: "", password: "" },
		validationSchema: Yup.object({
			phone: Yup.string().required("Phone number is required"),
			password: Yup.string().required("Password is required"),
		}),
		onSubmit: (values) => {
			if (values.phone === "08161112404" && values.password === "12345678") {
				router.push("/master-agent");
			} else if (values.phone === "08011111111" && values.password === "12345678") {
				router.push("/admin");
				localStorage.setItem("userRole", "admin");
			} else if (values.phone === "08166939100" && values.password === "12345678") {
				router.push("/sub-agent");
				localStorage.setItem("userRole", "sub-agent");


			}

		},
	});
	console.log({ values: formik.values });

	return (
		<form onSubmit={formik.handleSubmit}>
			<Input
				id={"phone"}
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
				id={"password"}
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
