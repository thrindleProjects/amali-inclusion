import {
	AIRTIMETYPE,
	BILLS,
	CABLE_TV,
	CREDIT,
	DEBIT,
	INTERNET_DATA,
} from "@/types/constants";

import * as CONSTANTS from "@/types/constants";
import { TerminalTransactionsData } from "@/layout/pages-layout/master-agent/pos-manager/terminal_id/types";
import { formatDateNum } from "@/utils/formatDate";

export const dashboardData = [
	{
		id: 1,
		number: "210,252,492.22",
		text: "All Wallet Balance",
		image: "material-symbols:person-outline-rounded",
		color: "#42B0A8",
	},
	{
		id: 2,
		number: "8",
		text: "Total Agents",
		image: "material-symbols:person-outline-rounded",
		color: "#00CFE8",
	},
	{
		id: 3,
		number: "23",
		text: "Transaction count",
		image: "material-symbols:edit-document-outline-sharp",
		color: "#1B2850",
	},
];

export const tableData = [
	{
		id: 1,
		agentCode: 34,
		type: "Credit",
		amount: "10,000",
		remark: "This is a remark",
		status: 1,
		date: "25/09/22",
	},
	{
		id: 2,
		agentCode: 100,
		type: "Credit",
		amount: "1,000",
		remark: "This is a remark",
		status: 1,
		date: "25/07/22",
	},
	{
		id: 3,
		agentCode: 10,
		type: "Credit",
		amount: "10,00000",
		remark: "This is a remark",
		status: 5,
		date: "25/09/22",
	},
	{
		id: 4,
		agentCode: 134,
		type: "Credit",
		amount: "30,000",
		remark: "This is a remark",
		status: 6,
		date: "25/09/22",
	},
	{
		id: 5,
		agentCode: 534,
		type: "Credit",
		amount: "50,000",
		remark: "This is a remark",
		status: 5,
		date: "25/09/22",
	},
	{
		id: 6,
		agentCode: 634,
		type: "Credit",
		amount: "60,000",
		remark: "This is a remark",
		status: 6,
		date: "25/09/22",
	},
	{
		id: 7,
		agentCode: 74,
		type: "Credit",
		amount: "70,000",
		remark: "This is a remark",
		status: 7,
		date: "25/09/22",
	},
	{
		id: 8,
		agentCode: 834,
		type: "Credit",
		amount: "80,000",
		remark: "This is a remark",
		status: 8,
		date: "25/09/22",
	},
	{
		id: 9,
		agentCode: 934,
		type: "Credit",
		amount: "90,000",
		remark: "This is a remark",
		status: 9,
		date: "25/09/22",
	},
	{
		id: 10,
		agentCode: 834,
		type: "Credit",
		amount: "80,000",
		remark: "This is a remark",
		status: 10,
		date: "25/09/22",
	},
];

export const allAgentsData = [
	{
		id: 1,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 2,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 3,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 4,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 5,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 6,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 7,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 8,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 9,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
	{
		id: 10,
		agentCode: 2760773267356,
		name: "Lasisi Kehinde",
		terminals: 2,
		businessPhone: "09087654766",
		email: "lasisiKehinde@gmail.com",
		dateRegistered: "20/08/22",
	},
];

export const transactionTypeOption = [
	{
		name: CREDIT,
		value: CREDIT,
	},
	{
		name: DEBIT,
		value: DEBIT,
	},
	{
		name: BILLS,
		value: BILLS,
	},
	{
		name: AIRTIMETYPE,
		value: AIRTIMETYPE,
	},
	{
		name: CABLE_TV,
		value: CABLE_TV,
	},
	{
		name: INTERNET_DATA,
		value: INTERNET_DATA,
	},
];

export const allMasterAgents = [
	{
		name: "Lasisi Kehinde",
	},
	{
		name: "Oke Lekan",
	},
	{
		name: "Lasisi Kehinde",
	},
	{
		name: "Oke Lekan",
	},
	{
		name: "Lasisi Kehinde",
	},
	{
		name: "Oke Lekan",
	},
	{
		name: "Lasisi Kehinde",
	},
	{
		name: "Oke Lekan",
	},
];

export const allSubAgentData = [
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
	{
		superAgent: "amalimaster@gmail.com",
		agentCode: "439889096158233444",
		name: "John David",
		email: "LasisiKendinde@gmail.com",
		phone: "08025913782",
		walletBalance: "₦ 0",
		status: "Active",
	},
];

export const KycVerificationCardData = [
	{
		id: 1,
		number: "4",
		text: "Total Verified",
		image: "material-symbols:person-outline-rounded",
		color: "#42B0A8",
	},
	{
		id: 1,
		number: "2",
		text: "Total Unverified",
		image: "mdi:person-cancel-outline",
		color: "#00CFE8",
	},
];

export const posCardData = [
	{
		id: 1,
		number: "4",
		text: "Total Terminals",
		image: "mdi:printer",
		color: "#42b0a8",
	},
	{
		id: 2,
		number: "0",
		text: "Total Assigned Terminals",
		image: "bi:person-check-fill",
		color: "#00CFE8",
	},
	{
		id: 3,
		number: "3",
		text: "Total Unassigned Terminals",
		image: "mdi:file-document-outline",
		color: "#1B2850",
	},
];

export const kycData = [
	{
		id: 1,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Verified",
		date: "25/09/22",
	},
	{
		id: 2,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "pending",
		date: "25/09/22",
	},
	{
		id: 3,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Verified",
		date: "25/09/22",
	},
	{
		id: 4,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Verified",
		date: "25/09/22",
	},
	{
		id: 5,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Verified",
		date: "25/09/22",
	},
	{
		id: 6,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Pending",
		date: "25/09/22",
	},
	{
		id: 7,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Pending",
		date: "25/09/22",
	},
	{
		id: 8,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Verified",
		date: "25/09/22",
	},
	{
		id: 9,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Verified",
		date: "25/09/22",
	},
	{
		id: 10,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Pending",
		date: "25/09/22",
	},
	{
		id: 1,
		agent: "Master agent",
		email: "amalimaster@gmail.com",
		status: "Verified",
		date: "25/09/22",
	},
];

export const posData: {
	[CONSTANTS.TERMINAL_ID]: string;
	[CONSTANTS.AGENT_ASSIGNED]: string;
	[CONSTANTS.SUB_AGENT_ASSIGNED]: string;
	[CONSTANTS.SERIAL_NO]: string;
	[CONSTANTS.STATUS]: "active" | "inactive";
	[CONSTANTS.CREATED_AT]: string;
}[] = [
	{
		[CONSTANTS.TERMINAL_ID]: "terminal_1",
		[CONSTANTS.AGENT_ASSIGNED]: "Kehinde Lasisi",
		[CONSTANTS.SUB_AGENT_ASSIGNED]: "Tracy Dolapo",
		[CONSTANTS.SERIAL_NO]: "12345678",
		[CONSTANTS.STATUS]: "inactive",
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
	{
		[CONSTANTS.TERMINAL_ID]: "terminal_2",
		[CONSTANTS.AGENT_ASSIGNED]: "Olabisi Bolarin",
		[CONSTANTS.SUB_AGENT_ASSIGNED]: "Denzel Dumfries",
		[CONSTANTS.SERIAL_NO]: "23456789",
		[CONSTANTS.STATUS]: "active",
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
	{
		[CONSTANTS.TERMINAL_ID]: "terminal_3",
		[CONSTANTS.AGENT_ASSIGNED]: "Yinka Olalere",
		[CONSTANTS.SUB_AGENT_ASSIGNED]: "Granit Xhaka",
		[CONSTANTS.SERIAL_NO]: "87654321",
		[CONSTANTS.STATUS]: "active",
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
	{
		[CONSTANTS.TERMINAL_ID]: "terminal_4",
		[CONSTANTS.AGENT_ASSIGNED]: "Sheyifunmi Stunner",
		[CONSTANTS.SUB_AGENT_ASSIGNED]: "Argen tina",
		[CONSTANTS.SERIAL_NO]: "34728192",
		[CONSTANTS.STATUS]: "inactive",
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
];

export const terminalTransactions: TerminalTransactionsData[] = [
	{
		[CONSTANTS.REFERENCE_ID]: "TRF-1b25243a-f4e3-4bc9-a7a0-524d2df640e9-DEBIT",
		[CONSTANTS.AMOUNT]: 800,
		[CONSTANTS.TRANSACTION_TYPE]: "debit",
		[CONSTANTS.BALANCE]: 1400000,
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
	{
		[CONSTANTS.REFERENCE_ID]: "WDL-21e0786b-5bc1-4d1b-9546-e2e57b16f795-CREDIT",
		[CONSTANTS.AMOUNT]: 700.35,
		[CONSTANTS.TRANSACTION_TYPE]: "debit",
		[CONSTANTS.BALANCE]: 1400000,
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
	{
		[CONSTANTS.REFERENCE_ID]: "WDL-9ea53114-fbdc-41a3-b892-9be7b450961e-CREDIT",
		[CONSTANTS.AMOUNT]: 5000,
		[CONSTANTS.TRANSACTION_TYPE]: "debit",
		[CONSTANTS.BALANCE]: 200000,
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
	{
		[CONSTANTS.REFERENCE_ID]: "WDL-df81cda7-a4cf-4a39-af79-d6a3e951ccd4-CREDIT",
		[CONSTANTS.AMOUNT]: 50000,
		[CONSTANTS.TRANSACTION_TYPE]: "credit",
		[CONSTANTS.BALANCE]: 100000,
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
	{
		[CONSTANTS.REFERENCE_ID]: "WDL-f5944c2c-a6c0-4d79-9221-e21452b54e04-CREDIT",
		[CONSTANTS.AMOUNT]: 200000,
		[CONSTANTS.TRANSACTION_TYPE]: "credit",
		[CONSTANTS.BALANCE]: 1400,
		[CONSTANTS.CREATED_AT]: new Date().toISOString(),
	},
];

export const termTransCard = [
	{
		id: 1,
		number: "Term ID",
		text: "Terminal ID",
		image: "mdi:printer",
		color: "#42b0a8",
	},
	{
		id: 2,
		number: "S/N",
		text: "Terminal Serial Number",
		image: "mdi:file-document-outline",
		color: "#00CFE8",
	},
	{
		id: 3,
		number: formatDateNum(new Date().toISOString()),
		text: "Date Created",
		image: "material-symbols:calendar-today-outline",
		color: "#1B2850",
	},
];
