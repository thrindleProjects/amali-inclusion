import {
	AGENTS,
	DASHBOARD,
	MASTER_AGENT,
	ALL_AGENTS,
	CREATE_AGENT,
	FLOAT_MANAGER,
	DUE_LOAN,
	LOAN_SETTINGS,
	ACTIVE_FLOAT,
	GENERAL_SETTINGS,
	KYC_MANAGER,
	POS_MANAGER,
	PAYMENT_SETTINGS,
	PROFILE_SETTINGS,
	REQUIRE_FLOAT,
	SETTINGS,
	SETTLED_LOAN,
	USER,
	MY_PROFILE,
	LOGOUT,
	PAY_BILLS,
	AIRTIME,
	CABLE,
	INTERNET,
	ELECTRICITY,
	TERMINALS,
	ADD_SUB_AGENT,
	PERFORMANCE,
	TRANSACTIONS,
	WALLET_MANAGER,
	WITHDRAWAL,
	WALLET_HISTORY,
	PROFILE,
	INSURANCE,
	OPEN_ACCOUNT,
	SAVINGS,
	BUY_NOW_PAY_LATER,
	DEBIT_CARD,
	MY_LOAN,
	WALLET_TRANSFER,
} from "./constants";

export const masterAgentLinks = [
	{
		id: 1,
		name: DASHBOARD,
		link: "/master-agent/dashboard",
		subLinks: [],
		icon: "ic:round-dashboard",
	},
	{
		id: 2,
		name: AGENTS,
		link: "",
		icon: "ic:twotone-people",
		subLinks: [
			{
				id: 1,
				subType: MASTER_AGENT,
				link: "/master-agent/master-agents",
			},
			{
				id: 2,
				subType: ALL_AGENTS,
				link: "/master-agent/all-agent/agent",
			},
			{
				id: 3,
				subType: CREATE_AGENT,
				link: "/master-agent/create-agent",
			},
		],
	},
	{
		id: 3,
		name: FLOAT_MANAGER,
		icon: "carbon:percentage",
		link: "",
		subLinks: [
			{
				id: 1,
				subType: REQUIRE_FLOAT,
				link: "/require-float",
			},
			{
				id: 2,
				subType: ACTIVE_FLOAT,
				link: "/active-float",
			},
			{
				id: 3,
				subType: DUE_LOAN,
				link: "/due-loan",
			},
			{
				id: 4,
				subType: SETTLED_LOAN,
				link: "/settled-loan",
			},
			{
				id: 5,
				subType: LOAN_SETTINGS,
				link: "/loan-settings",
			},
		],
	},
	{
		id: 4,
		name: PAY_BILLS,
		icon: "healthicons:bills-outline",

		link: "",
		subLinks: [
			{
				id: 1,
				subType: AIRTIME,
				link: "/master-agent/bills-payment/airtime",
			},
			{
				id: 2,
				subType: INTERNET,
				link: "/master-agent/bills-payment/internet",
			},
			{
				id: 3,
				subType: CABLE,
				link: "/master-agent/bills-payment/cable",
			},
			{
				id: 5,
				subType: ELECTRICITY,
				link: "/master-agent/bills-payment/electricity",
			},
		],
	},
	{
		id: 5,
		name: POS_MANAGER,
		icon: "mdi:printer-outline",

		link: "/master-agent/pos-manager",
		subLinks: [],
	},
	{
		id: 6,
		name: KYC_MANAGER,
		link: "/master-agent/kyc-manager/kyc-manager",
		icon: "material-symbols:shield-outline",
		subLinks: [],
	},
	{
		id: 7,
		name: SETTINGS,
		link: "",
		icon: "material-symbols:settings",
		subLinks: [
			{
				id: 1,
				subType: USER,
				link: "/master-agent/settings/users",
			},
			{
				id: 2,
				subType: GENERAL_SETTINGS,
				link: "/master-agent/settings/general-settings",
			},
			{
				id: 3,
				subType: PROFILE_SETTINGS,
				link: "/master-agent/settings/profile-settings",
			},
			{
				id: 4,
				subType: PAYMENT_SETTINGS,
				link: "/master-agent/settings/payment-settings",
			},
		],
	},
];

export const profileDropdown = [
	{
		id: 1,
		icon: "material-symbols:person-outline-rounded",
		name: MY_PROFILE,
	},
	{
		id: 2,
		icon: "material-symbols:settings",
		name: SETTINGS,
	},
	{
		id: 3,
		icon: "ri:logout-circle-line",
		name: LOGOUT,
	},
];

export const adminNavLinks = [
	{
		id: 1,
		name: DASHBOARD,
		link: "admin/dashboard",
		subLinks: [],
		icon: "ic:round-dashboard",
	},
	{
		id: 2,
		name: AGENTS,
		link: "",
		icon: "ic:twotone-people",
		subLinks: [
			{
				id: 1,
				subType: TERMINALS,
				link: "admin/terminals",
			},
			{
				id: 2,
				subType: ADD_SUB_AGENT,
				link: "admin/add-sub-agent",
			},
		],
	},
	{
		id: 4,
		name: PAY_BILLS,
		icon: "healthicons:bills-outline",

		link: "",
		subLinks: [
			{
				id: 1,
				subType: AIRTIME,
				link: "/buy-airtime",
			},
			{
				id: 2,
				subType: INTERNET,
				link: "/buy-internet",
			},
			{
				id: 3,
				subType: CABLE,
				link: "/cable",
			},
			{
				id: 5,
				subType: ELECTRICITY,
				link: "/electricity",
			},
		],
	},
	{
		id: 4,
		name: PERFORMANCE,
		link: "admin/performance",
		subLinks: [],
		icon: "mdi:performance",
	},
	{
		id: 5,
		name: TRANSACTIONS,
		link: "admin/transactions",
		subLinks: [],
		icon: "mdi:printer-outline",
	},
	{
		id: 6,
		name: WALLET_MANAGER,
		link: "",
		subLinks: [
			{
				id: 1,
				subType: WITHDRAWAL,
				link: "admin/withdrawal",
			},
			{
				id: 2,
				subType: WALLET_HISTORY,
				link: "admin/wallet-history",
			},
		],
		icon: "ph:shopping-bag",
	},
	{
		id: 7,
		name: SETTINGS,
		link: "",
		subLinks: [
			{
				id: 1,
				subType: PROFILE,
				link: "admin/profile",
			},
		],
		icon: "material-symbols:settings",
	},
];

export const subAgentsNavLinks = [
	{
		id: 1,
		name: DASHBOARD,
		link: "",
		subLinks: [],
		icon: "ic:round-dashboard",
	},
	{
		id: 2,
		name: AGENTS,
		link: "",
		icon: "ic:twotone-people",
		subLinks: [
			{
				id: 1,
				subType: ADD_SUB_AGENT,
				link: "/add-sub-agent",
			},
		],
	},
	{
		id: 3,
		name: OPEN_ACCOUNT,
		link: "/open-account",
		subLinks: [],
		icon: "ion:person-add-outline",
	},
	{
		id: 4,
		name: INSURANCE,
		link: "/insurance",
		subLinks: [],
		icon: "lucide:award",
	},
	{
		id: 5,
		name: SAVINGS,
		link: "/savings",
		subLinks: [],
		icon: "material-symbols:create-new-folder-outline",
	},
	{
		id: 6,
		name: BUY_NOW_PAY_LATER,
		link: "/buy-now-pay-later",
		subLinks: [],
		icon: "ic:outline-shopping-cart",
	},
	{
		id: 7,
		name: PAY_BILLS,
		icon: "healthicons:bills-outline",

		link: "",
		subLinks: [
			{
				id: 1,
				subType: AIRTIME,
				link: "/buy-airtime",
			},
			{
				id: 2,
				subType: INTERNET,
				link: "/buy-internet",
			},
			{
				id: 3,
				subType: CABLE,
				link: "/cable",
			},
			{
				id: 5,
				subType: ELECTRICITY,
				link: "/electricity",
			},
		],
	},
	{
		id: 8,
		name: DEBIT_CARD,
		link: "/debit-card",
		subLinks: [],
		icon: "material-symbols:credit-card-outline",
	},
	{
		id: 9,
		name: FLOAT_MANAGER,
		icon: "carbon:percentage",
		link: "",
		subLinks: [
			{
				id: 1,
				subType: REQUIRE_FLOAT,
				link: "/request-float",
			},
			{
				id: 2,
				subType: MY_LOAN,
				link: "/my-loan",
			},
		],
	},
	{
		id: 10,
		name: WALLET_MANAGER,
		link: "",
		subLinks: [
			{
				id: 1,
				subType: WITHDRAWAL,
				link: "/withdrawal",
			},
			{
				id: 2,
				subType: WALLET_HISTORY,
				link: "/wallet-history",
			},
			{
				id: 3,
				subType: WALLET_TRANSFER,
				link: "/wallet-transfer",
			},
		],
		icon: "ph:shopping-bag",
	},
	{
		id: 11,
		name: SETTINGS,
		link: "",
		subLinks: [
			{
				id: 1,
				subType: PROFILE,
				link: "/profile",
			},
		],
		icon: "material-symbols:settings",
	},
];
