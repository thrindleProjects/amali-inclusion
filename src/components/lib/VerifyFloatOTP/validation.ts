import * as CONSTANTS from "@/types/constants";
import * as Yup from "yup";

export const initialValues = {
	[CONSTANTS.PIN]: "",
};

export const validationSchema = Yup.object({
	[CONSTANTS.PIN]: Yup.string()
		.required("Please specify PIN")
		.min(4, "Pin must be 4 digits long")
		.max(4, "Pin must be 4 digits long"),
});
