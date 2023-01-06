import * as Yup from "yup";
import * as CONSTANTS from "@/types/constants";

export const validationSchema = Yup.object({
	[CONSTANTS.TERMINAL_ID]: Yup.string().required("Terminal ID is required"),
	[CONSTANTS.TERMINAL_NUMBER]: Yup.string().required(
		"Terminal number is required"
	),
});

export const initialValues: {
	[CONSTANTS.TERMINAL_ID]: string;
	[CONSTANTS.TERMINAL_NUMBER]: string;
} = {
	[CONSTANTS.TERMINAL_ID]: "",
	[CONSTANTS.TERMINAL_NUMBER]: "",
};
