import React from "react";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "@/components/shared/Input";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import MainContentLayout from "@/layout/MainContentLayout";

const GeneralSettings = () => {
	const formik = useFormik({
		initialValues: {
			siteTitle: "",
			currency: "",
			currencySymbol: "",
		},
		validationSchema: Yup.object({
			siteTitle: Yup.string().required("First  name is required"),
			currency: Yup.string().required("Last Name is required"),
			currencySymbol: Yup.string().required("Date of birth is required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<MainContentLayout>
			<p className="my-3 ">SYSTEM SETTINGS</p>
			<BodyLayout>
				<form className="my-10">
					<Input
						id="site-title"
						label="Site Title"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.siteTitle && formik.touched.siteTitle}
						errorText={formik.errors.siteTitle}
						required={true}
						type="text"
						defaultValue="Amali"
					/>
					<div className=" md:flex justify-between gap-6 mt-10">
						<Input
							id="currency"
							label="Currency"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.currency && formik.touched.currency}
							errorText={formik.errors.currency}
							required={true}
							type="text"
							defaultValue="NGN"
						/>
						<Input
							id="currency-symbol"
							label="Currency Symbol"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors.currencySymbol && formik.touched.currencySymbol
							}
							errorText={formik.errors.currencySymbol}
							required={true}
							type="text"
							defaultValue="₦"
						/>
					</div>
					<div className="mt-6 mx-auto w-full md:w-[20%]">
						<PrimaryButton
							bgColor="#42B0A8"
							text="Update settings"
							onClick={formik.handleSubmit}
						/>
					</div>
				</form>
			</BodyLayout>
		</MainContentLayout>
	);
};

export default GeneralSettings;
