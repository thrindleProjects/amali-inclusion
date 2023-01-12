import Button from "@/components/lib/Button";
import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import { myLoansTableData } from "@/data/data";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import MainContentLayout from "@/layout/MainContentLayout";
import React from "react";

const DueLoanLayout = () => {
	return (
		<MainContentLayout>
			<div className="pb-4">
				<BodyLayout>
					<Table>
						<TableHeader
							items={[
								"S/N",
								"Reference",
								"Amount",
								"Interest",
								"Expected Payment",
								"Date Requested",
								"Due Date",
								"Status",
								"Action",
							]}
						/>
						<TableBody>
							{myLoansTableData.map((item, index) => {
								return (
									<TableRow key={index}>
										<TableCell>{index + 1}</TableCell>
										<TableCell>{item.reference}</TableCell>
										<TableCell>{item.amount}</TableCell>
										<TableCell>{item.interest}</TableCell>
										<TableCell>{item.expected_payment}</TableCell>
										<TableCell>{item.dateRequested}</TableCell>
										<TableCell>{item.dueDate}</TableCell>
										<TableCell>
											<p className="capitalize text-amali-green">
												{item.status}
											</p>
										</TableCell>
										<TableCell>
											<Button bgColor="#42B0A8" text="Pay Loan" />
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</BodyLayout>
			</div>
		</MainContentLayout>
	);
};

export default DueLoanLayout;
