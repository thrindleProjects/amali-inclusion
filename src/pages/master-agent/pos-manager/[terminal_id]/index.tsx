import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import TerminalTransactionsLayout from "@/layout/pages-layout/master-agent/pos-manager/terminal_id/TerminalTransactionsLayout";
import { terminalTransactions } from "@/data/data";
import { TerminalTransactionsData } from "@/layout/pages-layout/master-agent/pos-manager/terminal_id/types";

export const getServerSideProps: GetServerSideProps<{
	data: TerminalTransactionsData[];
}> = async ({ params }) => {
	console.log({ params });
	return {
		props: {
			data: terminalTransactions,
		},
	};
};

const TerminalTransactions = ({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return <TerminalTransactionsLayout data={data} />;
};

export default TerminalTransactions;
