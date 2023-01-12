import React from "react";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import MainContentLayout from "@/layout/MainContentLayout";

const Withdrawal = () => {
	const formik = useFormik({
		initialValues: {
			bankAccount: "",
			amount: "",
			accountNumber: "",
			transferNote: "",
		},
		validationSchema: Yup.object({
			bankAccount: Yup.string().required("Bank account is required"),
			amount: Yup.string().required("Amount required"),
			accountNumber: Yup.string().required("Account Number is required"),
			transferNote: Yup.string().required("Transfer Note required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<MainContentLayout>
			<p className="my-6 text-xl text-amali-grey"> Withdrawal</p>
			<BodyLayout>
				<div className="my-8">
					<div className="md:flex justify-between gap-6  ">
						<Input
							id="amount"
							label="Amount"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.amount && formik.touched.amount}
							errorText={formik.errors.amount}
							required={true}
							type="text"
							placeholder="Amount"
						/>

						<Select
							label="Bank Account"
							id="bank-account"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.bankAccount && formik.touched.bankAccount}
							errorText={formik.errors.bankAccount}
							required={true}
							options={[
								{ name: "GTBank", value: "GTBank" },
								{ name: "Wema", value: "Wema" },
							]}
						/>
					</div>
					<div className="md:flex justify-between mt-6 gap-6 ">
						<Input
							id="account-number"
							label="Date of birth"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors.accountNumber && formik.touched.accountNumber
							}
							errorText={formik.errors.accountNumber}
							required={true}
							type="text"
							placeholder="Account Number"
						/>
						<Input
							id="transfer-note"
							label="Transfer Note"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.transferNote && formik.touched.transferNote}
							errorText={formik.errors.transferNote}
							required={true}
							type="text"
							placeholder="Transfer Note"
						/>
					</div>

					<div className="mt-6 mx-auto w-full md:w-[30%]">
						<PrimaryButton
							onClick={formik.handleSubmit}
							text="Withdraw"
							bgColor="#42B0A8"
						/>
					</div>
				</div>
			</BodyLayout>
		</MainContentLayout>
	);
};

export default Withdrawal;
