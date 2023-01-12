import * as Yup from "yup";

export const initialValues: {
	interest: string | number;
	frequency: string;
	duration: string;
} = {
	interest: "",
	frequency: "",
	duration: "",
};

export const validationSchema = Yup.object({
	interest: Yup.number()
		.required("Please provide an interest rate")
		.typeError("Must be a number")
		.moreThan(0, "Must be greater than zero"),
	frequency: Yup.string().required("Please provide a payment frequency"),
	duration: Yup.string().required("Please provide a duration"),
});
