import React from "react";
import { TermTransTableProps } from "./types";
import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import * as CONSTANTS from "@/types/constants";
import { formatDate } from "@/utils/formatDate";

const TermTransTable: React.FC<TermTransTableProps> = ({ data }) => {
	if (!data) {
		return <></>;
	}

	return (
		<div className="mt-10">
			<Table>
				<TableHeader
					items={["Reference", "Amount", "Transaction Type", "Balance", "Date"]}
				/>
				<TableBody>
					{data.map((item) => {
						return (
							<TableRow key={item[CONSTANTS.REFERENCE_ID]}>
								<TableCell>
									<p>{item[CONSTANTS.REFERENCE_ID]}</p>
								</TableCell>
								<TableCell>
									<p>{item[CONSTANTS.AMOUNT].toLocaleString()}</p>
								</TableCell>
								<TableCell>
									<p className="uppercase">
										{item[CONSTANTS.TRANSACTION_TYPE]}
									</p>
								</TableCell>
								<TableCell>
									<p>{item[CONSTANTS.BALANCE].toLocaleString()}</p>
								</TableCell>
								<TableCell>
									<p>{formatDate(item[CONSTANTS.CREATED_AT])}</p>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default TermTransTable;
