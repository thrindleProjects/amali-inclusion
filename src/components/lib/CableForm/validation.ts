import * as Yup from "yup";
import * as CONSTANTS from "@/types/constants";

type DSTV = typeof CONSTANTS.DSTV;
type GOTV = typeof CONSTANTS.GOTV;
type STARTIMES = typeof CONSTANTS.STARTIMES;

export const initialValues: {
	[CONSTANTS.CABLE_PROVIDERS]: DSTV | GOTV | STARTIMES | "";
	[CONSTANTS.CABLE_PLAN]: string;
	[CONSTANTS.CABLE_COST]: string;
	[CONSTANTS.CABLE_DURATION]: string;
	[CONSTANTS.SMARTCARD_NO]: string;
	[CONSTANTS.CUSTOMER_DETAILS]: string;
	[CONSTANTS.PHONE_NO]: string;
	[CONSTANTS.PIN]: string;
} = {
	[CONSTANTS.CABLE_PROVIDERS]: "",
	[CONSTANTS.CABLE_PLAN]: "",
	[CONSTANTS.CABLE_COST]: "",
	[CONSTANTS.CABLE_DURATION]: "",
	[CONSTANTS.SMARTCARD_NO]: "",
	[CONSTANTS.CUSTOMER_DETAILS]: "",
	[CONSTANTS.PHONE_NO]: "",
	[CONSTANTS.PIN]: "",
};

export const validationSchema = Yup.object({
	[CONSTANTS.CABLE]: Yup.string()
		.oneOf([CONSTANTS.DSTV, CONSTANTS.GOTV, CONSTANTS.STARTIMES])
		.required("Please select a cable provider"),
	[CONSTANTS.CABLE_PLAN]: Yup.string().required("Please select a cable plan"),
	[CONSTANTS.CABLE_COST]: Yup.string().required("Please select a cable cost"),
	[CONSTANTS.CABLE_DURATION]: Yup.string().required(
		"Please select a cable duration"
	),
	[CONSTANTS.SMARTCARD_NO]: Yup.string().required(
		"Please provide a smartcard number"
	),
	[CONSTANTS.CUSTOMER_DETAILS]: Yup.string().required(
		"Please provide customer details"
	),
	[CONSTANTS.PHONE_NO]: Yup.string().required(
		"Please provide customer phone number"
	),
	[CONSTANTS.PIN]: Yup.string()
		.required("Please input your pin")
		.required("Please specify PIN")
		.min(4, "Pin must be 4 digits long")
		.max(4, "Pin must be 4 digits long"),
});
