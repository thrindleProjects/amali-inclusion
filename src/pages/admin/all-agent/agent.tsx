import React from "react";

import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import { allSubAgentData } from "@/data/data";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import { useRouter } from "next/router";
import MainContentLayout from "@/layout/MainContentLayout";

const AllAgents = () => {
	const router = useRouter();
	return (
		<MainContentLayout>
			<BodyLayout>
				<Table>
					<TableHeader
						items={[
							"#",
							"Super Agent",
							"Agent Code",
							"Name",
							"Email",
							"Phone Number",
							"Wallet Balance",
							"Status",
							"Actions",
						]}
					/>
					<TableBody>
						{allSubAgentData.map((item, index) => (
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{item.superAgent}</TableCell>
								<TableCell>{item.agentCode}</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>{item.phone}</TableCell>
								<TableCell>{item.walletBalance}</TableCell>
								<TableCell>{item.status}</TableCell>
								<TableCell>
									<div className="flex gap-6">
										<p
											className="p-2 text-white text-xs rounded-lg bg-amali-green text-center cursor-pointer "
											onClick={() =>
												router.push(`/master-agent/all-agent/${index + 1}`)
											}
										>
											View Super Agent
										</p>
										<p className="p-2 text-white text-xs rounded-lg bg-amali-green text-center cursor-pointer">
											View Performance
										</p>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</BodyLayout>
		</MainContentLayout>
	);
};

export default AllAgents;
