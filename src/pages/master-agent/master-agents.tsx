import React, { useState } from "react";
import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import { allAgentsData } from "@/data/data";
import AssignTerminalModal from "@/components/lib/AssignTerminalModal";

const MasterAgents = () => {

	const [showModal, setShowModal] = useState(false);

	return (
		<AuthLayout>
			<BodyLayout>
				<div onClick={() => setShowModal(true)} className="rounded-sm cursor-pointer my-6 bg-amali-green text-white p-2  w-full md:w-[200px] text-center">
					<p>Assign Terminals</p>
				</div>
				{showModal && <AssignTerminalModal setShowModal={setShowModal} />}

				<Table >
					<TableHeader items={[
						"S/N",
						"Agent Code",
						"Name",
						"Terminals",
						"Business Phone",
						"Email",
						"Date Registered",
						"Action"
					]} />
					<TableBody>
						{allAgentsData.map((item, index) => (
							<TableRow key={index}>
								<TableCell>  <p>{item.id}</p>  </TableCell>
								<TableCell>  <p>{item.agentCode}</p>  </TableCell>
								<TableCell>  <p>{item.name}</p>  </TableCell>
								<TableCell>  <p>{item.terminals}</p>  </TableCell>
								<TableCell>  <p>{item.businessPhone}</p>  </TableCell>
								<TableCell>  <p>{item.email}</p>  </TableCell>
								<TableCell>  <p>{item.dateRegistered}</p>  </TableCell>
								<TableCell>  <p className="p-2 text-white text-sm bg-amali-green text-center">View</p>  </TableCell>
							</TableRow>
						))}
					</TableBody>

				</Table>

			</BodyLayout>
		</AuthLayout>
	);
};

export default MasterAgents;