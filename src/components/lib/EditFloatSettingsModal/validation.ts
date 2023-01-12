import * as Yup from "yup";

export const initialValues: {
	interest: string | number;
	frequency: string;
} = {
	interest: "",
	frequency: "",
};

export const validationSchema = Yup.object({
	interest: Yup.number()
		.typeError("Must be a number")
		.moreThan(0, "Must be greater than zero"),
	frequency: Yup.string(),
});
