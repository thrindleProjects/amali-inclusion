import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import { dashboardData, tableData, transactionTypeOption } from "@/data/data";
import React from "react";
import Card from "@/components/lib/card";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import * as Yup from "yup";
import {useFormik} from "formik";

const dashboard = () => {

	const formik = useFormik({
		initialValues: { fromDate: "", toDate: "", type:"" },
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
			<div>
				<p className="font-bold mb-6">Dashboard</p>
				<div className="md:flex  flex-wrap  justify-between">
					{dashboardData.map((item, index) => (
						<Card key={index} item={item} xlWidth="30%" />
					))}
				</div>
				<p className="my-4 text-xl text-amali-grey">Recent Transactions</p>
				<BodyLayout >
					<p className="my-4 text-xl text-amali-grey">Filter Transactions</p>
					<div className="md:flex justify-between items-center md:gap-6">
						<Input
							label="From" type='date' id='from-date'
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
							type='date'
							id='to-date' />
						<Select label='Type' id='type'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.type && formik.touched.type}
							errorText={formik.errors.type}
							required={true}
							options={transactionTypeOption} />
						<PrimaryButton onClick={formik.handleSubmit} text="Filter Transactions" bgColor="#42B0A8" />
					</div>
					<div className="mt-10">
						<Table>
							<TableHeader items={[
								"S/N",
								"Agent Code",
								"Type",
								"Amount",
								"Remark",
								"Status",
								"Date",
							]} />
							<TableBody>
								{tableData.map((item, index) => (
									<TableRow key={index}>
										<TableCell>
											<p>{item.id}</p>
										</TableCell>
										<TableCell>
											<p>{item.agentCode}</p>
										</TableCell>
										<TableCell>
											<p>{item.type}</p>
										</TableCell>
										<TableCell>
											<p>{item.amount}</p>
										</TableCell>
										<TableCell>
											<p>{item.remark}</p>
										</TableCell>
										<TableCell>
											<p>{item.status}</p>
										</TableCell>
										<TableCell>
											<p>{item.date}</p>
										</TableCell>

									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>

				</BodyLayout>
			</div>
		</AuthLayout>
	);
};

export default dashboard;