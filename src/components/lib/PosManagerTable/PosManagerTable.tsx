import React from "react";
import { PosManagerTableProps } from "./types";
import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import * as CONSTANTS from "@/types/constants";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

const PosManagerTable: React.FC<PosManagerTableProps> = ({ data }) => {
	if (!data) {
		return <></>;
	}

	return (
		<div className="mt-10">
			<Table>
				<TableHeader
					items={[
						"S/N",
						"Terminal ID",
						"Agent Assigned",
						"Sub Agent Assigned",
						"Serial Number",
						"Status",
						"Date Created",
						"Update Status",
						"Action",
					]}
				/>
				<TableBody>
					{data.map((item, index) => (
						<TableRow key={item[CONSTANTS.TERMINAL_ID]}>
							<TableCell>
								<p>{index + 1}</p>
							</TableCell>
							<TableCell>
								<p>{item[CONSTANTS.TERMINAL_ID]}</p>
							</TableCell>
							<TableCell>
								<p>{item[CONSTANTS.AGENT_ASSIGNED]}</p>
							</TableCell>
							<TableCell>
								<p>{item[CONSTANTS.SUB_AGENT_ASSIGNED]}</p>
							</TableCell>
							<TableCell>
								<p>{item[CONSTANTS.SERIAL_NO]}</p>
							</TableCell>
							<TableCell>
								<p className="capitalize">{item[CONSTANTS.STATUS]}</p>
							</TableCell>
							<TableCell>
								<p>{formatDate(item[CONSTANTS.CREATED_AT])}</p>
							</TableCell>
							<TableCell>
								{item[CONSTANTS.STATUS] === "active" ? (
									<button>Deactivate</button>
								) : (
									<button>Activate</button>
								)}
							</TableCell>
							<TableCell>
								<Link
									href={`/master-agent/pos-manager/${
										item[CONSTANTS.TERMINAL_ID]
									}`}
									className="text-white bg-amali-green p-2 rounded-md"
								>
									View Transactions
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default PosManagerTable;
