import React from "react";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "@/components/shared/Input";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";

const PaymentSettings = () => {
	const formik = useFormik({
		initialValues: {
			depositFee: "",
			withdrawalFee: "",
			transferFee: "",
			cableCharge: "",
			electricityCharge:""
		},
		validationSchema: Yup.object({
			depositFee: Yup.string().required("Deposit Fee is required"),
			withdrawalFee: Yup.string().required("Withdrawal Fee is required"),
			transferFee: Yup.string().required("Transfer Fee is required"),
			cableCharge: Yup.string().required("Cable TV Subscription Charge is required"),
			electricityCharge: Yup.string().required("Electricity Bill Payment Charge is required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<AuthLayout>
			<p className="my-3 ">PAYMENT SETTINGS</p>

			<BodyLayout>
				<form className="my-10">
					<Input
						id="deposit-fee"
						label="Deposit Fee"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.depositFee && formik.touched.depositFee}
						errorText={formik.errors.depositFee}
						required={true}
						type="text"
					/>
					<div className=" md:flex justify-between gap-6 mt-10">
						<Input
							id="widthdrawal-fee"
							label="Withdrawal Fee "
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.withdrawalFee && formik.touched.withdrawalFee}
							errorText={formik.errors.withdrawalFee}
							required={true}
							type="text"
						/>
						<Input
							id="withdrawal-fee"
							label="Withdrawal Fee"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors.transferFee && formik.touched.transferFee
							}
							errorText={formik.errors.transferFee}
							required={true}
							type="text"
						/>
					</div>
					<div className=" md:flex justify-between gap-6 mt-10">
						<Input
							id="cable"
							label="Cable TV Subscription Charge"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.cableCharge && formik.touched.cableCharge}
							errorText={formik.errors.cableCharge}
							required={true}
							type="text"
						/>
						<Input
							id="electricity"
							label="Electricity Bill Payment Charge"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors.electricityCharge && formik.touched.electricityCharge
							}
							errorText={formik.errors.electricityCharge}
							required={true}
							type="text"
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
		</AuthLayout>
	);
};

export default PaymentSettings;
