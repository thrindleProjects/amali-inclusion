import {
	Agents,
	Dashboard,
	Master_Agent,
	All_Agents,
	Create_Agent,
	Float_Manager,
	Due_Loan,
	Loan_Settings,
	Active_Float,
	General_Settings,
	KYC_MANAGER,
	POS_MANGER,
	Payment_Settings,
	Profile_Settings,
	Require_Float,
	Settings,
	Settled_Loan,
	User,
} from "./constants";

export const adminNavLinks = [
	{
		id: 1,
		name: Dashboard,
		link: "",
		subLinks: [],
		icon: "ic:round-dashboard",
	},
	{
		id: 2,
		name: Agents,
		link: "",
		icon: "ic:twotone-people",
		subLinks: [
			{
				id: 1,
				subType: Master_Agent,
				link: "/master-agents",
			},
			{
				id: 2,
				subType: All_Agents,
				link: "/all-agents",
			},
			{
				id: 3,
				subType: Create_Agent,
				link: "/create-agents",
			},
		],
	},
	{
		id: 3,
		name: Float_Manager,
		icon: "carbon:percentage",
		link: "",
		subLinks: [
			{
				id: 1,
				subType: Require_Float,
				link: "/require-float",
			},
			{
				id: 2,
				subType: Active_Float,
				link: "/active-float",
			},
			{
				id: 3,
				subType: Due_Loan,
				link: "/due-loan",
			},
			{
				id: 4,
				subType: Settled_Loan,
				link: "/settled-loan",
			},
			{
				id: 5,
				subType: Loan_Settings,
				link: "/loan-settings",
			},
		],
	},
	{
		id: 4,
		name: POS_MANGER,
		icon: "mdi:printer-outline",

		link: "/pos-manager",
		subLinks: [],
	},
	{
		id: 5,
		name: KYC_MANAGER,
		link: "/kyc-manager",
		icon: "material-symbols:shield-outline",
		subLinks: [],
	},
	{
		id: 6,
		name: Settings,
		link: "",
		icon: "material-symbols:settings",
		subLinks: [
			{
				id: 1,
				subType: User,
				link: "/users",
			},
			{
				id: 2,
				subType: General_Settings,
				link: "/general-settings",
			},
			{
				id: 3,
				subType: Profile_Settings,
				link: "/profile-settings",
			},
			{
				id: 4,
				subType: Payment_Settings,
				link: "/payment-settings",
			},
		],
	},
];


export const profileDropdown = [
	{
		id: 1,
		icon: "material-symbols:person-outline-rounded",
		name: "My Profile",
	},
	{
		id: 2,
		icon: "material-symbols:settings",
		name: "Settings",
	},
	{
		id: 3,
		icon: "ri:logout-circle-line",
		name: "Logout",
	},
];
