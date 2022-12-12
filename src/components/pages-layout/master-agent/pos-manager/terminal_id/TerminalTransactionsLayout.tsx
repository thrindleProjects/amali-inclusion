import { termTransCard } from "@/data/data";
import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import React from "react";
import { TerminalTransactionProps } from "./types";
import Card from "@/components/lib/card";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import TermTransTable from "@/components/lib/TermTransTable";

const TerminalTransactionsLayout: React.FC<TerminalTransactionProps> = ({
	data,
}) => {
	return (
		<AuthLayout>
			<section className="mb-4">
				<h3 className="font-bold mb-6">Dashboard</h3>
				<p className="text-sm font-extralight">Terminal Transactions</p>
				<div className="md:flex flex-wrap lg:flex-nowrap gap-4">
					{termTransCard.map((item) => (
						<Card key={item.id} item={item} xlWidth="30%" />
					))}
				</div>
			</section>
			<BodyLayout>
				<TermTransTable data={data} />
			</BodyLayout>
		</AuthLayout>
	);
};

export default TerminalTransactionsLayout;
