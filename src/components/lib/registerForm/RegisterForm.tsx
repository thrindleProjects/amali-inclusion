import React from "react";
import Input from "@/components/shared/Input";
import * as CONSTANTS from "@/types/constants";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "./validation";
import Select from "@/components/shared/Select";
import {
	agent_business_type,
	agent_type_options,
	genderOptions,
	state_options,
} from "@/types/signupData";
import InputFile from "@/components/shared/InputFile";

const RegisterForm = () => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log({ values });
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<section>
				<h3 className="mb-3 font-semibold text-sm md:text-xl border-b border-b-amali-grey">
					PERSONAL DETAILS
				</h3>
				<div className="grid md:grid-cols-2 md:gap-4">
					<Input
						id={CONSTANTS.FIRST_NAME}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.FIRST_NAME]}
						placeholder={"First Name"}
						label={"First Name"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.FIRST_NAME] &&
							formik.touched[CONSTANTS.FIRST_NAME]
						}
						errorText={formik.errors[CONSTANTS.FIRST_NAME]}
						required={true}
					/>
					<Input
						id={CONSTANTS.LAST_NAME}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.LAST_NAME]}
						placeholder={"Last Name"}
						label={"Last Name"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.LAST_NAME] &&
							formik.touched[CONSTANTS.LAST_NAME]
						}
						errorText={formik.errors[CONSTANTS.LAST_NAME]}
						required={true}
					/>
				</div>

				<div className="grid md:grid-cols-2 md:gap-4">
					<Input
						id={CONSTANTS.DATE_OF_BIRTH}
						type={CONSTANTS.DATE}
						value={formik.values[CONSTANTS.DATE_OF_BIRTH]}
						placeholder={"Date of Birth"}
						label={"Date of Birth"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.DATE_OF_BIRTH] &&
							formik.touched[CONSTANTS.DATE_OF_BIRTH]
						}
						errorText={formik.errors[CONSTANTS.DATE_OF_BIRTH]}
						required={true}
					/>
					<Input
						id={CONSTANTS.EMAIL_ADDRESS}
						type={CONSTANTS.EMAIL}
						value={formik.values[CONSTANTS.EMAIL_ADDRESS]}
						placeholder={"Email"}
						label={"Email"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.EMAIL_ADDRESS] &&
							formik.touched[CONSTANTS.EMAIL_ADDRESS]
						}
						errorText={formik.errors[CONSTANTS.EMAIL_ADDRESS]}
						required={true}
					/>
				</div>

				<div className="grid md:grid-cols-2 md:gap-4">
					<Select
						id={CONSTANTS.GENDER}
						value={formik.values[CONSTANTS.GENDER]}
						placeholder={"Select a gender"}
						label={"Gender"}
						name={CONSTANTS.GENDER}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.GENDER] &&
							formik.touched[CONSTANTS.GENDER]
						}
						errorText={formik.errors[CONSTANTS.GENDER]}
						required={true}
						options={genderOptions}
					/>
					<Select
						id={CONSTANTS.AGENT_TYPE}
						value={formik.values[CONSTANTS.AGENT_TYPE]}
						placeholder={"Select an agent type"}
						label={"AGENT TYPE"}
						name={CONSTANTS.AGENT_TYPE}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.AGENT_TYPE] &&
							formik.touched[CONSTANTS.AGENT_TYPE]
						}
						errorText={formik.errors[CONSTANTS.AGENT_TYPE]}
						required={true}
						options={agent_type_options}
					/>
				</div>

				<Input
					id={CONSTANTS.ACCOUNT_PASSWORD}
					type={CONSTANTS.PASSWORD}
					value={formik.values[CONSTANTS.ACCOUNT_PASSWORD]}
					placeholder={"Password"}
					label="Password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.errors[CONSTANTS.ACCOUNT_PASSWORD] &&
						formik.touched[CONSTANTS.ACCOUNT_PASSWORD]
					}
					errorText={formik.errors[CONSTANTS.ACCOUNT_PASSWORD]}
					required={true}
				/>
			</section>
			<section>
				<h3 className="mb-3 font-semibold text-sm md:text-xl border-b border-b-amali-grey">
					BUSINESS INFORMATION
				</h3>
				<div className="grid md:grid-cols-2 md:gap-4">
					<Input
						id={CONSTANTS.BUSINESS_NAME}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.BUSINESS_NAME]}
						placeholder={"Enter your business name"}
						label={"Business Name"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.BUSINESS_NAME] &&
							formik.touched[CONSTANTS.BUSINESS_NAME]
						}
						errorText={formik.errors[CONSTANTS.BUSINESS_NAME]}
						required={true}
					/>
					<Input
						id={CONSTANTS.BUSINESS_ADDRESS}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.BUSINESS_ADDRESS]}
						placeholder={"Enter your business address"}
						label={"Business Address"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.BUSINESS_ADDRESS] &&
							formik.touched[CONSTANTS.BUSINESS_ADDRESS]
						}
						errorText={formik.errors[CONSTANTS.BUSINESS_ADDRESS]}
						required={true}
					/>
				</div>
				<div className="grid md:grid-cols-2 md:gap-4">
					<Input
						id={CONSTANTS.BUSINESS_PHONE}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.BUSINESS_PHONE]}
						placeholder={"Enter your business phone number"}
						label={"Business Phone Number"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.BUSINESS_PHONE] &&
							formik.touched[CONSTANTS.BUSINESS_PHONE]
						}
						errorText={formik.errors[CONSTANTS.BUSINESS_PHONE]}
						required={true}
					/>
					<Input
						id={CONSTANTS.LOCAL_GOVERNMENT}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.LOCAL_GOVERNMENT]}
						placeholder={"Enter your local government"}
						label={"Local Government"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.LOCAL_GOVERNMENT] &&
							formik.touched[CONSTANTS.LOCAL_GOVERNMENT]
						}
						errorText={formik.errors[CONSTANTS.LOCAL_GOVERNMENT]}
						required={true}
					/>
				</div>
				<div className="grid md:grid-cols-2 md:gap-4">
					<Select
						id={CONSTANTS.AGENT_BUSINESS_TYPE}
						value={formik.values[CONSTANTS.AGENT_BUSINESS_TYPE]}
						placeholder={"Select business type"}
						label={"Agent Business Type"}
						name={CONSTANTS.AGENT_BUSINESS_TYPE}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.AGENT_BUSINESS_TYPE] &&
							formik.touched[CONSTANTS.AGENT_BUSINESS_TYPE]
						}
						errorText={formik.errors[CONSTANTS.AGENT_BUSINESS_TYPE]}
						required={true}
						options={agent_business_type}
					/>
					<Select
						id={CONSTANTS.AGENT_STATE}
						value={formik.values[CONSTANTS.AGENT_STATE]}
						placeholder={"Select a state"}
						label={"State"}
						name={CONSTANTS.AGENT_STATE}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.AGENT_STATE] &&
							formik.touched[CONSTANTS.AGENT_STATE]
						}
						errorText={formik.errors[CONSTANTS.AGENT_STATE]}
						required={true}
						options={state_options}
					/>
				</div>
			</section>
			<section>
				<h3 className="mb-3 font-semibold text-sm md:text-xl border-b border-b-amali-grey">
					ACCOUNT INFORMATION
				</h3>
				<div className="grid md:grid-cols-2 md:gap-4">
					<Input
						id={CONSTANTS.ACCOUNT_NUMBER}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.ACCOUNT_NUMBER]}
						placeholder={"Enter your account number"}
						label={"Account Number"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.ACCOUNT_NUMBER] &&
							formik.touched[CONSTANTS.ACCOUNT_NUMBER]
						}
						errorText={formik.errors[CONSTANTS.ACCOUNT_NUMBER]}
						required={true}
					/>
					<Input
						id={CONSTANTS.ACCOUNT_NAME}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.ACCOUNT_NAME]}
						placeholder={"Enter your account name"}
						label={"Account Name"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.ACCOUNT_NAME] &&
							formik.touched[CONSTANTS.ACCOUNT_NAME]
						}
						errorText={formik.errors[CONSTANTS.ACCOUNT_NAME]}
						required={true}
					/>
				</div>
				<div className="grid md:grid-cols-2 md:gap-4">
					<Select
						id={CONSTANTS.BANK_NAME}
						value={formik.values[CONSTANTS.BANK_NAME]}
						placeholder={"Select bank name"}
						label={"Bank Name"}
						name={CONSTANTS.BANK_NAME}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.BANK_NAME] &&
							formik.touched[CONSTANTS.BANK_NAME]
						}
						errorText={formik.errors[CONSTANTS.BANK_NAME]}
						required={true}
						// options={BANK_NAME}
					/>
					<Input
						id={CONSTANTS.BVN}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.BVN]}
						placeholder={"Enter your BVN"}
						label={"BVN"}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.BVN] && formik.touched[CONSTANTS.BVN]
						}
						errorText={formik.errors[CONSTANTS.BVN]}
						required={true}
					/>
				</div>
			</section>
			<section>
				<h3 className="mb-3 font-semibold text-sm md:text-xl border-b border-b-amali-grey">
					DOCUMENT UPLOAD
				</h3>
				<div className="grid md:grid-cols-2 md:gap-4">
					<InputFile
						label={"Utility Bill"}
						id={CONSTANTS.UTILITY_BILL}
						name={CONSTANTS.UTILITY_BILL}
						type="file"
						placeholder="Choose File"
						onChange={formik.setFieldValue}
						onBlur={formik.handleBlur}
						value={formik.values[CONSTANTS.UTILITY_BILL]}
						error={
							formik.errors[CONSTANTS.UTILITY_BILL] &&
							formik.touched[CONSTANTS.UTILITY_BILL]
						}
						errorText={formik.errors[CONSTANTS.UTILITY_BILL]}
						required={true}
					/>
					<InputFile
						label={"Guarantor Form"}
						id={CONSTANTS.GUARANTOR_FORM}
						name={CONSTANTS.GUARANTOR_FORM}
						type="file"
						placeholder="Choose File"
						onChange={formik.setFieldValue}
						onBlur={formik.handleBlur}
						value={formik.values[CONSTANTS.GUARANTOR_FORM]}
						error={
							formik.errors[CONSTANTS.GUARANTOR_FORM] &&
							formik.touched[CONSTANTS.GUARANTOR_FORM]
						}
						errorText={formik.errors[CONSTANTS.GUARANTOR_FORM]}
						required={true}
					/>
				</div>
				<div className="grid md:grid-cols-2 md:gap-4">
					<InputFile
						label={"ID Card"}
						id={CONSTANTS.ID_CARD}
						name={CONSTANTS.ID_CARD}
						type="file"
						placeholder="Choose File"
						onChange={formik.setFieldValue}
						onBlur={formik.handleBlur}
						value={formik.values[CONSTANTS.ID_CARD]}
						error={
							formik.errors[CONSTANTS.ID_CARD] &&
							formik.touched[CONSTANTS.ID_CARD]
						}
						errorText={formik.errors[CONSTANTS.ID_CARD]}
						required={true}
						extensions="image/*, .doc, .docx, .pdf"
					/>
					<InputFile
						label={"Passport Photograph"}
						id={CONSTANTS.PASSPORT_PHOTO}
						name={CONSTANTS.PASSPORT_PHOTO}
						type="file"
						placeholder="Choose File"
						onChange={formik.setFieldValue}
						onBlur={formik.handleBlur}
						value={formik.values[CONSTANTS.PASSPORT_PHOTO]}
						error={
							formik.errors[CONSTANTS.PASSPORT_PHOTO] &&
							formik.touched[CONSTANTS.PASSPORT_PHOTO]
						}
						errorText={formik.errors[CONSTANTS.PASSPORT_PHOTO]}
						required={true}
						extensions="image/*"
					/>
				</div>
			</section>
			<button className="w-full text-center bg-amali-green text-[#EDF8F7] mt-4 rounded-md py-4 font-bold hover:bg-opacity-80">
				Create Account
			</button>
		</form>
	);
};

export default RegisterForm;
