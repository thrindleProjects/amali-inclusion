import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import { customerData } from "@/data/data";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import * as CONSTANTS from "@/types/constants";
import MainContentLayout from "@/layout/MainContentLayout";

const CustomerLayout = () => {
	return (
		<MainContentLayout>
			<p className="font-bold mb-6">Dashboard</p>
			<Link
				href={"customers/create"}
				className="bg-amali-green flex gap-2 items-center w-max p-1 sm:p-2 text-amali-bg text-sm lg:text-base border-2 rounded-md border-transparent hover:bg-amali-bg focus:bg-amali-bg hover:text-amali-green focus:text-amali-green focus:outline-2 focus:outline-amali-green hover:border-amali-green"
			>
				<Icon
					icon={"material-symbols:add-circle-rounded"}
					className="text-lg"
				/>
				Open Account
			</Link>
			<div className="py-10">
				<BodyLayout>
					<Table>
						<TableHeader
							items={[
								"S/N",
								"Email",
								"Phone Number",
								"Account Name",
								"Account Number",
							]}
						/>
						<TableBody>
							{customerData.map((item, index) => {
								return (
									<TableRow key={index}>
										<TableCell>{index + 1}</TableCell>
										<TableCell>{item[CONSTANTS.EMAIL_ADDRESS]}</TableCell>
										<TableCell>{item[CONSTANTS.PHONE_NO]}</TableCell>
										<TableCell>{item[CONSTANTS.ACCOUNT_NAME]}</TableCell>
										<TableCell>{item[CONSTANTS.ACCOUNT_NUMBER]}</TableCell>
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

export default CustomerLayout;
