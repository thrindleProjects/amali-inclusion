import * as CONSTANTS from "@/types/constants";
import * as Yup from "yup";

export const initialValues: {
	[CONSTANTS.NUMBER_OWN]:
		| typeof CONSTANTS.MY_OWN_NUMBER
		| typeof CONSTANTS.BENEFICIARY_NUMBER
		| "";
	[CONSTANTS.NETWORK_PROVIDER]:
		| typeof CONSTANTS.MTN
		| typeof CONSTANTS._9MOBILE
		| typeof CONSTANTS.AIRTEL
		| typeof CONSTANTS.GLO
		| "";
	[CONSTANTS.RECIPIENTS_PHONE]: string;
	[CONSTANTS.AMOUNT]: string;
	[CONSTANTS.VALUE]: string;
	[CONSTANTS.PIN]: string;
} = {
	[CONSTANTS.NUMBER_OWN]: CONSTANTS.MY_OWN_NUMBER,
	[CONSTANTS.NETWORK_PROVIDER]: "",
	[CONSTANTS.RECIPIENTS_PHONE]: "",
	[CONSTANTS.AMOUNT]: "",
	[CONSTANTS.VALUE]: "",
	[CONSTANTS.PIN]: "",
};

export const validationSchema = Yup.object({
	[CONSTANTS.NUMBER_OWN]: Yup.string()
		.oneOf([CONSTANTS.MY_OWN_NUMBER, CONSTANTS.BENEFICIARY_NUMBER])
		.required("Please specify recipient owner"),
	[CONSTANTS.NETWORK_PROVIDER]: Yup.string()
		.oneOf([CONSTANTS.MTN, CONSTANTS._9MOBILE, CONSTANTS.AIRTEL, CONSTANTS.GLO])
		.required("Please specify network provider"),
	[CONSTANTS.RECIPIENTS_PHONE]: Yup.string().required(
		"Please specify recipient phone number"
	),
	[CONSTANTS.AMOUNT]: Yup.string().required("Please specify amount"),
	[CONSTANTS.VALUE]: Yup.string().required("Please specify value"),
	[CONSTANTS.PIN]: Yup.string().required("Please specify PIN"),
});
