import React, { useState } from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import * as CONSTANTS from "@/types/constants";
import Select from "@/components/shared/Select";
import {
	displayedAmounts,
	elecServiceType,
	elecServiceProvider,
} from "@/data/data";
import Input from "@/components/shared/Input";
import InputLabel from "@/components/shared/InputLabel";
import AmountButton from "../AmountButton";

type AMOUNT = typeof CONSTANTS.AMOUNT;
type PROVIDER = typeof CONSTANTS.ELECT_SERV_PROVIDER;
type METER_TYPE = typeof CONSTANTS.ELEC_SERV_TYPE;
type PHONE = typeof CONSTANTS.PHONE_NO;
type METER = typeof CONSTANTS.METER_NO;

const ElectricityForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleModalOpen = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		formik.validateForm();

		type ALL_FORM_KEYS = PROVIDER | AMOUNT | METER_TYPE | METER | PHONE;

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

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const handleAmountBtnClick = (
		field: AMOUNT,
		value: string,
		shouldValidate?: boolean | undefined
	) => {
		formik.setFieldTouched(field, true, shouldValidate);
		formik.setFieldValue(field, value, shouldValidate);
	};

	return (
		<form onSubmit={formik.handleSubmit} className="pb-6">
			<Select
				id={CONSTANTS.ELEC_SERV_TYPE}
				onChange={formik.handleChange}
				options={elecServiceType}
				value={formik.values[CONSTANTS.ELEC_SERV_TYPE]}
				placeholder={"Select meter type"}
				label={"Meter type"}
				name={CONSTANTS.ELEC_SERV_TYPE}
				onBlur={formik.handleBlur}
				error={
					formik.errors[CONSTANTS.ELEC_SERV_TYPE] &&
					formik.touched[CONSTANTS.ELEC_SERV_TYPE]
				}
				errorText={formik.errors[CONSTANTS.ELEC_SERV_TYPE]}
				required={true}
			/>
			<Select
				id={CONSTANTS.ELECT_SERV_PROVIDER}
				onChange={formik.handleChange}
				options={elecServiceProvider}
				value={formik.values[CONSTANTS.ELECT_SERV_PROVIDER]}
				placeholder={"Select service provider"}
				label={"Service Provider"}
				name={CONSTANTS.ELECT_SERV_PROVIDER}
				onBlur={formik.handleBlur}
				error={
					formik.errors[CONSTANTS.ELECT_SERV_PROVIDER] &&
					formik.touched[CONSTANTS.ELECT_SERV_PROVIDER]
				}
				errorText={formik.errors[CONSTANTS.ELECT_SERV_PROVIDER]}
				required={true}
			/>
			<Input
				id={CONSTANTS.METER_NO}
				type={CONSTANTS.TEXT}
				value={formik.values[CONSTANTS.METER_NO]}
				placeholder="Enter your meter number"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={
					formik.errors[CONSTANTS.METER_NO] &&
					formik.touched[CONSTANTS.METER_NO]
				}
				errorText={formik.errors[CONSTANTS.METER_NO]}
				required={true}
				label={"Meter number"}
			/>
			<Input
				id={CONSTANTS.CUSTOMER_DETAILS}
				type={CONSTANTS.TEXT}
				value={formik.values[CONSTANTS.CUSTOMER_DETAILS]}
				placeholder="Enter your name"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={
					formik.errors[CONSTANTS.CUSTOMER_DETAILS] &&
					formik.touched[CONSTANTS.CUSTOMER_DETAILS]
				}
				errorText={formik.errors[CONSTANTS.CUSTOMER_DETAILS]}
				required={true}
				label={"Customer Name"}
			/>
			<div className="flex gap-2">
				<div className="flex-shrink-0 text-xs xl:text-sm h-max bg-[#88c3c120] py-3 lg:py-4 xl:py-5 w-max px-3 border-b-2 border-[#88c3c1] cursor-default">
					🇳🇬 +234
				</div>
				<Input
					id={CONSTANTS.PHONE_NO}
					type={CONSTANTS.TEXT}
					value={formik.values[CONSTANTS.PHONE_NO]}
					placeholder="Enter phone number"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.errors[CONSTANTS.PHONE_NO] &&
						formik.touched[CONSTANTS.PHONE_NO]
					}
					errorText={formik.errors[CONSTANTS.PHONE_NO]}
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
						formik.errors[CONSTANTS.AMOUNT] && formik.touched[CONSTANTS.AMOUNT]
					}
					errorText={formik.errors[CONSTANTS.AMOUNT]}
					required={true}
				/>
			</section>
			<button
				className="w-full text-center bg-amali-green text-[#EDF8F7] mt-4 rounded-md py-4 font-bold hover:bg-opacity-80"
				onClick={handleModalOpen}
			>
				Next
			</button>
		</form>
	);
};

export default ElectricityForm;
