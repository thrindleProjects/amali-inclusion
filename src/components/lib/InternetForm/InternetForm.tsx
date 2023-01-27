import React, { useEffect, useState } from "react";
import * as CONSTANTS from "@/types/constants";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import Select from "@/components/shared/Select";
import {
	airtimeNumberOptions,
	dataPlans,
	networtProviderOptions,
} from "@/data/data";
import Input from "@/components/shared/Input";
import { motion, AnimatePresence } from "framer-motion";
import BundleButton from "../BundleButton";
import InternetModal from "../InternetModal";

type NUMBER_OWN = typeof CONSTANTS.NUMBER_OWN;
type AMOUNT = typeof CONSTANTS.AMOUNT;
type RECIPIENTS_PHONE = typeof CONSTANTS.RECIPIENTS_PHONE;
type NETWORK_PROVIDER = typeof CONSTANTS.NETWORK_PROVIDER;
type VALUE = typeof CONSTANTS.VALUE;

const variants = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeOut",
			duration: 0.3,
		},
	},
	hide: {
		y: -20,
		opacity: 0,
	},
};

const InternetForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [activeBundles, setActiveBundles] = useState<
		{
			amount: string;
			to_pay: string;
			duration: string;
		}[]
	>([]);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log({ values });
			setIsOpen(false);
			formik.resetForm();
		},
	});

	const { setFieldTouched } = formik;

	const handleModalOpen = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		await formik.validateForm();
		type ALL_FORM_KEYS =
			| NUMBER_OWN
			| AMOUNT
			| VALUE
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

	const handleBundleButtonClick = async (
		amount: string,
		value: string,
		shouldValidate?: boolean
	) => {
		await formik.setFieldValue(CONSTANTS.AMOUNT, amount, shouldValidate);
		await formik.setFieldTouched(CONSTANTS.AMOUNT, true, shouldValidate);
		await formik.setFieldValue(CONSTANTS.VALUE, value, shouldValidate);
		await formik.setFieldTouched(CONSTANTS.VALUE, true, shouldValidate);
	};
	const networkProvider = formik.values[CONSTANTS.NETWORK_PROVIDER];
	useEffect(() => {
		const selectedProvider = networkProvider;
		if (selectedProvider === "") {
			setActiveBundles([]);
			return;
		}
		setActiveBundles(dataPlans[selectedProvider]);
	}, [networkProvider]);

	useEffect(() => {
		setFieldTouched(CONSTANTS.NUMBER_OWN, true, true);
	}, [setFieldTouched]);

	return (
		<>
			<form onSubmit={formik.handleSubmit} className="pb-6">
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
				{!!activeBundles.length && (
					<div>
						<p className="text-xs md:text-sm font-medium pb-1 text-text-color-a">
							Select Internet Bundle
						</p>
						<motion.div
							key={formik.values[CONSTANTS.NETWORK_PROVIDER]}
							className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4"
							variants={variants}
							animate={"show"}
							initial={"hide"}
						>
							{activeBundles.map((bundle, index) => {
								return (
									<BundleButton
										key={index}
										data={bundle}
										selected={
											bundle.amount === formik.values[CONSTANTS.AMOUNT] &&
											bundle.to_pay === formik.values[CONSTANTS.VALUE]
										}
										onClick={handleBundleButtonClick}
									/>
								);
							})}
						</motion.div>
						<AnimatePresence>
							{((formik.errors[CONSTANTS.AMOUNT] &&
								formik.touched[CONSTANTS.AMOUNT]) ||
								(formik.errors[CONSTANTS.VALUE] &&
									formik.touched[CONSTANTS.VALUE])) && (
								<motion.div
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 100 }}
									transition={{ ease: "easeOut", duration: 0.5 }}
									className="text-red-300 text-xs font-semibold pt-1 pl-1"
								>
									Please select an internet bundle
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				)}
				<button
					className="w-full text-center bg-amali-green text-[#EDF8F7] mt-4 rounded-md py-4 font-bold hover:bg-opacity-80"
					onClick={handleModalOpen}
					type="submit"
				>
					Next
				</button>
			</form>
			<InternetModal
				isOpen={isOpen}
				handleHideModal={handleHideModal}
				onChange={formik.setFieldValue}
				amount={formik.values[CONSTANTS.AMOUNT]}
				recipient={formik.values[CONSTANTS.RECIPIENTS_PHONE]}
				value={formik.values[CONSTANTS.VALUE]}
				onSubmit={formik.handleSubmit}
				pinError={formik.errors[CONSTANTS.PIN] && formik.touched[CONSTANTS.PIN]}
				pinErrorText={formik.errors[CONSTANTS.PIN]}
			/>
		</>
	);
};

export default InternetForm;
