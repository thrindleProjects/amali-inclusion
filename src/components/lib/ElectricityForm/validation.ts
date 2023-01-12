import * as CONSTANTS from "@/types/constants";
import * as Yup from "yup";

export const initialValues = {
	[CONSTANTS.ELEC_SERV_TYPE]: "",
	[CONSTANTS.ELECT_SERV_PROVIDER]: "",
	[CONSTANTS.METER_NO]: "",
	[CONSTANTS.CUSTOMER_DETAILS]: "",
	[CONSTANTS.PHONE_NO]: "",
	[CONSTANTS.AMOUNT]: "",
};

export const validationSchema = Yup.object({
	[CONSTANTS.ELEC_SERV_TYPE]: Yup.string()
		.oneOf([CONSTANTS.PREPAID, CONSTANTS.POSTPAID])
		.required("Please specify meter type"),
	[CONSTANTS.ELECT_SERV_PROVIDER]: Yup.string()
		.oneOf([
			CONSTANTS.KANO,
			CONSTANTS.JOS,
			CONSTANTS.PH,
			CONSTANTS.EKO,
			CONSTANTS.IKEJA,
			CONSTANTS.IBADAN,
			CONSTANTS.EEDC,
			CONSTANTS.KADUNA,
			CONSTANTS.AEDC,
		])
		.required("Please specify network provider"),
	[CONSTANTS.PHONE_NO]: Yup.string().required(
		"Please specify recipient phone number"
	),
	[CONSTANTS.CUSTOMER_DETAILS]: Yup.string().required(
		"Please provide customer name"
	),
	[CONSTANTS.METER_NO]: Yup.string().required("Please specify meter no"),
	[CONSTANTS.AMOUNT]: Yup.string().required("Please specify amount"),
	[CONSTANTS.PIN]: Yup.string()
		.required("Please specify PIN")
		.min(4, "Pin must be 4 digits long")
		.max(4, "Pin must be 4 digits long"),
});
