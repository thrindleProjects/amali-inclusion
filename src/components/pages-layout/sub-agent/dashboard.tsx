import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import Card from "@/components/lib/card";
import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import { subAgentDashboardData, transactionsData, transactionTypeOption } from "@/data/data";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";


const DashboardLayout = () => {
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
			<p className="font-bold mb-6">Dashboard</p>
			<div className="w-full bg-white rounded-lg shadow-md py-6 px-4 flex gap-4 items-center">
				<Icon icon="ic:sharp-wallet" className="text-6xl text-[#FF9F43]" />
				<div>
					<p className="font-semi-bold text-xl mb-2">₦ 200.00</p>

					<p className="text-sm">Wallet Balance</p>
				</div>
			</div>
			<div className="md:flex  flex-wrap  justify-between">
				{subAgentDashboardData.map((item, index) => (
					<Card key={index} item={item} xlWidth="30%" />
				))}
			</div>
			<div className="my-14">
				<BodyLayout>
					<div className=" text-center ">
						<p>Chart would be here</p>
					</div>
				</BodyLayout>
			</div>
			<div className="py-10">
				<BodyLayout>
					<p className="my-4 text-xl text-amali-grey">Recent Transactions</p>
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
										<TableCell>{item.status}</TableCell>
										<TableCell>{item.date}</TableCell>
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

export default DashboardLayout;
