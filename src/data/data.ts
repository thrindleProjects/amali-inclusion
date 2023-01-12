import {
	AIRTIMETYPE,
	BILLS,
	CABLE_TV,
	CREDIT,
	DEBIT,
	INTERNET_DATA,
} from "@/types/constants";

import * as CONSTANTS from "@/types/constants";
import { TerminalTransactionsData } from "@/components/pages-layout/master-agent/pos-manager/terminal_id/types";
import { formatDateNum } from "@/utils/formatDate";

export const gender = [
	{ name: "MALE", value: "male" },
	{ name: "FEMALE", value: "Female" },
];

export const agentType = [
	{ name: "MASTER AGENT", value: "MASTER_AGENT" },
	{ name: "AGENT", value: "AGENT" },
	{ name: "SUB_AGENT", value: "SUB_AGENT" },
];
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
export const adminDashboardData = [
	{
		id: 1,
		number: "3",
		text: "Total Customers",
		image: "bi:person-check-fill",
		color: "#00CFE8",
	},
	{
		id: 2,
		number: "0",
		text: "Transaction Count",
		image: "mdi:file-document-outline",
		color: "#1b2850",
	},
	{
		id: 3,
		number: "0",
		text: "Transaction count",
		image: "uil:print",
		color: "#42B0A8",
	},
	{
		id: 3,
		number: "13",
		text: "Total Float (Sub Agents)",
		image: "mdi:file-document-outline",
		color: "#28C76F",
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
		value: "Lasisi Kehinde",
	},
	{
		name: "Oke Lekan",
		value: "Oke Lekan",
	},
	{
		name: "Lasisi Kehinde",
		value: "Lasisi Kehinde",
	},
	{
		name: "Oke Lekan",
		value: "Oke Lekan",
	},
	{
		name: "Lasisi Kehinde",
		value: "Lasisi Kehinde",
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

export const airtimeNumberOptions = [
	{
		name: CONSTANTS.MY_OWN_NUMBER,
		value: CONSTANTS.MY_OWN_NUMBER,
	},
	{
		name: CONSTANTS.BENEFICIARY_NUMBER,
		value: CONSTANTS.BENEFICIARY_NUMBER,
	},
];

export const networtProviderOptions = [
	{
		name: CONSTANTS._9MOBILE,
		value: CONSTANTS._9MOBILE,
	},
	{
		name: CONSTANTS.MTN,
		value: CONSTANTS.MTN,
	},
	{
		name: CONSTANTS.GLO,
		value: CONSTANTS.GLO,
	},
	{
		name: CONSTANTS.AIRTEL,
		value: CONSTANTS.AIRTEL,
	},
];

export const displayedAmounts = [
	{
		amount: "200",
		to_pay: "180",
	},
	{
		amount: "500",
		to_pay: "480",
	},
	{
		amount: "700",
		to_pay: "680",
	},
	{
		amount: "1000",
		to_pay: "980",
	},
	{
		amount: "1500",
		to_pay: "1480",
	},
	{
		amount: "2000",
		to_pay: "1980",
	},
];

export const dataPlans = {
	[CONSTANTS._9MOBILE]: [
		{
			amount: "100MB",
			to_pay: "100",
			duration: "1 day",
		},
		{
			amount: "650MB",
			to_pay: "200",
			duration: "1 day",
		},
		{
			amount: "500MB",
			to_pay: "500",
			duration: "30 days",
		},
		{
			amount: "1.5GB",
			to_pay: "1000",
			duration: "30 days",
		},
		{
			amount: "4.5GB",
			to_pay: "2000",
			duration: "30 days",
		},
	],
	[CONSTANTS.GLO]: [
		{
			amount: "105MB",
			to_pay: "100",
			duration: "2 days",
		},
		{
			amount: "350MB",
			to_pay: "200",
			duration: "4 days",
		},
		{
			amount: "1.05GB",
			to_pay: "500",
			duration: "14 days",
		},
		{
			amount: "2.5GB",
			to_pay: "1000",
			duration: "30 days",
		},
		{
			amount: "5.8GB",
			to_pay: "2000",
			duration: "30 days",
		},
		{
			amount: "7.7GB",
			to_pay: "2500",
			duration: "30 days",
		},
		{
			amount: "10GB",
			to_pay: "3000",
			duration: "30 days",
		},
	],
	[CONSTANTS.MTN]: [
		{
			amount: "100MB",
			to_pay: "100",
			duration: "1 day",
		},
		{
			amount: "200MB",
			to_pay: "200",
			duration: "2 days",
		},
		{
			amount: "1.5GB",
			to_pay: "1000",
			duration: "30 days",
		},
		{
			amount: "4.5GB",
			to_pay: "2000",
			duration: "30 days",
		},
		{
			amount: "6GB",
			to_pay: "1500",
			duration: "7 days",
		},

		{
			amount: "6GB",
			to_pay: "2500",
			duration: "30 days",
		},
		{
			amount: "8GB",
			to_pay: "3000",
			duration: "30 days",
		},
		{
			amount: "10GB",
			to_pay: "3500",
			duration: "30 days",
		},
		{
			amount: "3GB",
			to_pay: "1500",
			duration: "30 days",
		},
	],
	[CONSTANTS.AIRTEL]: [
		{
			amount: "40MB",
			to_pay: "50",
			duration: "1 day",
		},
		{
			amount: "100MB",
			to_pay: "100",
			duration: "1 day",
		},
		{
			amount: "200MB",
			to_pay: "200",
			duration: "3 days",
		},
		{
			amount: "350MB",
			to_pay: "300",
			duration: "7 days",
		},
		{
			amount: "750MB",
			to_pay: "500",
			duration: "14 days",
		},
		{
			amount: "1.5GB",
			to_pay: "1000",
			duration: "30 days",
		},
		{
			amount: "3GB",
			to_pay: "1500",
			duration: "30 days",
		},
		{
			amount: "4.5GB",
			to_pay: "2000",
			duration: "30 days",
		},
		{
			amount: "10GB",
			to_pay: "3000",
			duration: "30 days",
		},
		{
			amount: "7GB",
			to_pay: "1500",
			duration: "7 days",
		},
	],
};

export const transactionsData = [
	{
		id: 1,
		agentCode: "45373832728864647738984",
		type: "debit",
		amount: "₦ 200.00",
		remark: "NGN 200 Airtime Purchase Was Successful To 08166939205",
		status: "Successful",
		date: "22-09-22",
	},
	{
		id: 2,
		agentCode: "4537383237t43864647738984",
		type: "debit",
		amount: "₦ 500.00",
		remark: "NGN 500 Airtime Purchase Was Successful To 08166939215",
		status: "Successful",
		date: "22-09-22",
	},
	{
		id: 1,
		agentCode: "453738366888864647738984",
		type: "debit",
		amount: "₦ 400.00",
		remark: "NGN 400 Airtime Purchase Was Successful To 08166939205",
		status: "Successful",
		date: "22-09-22",
	},
];

export const cableProviders = [
	{
		name: CONSTANTS.DSTV,
		value: CONSTANTS.DSTV,
	},
	{
		name: CONSTANTS.GOTV,
		value: CONSTANTS.GOTV,
	},
	{
		name: CONSTANTS.STARTIMES,
		value: CONSTANTS.STARTIMES,
	},
];

export const cablePlans = {
	[CONSTANTS.DSTV]: [
		{
			name: CONSTANTS.DSTV_PADI,
			value: "2150",
		},
		{
			name: CONSTANTS.DSTV_YANGA,
			value: "2950",
		},
		{
			name: CONSTANTS.DSTV_CONFAM,
			value: "5300",
		},
		{
			name: CONSTANTS.DSTV_COMPACT,
			value: "9000",
		},
		{
			name: CONSTANTS.DSTV_PREMIUM,
			value: "21000",
		},
	],
	[CONSTANTS.GOTV]: [
		{
			name: CONSTANTS.GOTV_PADI,
			value: "2150",
		},
		{
			name: CONSTANTS.GOTV_YANGA,
			value: "2950",
		},
		{
			name: CONSTANTS.GOTV_CONFAM,
			value: "5300",
		},
		{
			name: CONSTANTS.GOTV_COMPACT,
			value: "9000",
		},
		{
			name: CONSTANTS.GOTV_PREMIUM,
			value: "21000",
		},
	],
	[CONSTANTS.STARTIMES]: [
		{
			name: CONSTANTS.STARTIMES_PADI,
			value: "2150",
		},
		{
			name: CONSTANTS.STARTIMES_YANGA,
			value: "2950",
		},
		{
			name: CONSTANTS.STARTIMES_CONFAM,
			value: "5300",
		},
		{
			name: CONSTANTS.STARTIMES_COMPACT,
			value: "9000",
		},
		{
			name: CONSTANTS.STARTIMES_PREMIUM,
			value: "21000",
		},
	],
};

export const elecServiceType = [
	{
		name: CONSTANTS.PREPAID,
		value: CONSTANTS.PREPAID,
	},
	{
		name: CONSTANTS.POSTPAID,
		value: CONSTANTS.POSTPAID,
	},
];

export const elecServiceProvider = [
	{
		name: CONSTANTS.KANO,
		value: CONSTANTS.KANO,
	},
	{
		name: CONSTANTS.JOS,
		value: CONSTANTS.JOS,
	},
	{
		name: CONSTANTS.PH,
		value: CONSTANTS.PH,
	},
	{
		name: CONSTANTS.EKO,
		value: CONSTANTS.EKO,
	},
	{
		name: CONSTANTS.IKEJA,
		value: CONSTANTS.IKEJA,
	},
	{
		name: CONSTANTS.IBADAN,
		value: CONSTANTS.IBADAN,
	},
	{
		name: CONSTANTS.EEDC,
		value: CONSTANTS.EEDC,
	},
	{
		name: CONSTANTS.KADUNA,
		value: CONSTANTS.KADUNA,
	},
	{
		name: CONSTANTS.AEDC,
		value: CONSTANTS.AEDC,
	},
];

export const subAgentDashboardData = [
	{
		id: 1,
		number: "3",
		text: "Total Customers",
		image: "bi:person-check-fill",
		color: "#00CFE8",
	},
	{
		id: 2,
		number: "0",
		text: "Transaction Count",
		image: "mdi:file-document-outline",
		color: "#1b2850",
	},
];

export const customerData = [
	{
		[CONSTANTS.EMAIL_ADDRESS]: "customer@example.com",
		[CONSTANTS.PHONE_NO]: "08012345678",
		[CONSTANTS.ACCOUNT_NAME]: "John Doe",
		[CONSTANTS.ACCOUNT_NUMBER]: "1234567890",
	},
	{
		[CONSTANTS.EMAIL_ADDRESS]: "newcustomer@example.com",
		[CONSTANTS.PHONE_NO]: "08023456780",
		[CONSTANTS.ACCOUNT_NAME]: "Johnny Doep",
		[CONSTANTS.ACCOUNT_NUMBER]: "0123456789",
	},
];

export const loanPayment = [
	{ duration: 1, interest: 0, loan_amount: 105000, amount_payable: 105000 },
	{ duration: 3, interest: 15, loan_amount: 105000, amount_payable: 195000 },
	{ duration: 6, interest: 25, loan_amount: 105000, amount_payable: 245000 },
];

export const paymentInstallments = [
	{ date: "September 17, 2022", amount: "₦35,000.00" },
	{ date: "October 17, 2022", amount: "₦35,000.00" },
	{ date: "November 17, 2022", amount: "₦35,000.00" },
	{ date: "December 17, 2022", amount: "₦35,000.00" },
	{ date: "January 17, 2023", amount: "₦35,000.00" },
	{ date: "February 17, 2023", amount: "₦35,000.00" },
];

export const myLoansTableData = [
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
	{
		reference: "6784903038",
		amount: 105000,
		interest: 5000,
		expected_payment: 110000,
		dateRequested: formatDateNum(new Date().toISOString()),
		duration: "3 months",
		dueDate: formatDateNum(new Date().toISOString()),
		status: "active",
	},
];

export const loanDurations = [
	{
		name: "1 week",
		value: "1 week",
	},
	{
		name: "2 weeks",
		value: "2 weeks",
	},
	{
		name: "1 month",
		value: "1 month",
	},
	{
		name: "2 months",
		value: "2 months",
	},
	{
		name: "3 months",
		value: "3 months",
	},
	{
		name: "4 months",
		value: "4 months",
	},
	{
		name: "5 months",
		value: "5 months",
	},
	{
		name: "6 months",
		value: "6 months",
	},
	{
		name: "1 year",
		value: "1 year",
	},
];

export const loanFrequency = [
	{ name: "Daily", value: "Daily" },
	{ name: "Bi-weeky", value: "Bi-weeky" },
	{ name: "Weekly", value: "Weekly" },
	{ name: "Bi-monthly", value: "Bi-monthly" },
	{ name: "Monthly", value: "Monthly" },
	{ name: "Quarterly", value: "Quarterly" },
];

export const loanSettingsData = [
	{
		id: 1,
		duration: "1 week",
		interest: 12,
		frequency: "Daily",
	},
	{
		id: 2,
		duration: "1 month",
		interest: 12,
		frequency: "Weekly",
	},
	{
		id: 3,
		duration: "3 months",
		interest: 12,
		frequency: "Monthly",
	},
	{
		id: 4,
		duration: "6 months",
		interest: 12,
		frequency: "Bi-monthly",
	},
];
