import * as Yup from "yup";
import * as CONSTANTS from "@/types/constants";

export const validationSchema = Yup.object({
	[CONSTANTS.FIRST_NAME]: Yup.string().required("First Name is required"),
	[CONSTANTS.LAST_NAME]: Yup.string().required("Last Name is required"),
	[CONSTANTS.DATE_OF_BIRTH]: Yup.string().required("Date of birth is required"),
	[CONSTANTS.EMAIL_ADDRESS]: Yup.string()
		.required("Email is required")
		.email("Invalid Email"),
	[CONSTANTS.GENDER]: Yup.string().required("Gender is required"),
	[CONSTANTS.AGENT_TYPE]: Yup.string().required("Agent type is required"),
	[CONSTANTS.ACCOUNT_PASSWORD]: Yup.string().required("Password is required"),
	[CONSTANTS.BUSINESS_NAME]: Yup.string().required("Business name is required"),
	[CONSTANTS.BUSINESS_ADDRESS]: Yup.string().required(
		"Business address is required"
	),
	[CONSTANTS.BUSINESS_PHONE]: Yup.string().required(
		"Business phone number is required"
	),
	[CONSTANTS.LOCAL_GOVERNMENT]: Yup.string().required(
		"Please specify your local government"
	),
	[CONSTANTS.AGENT_BUSINESS_TYPE]: Yup.string().required("Select one"),
	[CONSTANTS.AGENT_STATE]: Yup.string().required("Select one"),
	[CONSTANTS.ACCOUNT_NUMBER]: Yup.string().required(
		"Account number is required"
	),
	[CONSTANTS.ACCOUNT_NAME]: Yup.string().required("Account name is required"),
	[CONSTANTS.BANK_NAME]: Yup.string().required("Bank name is required"),
	[CONSTANTS.BVN]: Yup.string().required("BVN is required"),
});

export const initialValues = {
	[CONSTANTS.FIRST_NAME]: "",
	[CONSTANTS.LAST_NAME]: "",
	[CONSTANTS.DATE_OF_BIRTH]: "",
	[CONSTANTS.EMAIL_ADDRESS]: "",
	[CONSTANTS.GENDER]: "",
	[CONSTANTS.AGENT_TYPE]: "",
	[CONSTANTS.ACCOUNT_PASSWORD]: "",
	[CONSTANTS.BUSINESS_NAME]: "",
	[CONSTANTS.BUSINESS_ADDRESS]: "",
	[CONSTANTS.BUSINESS_PHONE]: "",
	[CONSTANTS.LOCAL_GOVERNMENT]: "",
	[CONSTANTS.AGENT_BUSINESS_TYPE]: "",
	[CONSTANTS.AGENT_STATE]: "",
	[CONSTANTS.ACCOUNT_NUMBER]: "",
	[CONSTANTS.ACCOUNT_NAME]: "",
	[CONSTANTS.BANK_NAME]: "",
	[CONSTANTS.BVN]: "",
};
