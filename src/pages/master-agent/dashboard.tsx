import DateInput from "@/components/lib/Input/Input";
import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import { dashboardData, tableData, transactionTypeOption } from "@/data/data";
import React from "react";
import SelectInput from "@/components/lib/Input/SelectInput";
import Card from "@/components/lib/card";

const dashboard = () => {
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
						<DateInput label="From Date" type="date" />
						<DateInput label="To Date" type="Date" />
						<SelectInput label="Type" data={transactionTypeOption} />
						<div className="bg-amali-green text-white rounded-md h-11 cursor-pointer mt-6  w-full flex justify-center items-center md:mt-auto ">
							<p className="text-xs text-center ">Filter Transactions </p>

						</div>
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