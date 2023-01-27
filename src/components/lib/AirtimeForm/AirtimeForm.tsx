import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import Select from "@/components/shared/Select";
import {
	airtimeNumberOptions,
	displayedAmounts,
	networtProviderOptions,
} from "@/data/data";
import * as CONSTANTS from "@/types/constants";
import Input from "@/components/shared/Input";
import InputLabel from "@/components/shared/InputLabel";
import AmountButton from "../AmountButton";
import AirtimeModal from "../AirtimeModal";

type NUMBER_OWN = typeof CONSTANTS.NUMBER_OWN;
type AMOUNT = typeof CONSTANTS.AMOUNT;
type RECIPIENTS_PHONE = typeof CONSTANTS.RECIPIENTS_PHONE;
type NETWORK_PROVIDER = typeof CONSTANTS.NETWORK_PROVIDER;
const AirtimeForm = () => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log({ values });
		},
	});
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { setFieldTouched } = formik;

	const handleModalOpen = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		formik.validateForm();

		type ALL_FORM_KEYS =
			| NUMBER_OWN
			| AMOUNT
			| RECIPIENTS_PHONE
			| NETWORK_PROVIDER;

		const all_form_keys: ALL_FORM_KEYS[] = Object.keys(formik.values).filter(
			(key) => key !== CONSTANTS.PIN
		) as ALL_FORM_KEYS[];
		const invalidFields = all_form_keys.filter((key) => {
			const isValid = formik.touched[key] && !formik.errors[key];
			if (!isValid) {
				formik.setFieldTouched(key, true, true);
			}
			return !isValid;
		});
		if (!invalidFields.length) {
			setIsOpen(true);
			return;
		}
	};

	const handleHideModal = (
		e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
	) => {
		e.preventDefault();
		formik.setFieldValue(CONSTANTS.PIN, ""); 
		setIsOpen(false);
	};

	const handleAmountBtnClick = (
		field: AMOUNT,
		value: string,
		shouldValidate?: boolean | undefined
	) => {
		formik.setFieldTouched(field, true, shouldValidate);
		formik.setFieldValue(field, value, shouldValidate);
	};

	useEffect(() => {
		setFieldTouched(CONSTANTS.NUMBER_OWN, true, true);
	}, [setFieldTouched]);

	return (
		<>
			<form
				onSubmit={formik.handleSubmit}
				action="choose-plans"
				className="pb-6"
			>
				<Select
					id={CONSTANTS.NUMBER_OWN}
					onChange={formik.handleChange}
					options={airtimeNumberOptions}
					value={formik.values[CONSTANTS.NUMBER_OWN]}
					placeholder={"Select one"}
					label={"Whose number do you want to send the airtime to?"}
					name={CONSTANTS.NUMBER_OWN}
					onBlur={formik.handleBlur}
					error={
						formik.errors[CONSTANTS.NUMBER_OWN] &&
						formik.touched[CONSTANTS.NUMBER_OWN]
					}
					errorText={formik.errors[CONSTANTS.NUMBER_OWN]}
					required={true}
				/>
				<Select
					id={CONSTANTS.NETWORK_PROVIDER}
					onChange={formik.handleChange}
					options={networtProviderOptions}
					value={formik.values[CONSTANTS.NETWORK_PROVIDER]}
					placeholder={"Select a network provider"}
					name={CONSTANTS.NETWORK_PROVIDER}
					onBlur={formik.handleBlur}
					error={
						formik.errors[CONSTANTS.NETWORK_PROVIDER] &&
						formik.touched[CONSTANTS.NETWORK_PROVIDER]
					}
					label="Select a network provider"
					errorText={formik.errors[CONSTANTS.NETWORK_PROVIDER]}
					required={true}
				/>
				<div className="flex gap-2">
					<div className="flex-shrink-0 text-xs xl:text-sm h-max bg-[#88c3c120] py-3 lg:py-4 xl:py-5 w-max px-3 border-b-2 border-[#88c3c1] cursor-default">
						🇳🇬 +234
					</div>
					<Input
						id={CONSTANTS.RECIPIENTS_PHONE}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.RECIPIENTS_PHONE]}
						placeholder="Enter phone number"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.RECIPIENTS_PHONE] &&
							formik.touched[CONSTANTS.RECIPIENTS_PHONE]
						}
						errorText={formik.errors[CONSTANTS.RECIPIENTS_PHONE]}
						required={true}
					/>
				</div>
				<section>
					<InputLabel id={CONSTANTS.AMOUNT} label={"Select Amount (NGN)"} />
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
						{displayedAmounts.map((item) => {
							return (
								<AmountButton
									key={item.amount}
									data={item}
									selected={item.amount === formik.values[CONSTANTS.AMOUNT]}
									onClick={handleAmountBtnClick}
								/>
							);
						})}
					</div>
					<Input
						id={CONSTANTS.AMOUNT}
						type={CONSTANTS.TEXT}
						value={formik.values[CONSTANTS.AMOUNT]}
						placeholder="Enter an amount"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.errors[CONSTANTS.AMOUNT] &&
							formik.touched[CONSTANTS.AMOUNT]
						}
						errorText={formik.errors[CONSTANTS.AMOUNT]}
						required={true}
					/>
				</section>
				<button
					className="w-full text-center bg-amali-green text-[#EDF8F7] mt-4 rounded-md py-4 font-bold hover:bg-opacity-80"
					onClick={handleModalOpen}
					// type="submit"
				>
					Next
				</button>
			</form>
			<AirtimeModal
				isOpen={isOpen}
				handleHideModal={handleHideModal}
				onChange={formik.setFieldValue}
				amount={formik.values[CONSTANTS.AMOUNT]}
				recipient={formik.values[CONSTANTS.RECIPIENTS_PHONE]}
				onSubmit={formik.handleSubmit}
				pinError={formik.errors[CONSTANTS.PIN] && formik.touched[CONSTANTS.PIN]}
				pinErrorText={formik.errors[CONSTANTS.PIN]}
			/>
		</>
	);
};

export default AirtimeForm;
