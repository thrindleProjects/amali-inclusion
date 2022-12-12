import { FormikErrors, FormikValues } from "formik";

export interface InternetModalProps {
	isOpen: boolean;
	handleHideModal(
		e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
	): void;
	onChange: (
		field: string,
		value: string,
		shouldValidate?: boolean | undefined
	) => Promise<FormikErrors<FormikValues>> | Promise<void>;
	amount: string;
	recipient: string;
	value: string
}
