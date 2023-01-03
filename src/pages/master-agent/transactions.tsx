import React from "react";

import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import { transactionsData, transactionTypeOption } from "@/data/data";
import Table from "@/components/lib/Table";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableBody from "@/components/lib/Table/TableBody";
import TableRow from "@/components/lib/Table/TableRow";
import TableCell from "@/components/lib/Table/TableCell";

const Transactions = () => {
	const formik = useFormik({
		initialValues: { fromDate: "", toDate: "", type: "" },
		validationSchema: Yup.object({
			fromDate: Yup.string().required("From date is required"),
			toDate: Yup.string().required("To date is required"),
			type: Yup.string().required("Password is required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<AuthLayout>
			<p className="my-6 text-xl text-amali-grey"> Transactions</p>

			<BodyLayout>
				<div className="md:flex justify-between items-center md:gap-6">
					<Input
						label="From"
						type="date"
						id="from-date"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.fromDate && formik.touched.fromDate}
						errorText={formik.errors.fromDate}
						required={true}
					/>
					<Input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.toDate && formik.touched.toDate}
						errorText={formik.errors.toDate}
						required={true}
						label="To"
						type="date"
						id="to-date"
					/>
					<Select
						label="Type"
						id="type"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.type && formik.touched.type}
						errorText={formik.errors.type}
						required={true}
						options={transactionTypeOption}
					/>
					<PrimaryButton
						onClick={formik.handleSubmit}
						text="Filter Transactions"
						bgColor="#42B0A8"
					/>
				</div>
				<hr className="bg-amali-grey my-4" />
				<div className="mt-10 ">
					<Table>
						<TableHeader
							items={[
								"S/N",
								"Agent Code",
								"Type",
								"Amount",
								"Remark",
								"Status",
								"Date",
							]}
						/>
						<TableBody>
							{transactionsData.map((item, index) => (
								<TableRow key={index}>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.agentCode}</TableCell>
									<TableCell>{item.type}</TableCell>
									<TableCell>{item.amount}</TableCell>
									<TableCell>{item.remark}</TableCell>
									<TableCell>
										<p
											className={
												item.status === "Successful"
													? "p-2 bg-amali-green text-white rounded-lg"
													: "p-2 bg-red-500 text-white rounded-lg"
											}
										>
											{item.status}
										</p>
									</TableCell>
									<TableCell>{item.date}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</BodyLayout>
		</AuthLayout>
	);
};

export default Transactions;
