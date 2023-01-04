import BackButton from "@/components/lib/backButton/BackButton";
import Card from "@/components/lib/card/Card";
import Table from "@/components/lib/Table";
import TableBody from "@/components/lib/Table/TableBody";
import TableCell from "@/components/lib/Table/TableCell";
import TableHeader from "@/components/lib/Table/TableHeader";
import TableRow from "@/components/lib/Table/TableRow";
import { kycData, KycVerificationCardData } from "@/data/data";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import MainContentLayout from "@/layout/MainContentLayout";
import Link from "next/link";
import React from "react";

const KYCManager = () => {
	return (
		<MainContentLayout>
			<BackButton />
			<p>KYC Verification</p>

			<div className="md:flex  flex-wrap  justify-between">
				{KycVerificationCardData.map((item, index) => (
					<Card key={index} item={item} xlWidth="48%" />
				))}
			</div>

			<p>KYC Verification</p>
			<hr className="bg-amali-grey my-10" />

			<BodyLayout>
				<Table>
					<TableHeader
						items={["S/N", "Agent", "Email", "status", "Date", "Action"]}
					/>
					<TableBody>
						{kycData.map((item, index) => (
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{item.agent}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>
									<p
										className={
											item.status === "Verified"
												? "p-2 rounded-sm bg-amali-green text-center text-white w-[80px]"
												: "p-2 rounded-sm bg-red-500 text-center text-white w-[80px]"
										}
									>
										{item.status}
									</p>
								</TableCell>
								<TableCell>{item.date}</TableCell>
								<TableCell>
									<Link href={`/master-agent/kyc-manager/${item.id}`}>
										<p className="p-2 text-white text-sm bg-amali-green text-center cursor-pointer">
											View
										</p>
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</BodyLayout>
		</MainContentLayout>
	);
};

export default KYCManager;
