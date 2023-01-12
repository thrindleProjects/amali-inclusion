import * as CONSTANTS from "@/types/constants";

export type TerminalTransactionsData = {
	[CONSTANTS.REFERENCE_ID]: string;
	[CONSTANTS.AMOUNT]: number;
	[CONSTANTS.TRANSACTION_TYPE]: "debit" | "credit";
	[CONSTANTS.BALANCE]: number;
	[CONSTANTS.CREATED_AT]: string;
};

export interface TerminalTransactionProps {
	data: TerminalTransactionsData[];
}
