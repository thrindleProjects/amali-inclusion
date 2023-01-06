import * as Yup from "yup";
import * as CONSTANTS from "@/types/constants";

export const initialValues = {
	[CONSTANTS.LOAN_AMOUNT]: "",
};

export const validationSchema = Yup.object({
	[CONSTANTS.LOAN_AMOUNT]: Yup.string().required("Please provide an amount"),
});
