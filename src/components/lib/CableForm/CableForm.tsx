import React, { useState, useEffect } from "react";
import Select from "@/components/shared/Select";
import Input from "@/components/shared/Input";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import { cableProviders, cablePlans } from "@/data/data";
import * as CONSTANTS from "@/types/constants";
import CablePlansButton from "@/components/lib/CablePlansButton";
import { motion, AnimatePresence } from "framer-motion";

const CableForm = () => {
	const [activePlans, setActivePlans] = useState<
		{
			name: string;
			value: string;
		}[]
	>([]);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log({ values });
		},
	});

	const handleCablePlansBtnClick = async (
		plan: string,
		value: string,
		shouldValidate?: boolean
	) => {
		await formik.setFieldValue(CONSTANTS.CABLE_PLAN, plan, shouldValidate);
		await formik.setFieldValue(CONSTANTS.CABLE_COST, value, shouldValidate);
		await formik.setFieldTouched(CONSTANTS.CABLE_PLAN, true, shouldValidate);
		await formik.setFieldTouched(CONSTANTS.CABLE_COST, true, shouldValidate);
	};

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

	const cableProvider = formik.values[CONSTANTS.CABLE_PROVIDERS];

	useEffect(() => {
		const selectedProvider = formik.values[CONSTANTS.CABLE_PROVIDERS];
		if (selectedProvider === "") {
			setActivePlans([]);
			return;
		}
		setActivePlans(cablePlans[selectedProvider]);
	}, [formik.values, cableProvider]);

	return (
		<form className="pb-6" onSubmit={formik.handleSubmit}>
			<Select
				id={CONSTANTS.CABLE_PROVIDERS}
				onChange={formik.handleChange}
				options={cableProviders}
				value={formik.values[CONSTANTS.CABLE_PROVIDERS]}
				placeholder={"Select Provider"}
				label={"Select Cable Provider"}
				name={CONSTANTS.CABLE_PROVIDERS}
				onBlur={formik.handleBlur}
				error={
					formik.errors[CONSTANTS.CABLE_PROVIDERS] &&
					formik.touched[CONSTANTS.CABLE_PROVIDERS]
				}
				errorText={formik.errors[CONSTANTS.CABLE_PROVIDERS]}
				required={true}
			/>
			<section className="mb-5">
				<p className="text-xs md:text-sm font-medium pb-1 text-text-color-a">
					Select a cable Plan
				</p>
				{activePlans.length ? (
					<motion.div
						className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4"
						key={formik.values[CONSTANTS.CABLE_PROVIDERS]}
						variants={variants}
						animate={"show"}
						initial={"hide"}
					>
						{activePlans.map((item) => {
							return (
								<CablePlansButton
									key={item.name}
									data={item}
									selected={
										item.name === formik.values[CONSTANTS.CABLE_PLAN] &&
										item.value === formik.values[CONSTANTS.CABLE_COST]
									}
									onClick={handleCablePlansBtnClick}
								/>
							);
						})}
					</motion.div>
				) : (
					<span className="text-red-300 text-xs md:text-sm font-medium pb-1">
						Please select a cable provider first
					</span>
				)}
				<AnimatePresence>
					{(formik.errors[CONSTANTS.CABLE_PLAN] ||
						formik.errors[CONSTANTS.CABLE_COST]) && (
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100 }}
							transition={{ ease: "easeOut", duration: 0.5 }}
							className="text-red-300 text-xs font-semibold pt-1 pl-1"
						>
							Please select a cable provider and cable plan
						</motion.div>
					)}
				</AnimatePresence>
			</section>
			<Input
				id={CONSTANTS.SMARTCARD_NO}
				type={CONSTANTS.TEXT}
				value={formik.values[CONSTANTS.SMARTCARD_NO]}
				placeholder="Enter smartcard number"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={
					formik.errors[CONSTANTS.SMARTCARD_NO] &&
					formik.touched[CONSTANTS.SMARTCARD_NO]
				}
				errorText={formik.errors[CONSTANTS.SMARTCARD_NO]}
				required={true}
				label={"Smartcard Number"}
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
			<button
				className="w-full text-center bg-amali-green text-[#EDF8F7] mt-4 rounded-md py-4 font-bold hover:bg-opacity-80"
				type="submit"
			>
				Next
			</button>
		</form>
	);
};

export default CableForm;
