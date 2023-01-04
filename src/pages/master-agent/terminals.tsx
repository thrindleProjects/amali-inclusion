import React, { useState } from "react";

import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableHeader from "@/components/lib/Table/TableHeader";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import { Icon } from "@iconify/react";
import AssignTerminalModal from "@/components/lib/AssignTerminalModal";
import PrimaryButton from "@/components/lib/Button/PrimaryButton";
import MainContentLayout from "@/layout/MainContentLayout";

const Transactions = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<MainContentLayout>
			<p className="my-6 text-xl text-amali-grey"> Transactions</p>
			{showModal && <AssignTerminalModal setShowModal={setShowModal} />}

			<BodyLayout>
				<div className="md:flex  items-center justify-between">
					<div className="flex gap-2">
						<div className="bg-amali-green rounded-lg flex justify-center items-center h-[2.5rem] w-[2.5rem]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="#ffffff"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
								/>
							</svg>
						</div>

						<input className="outline-none w-full h-full border border-amali-green rounded-lg  p-2 md:w-[300px]" />
					</div>
					<div className="mt-4 md:mt-0 justify-center item-center flex gap-2">
						<Icon
							icon="teenyicons:pdf-solid"
							className="text-red-500 text-xl"
						/>
						<Icon
							icon="mdi:file-document-box-outline"
							className="text-amali-green text-xl"
						/>
						<Icon
							icon="mdi:printer-outline"
							className="text-amali-grey text-xl"
						/>
					</div>
				</div>
				<div className="w-full mt-4 md:w-[200px] ">
					<PrimaryButton
						onClick={() => setShowModal(true)}
						text="Assign Terminals"
						bgColor="#42B0A8"
					/>
				</div>
				<div className="mt-10 ">
					<Table>
						<TableHeader
							items={[
								"S/N",
								"Terminal ID",
								"Serial Number",
								"Sub Agent Assigned",
								"Status",
								"Date",
								"Action",
							]}
						/>
						<TableBody></TableBody>
					</Table>
					<p className="text-center py-4 ">No data available in table</p>
				</div>
			</BodyLayout>
		</MainContentLayout>
	);
};

export default Transactions;
