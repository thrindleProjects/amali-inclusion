import CreateFloatSettingsModal from "@/components/lib/CreateFloatSettingsModal";
import EditFloatSettingsModal from "@/components/lib/EditFloatSettingsModal";
import LoanSettingsCard from "@/components/lib/LoanSettingsCard";
import { HandleModal } from "@/components/lib/LoanSettingsCard/types";
import MainContentLayout from "@/layout/MainContentLayout";
import React, { useState } from "react";
import { FloatSettingsLayoutProps } from "./types";

const FloatSettingsLayout: React.FC<FloatSettingsLayoutProps> = ({
	settings,
}) => {
	const [loanTypes, setLoanTypes] = useState<
		{
			interest: number;
			frequency: string;
			id: number;
			duration: string;
			isActive: boolean;
		}[]
	>(settings);
	const [modals, setModals] = useState<{
		edit: boolean;
		create: boolean;
		activeLoanSetting: {
			interest: number;
			frequency: string;
			id: number;
			duration: string;
		} | null;
	}>({
		edit: false,
		create: false,
		activeLoanSetting: null,
	});

	const { edit, create, activeLoanSetting } = modals;

	const handleEditLoanSettings = (loan: {
		interest: number;
		frequency: string;
		id: number;
		duration: string;
		isActive: boolean;
	}) => {
		setLoanTypes((old) => {
			const newState = old.map(item => {
				if(item.id === loan.id) {
					return loan;
				}
				return item;
			});
			return newState;
		});
	};

	const handleModals = (
		type: HandleModal,
		payload?: {
			interest: number;
			frequency: string;
			id: number;
			duration: string;
		}
	) => {
		switch (type) {
		case "SHOW_EDIT_MODAL":
			if (payload) {
				setModals((old) => ({
					...old,
					create: false,
					edit: true,
					activeLoanSetting: payload,
				}));
			}
			break;
		case "SHOW_CREATE_MODAL":
			setModals((old) => ({
				...old,
				create: true,
				edit: false,
				activeLoanSetting: null,
			}));
			break;
		case "HIDE_CREATE_MODAL":
			setModals((old) => ({
				...old,
				create: false,
				activeLoanSetting: null,
			}));
			break;
		case "HIDE_EDIT_MODAL":
			setModals((old) => ({ ...old, edit: false, activeLoanSetting: null }));
			break;
		case "CLOSE_MODALS":
			setModals((old) => ({
				...old,
				create: false,
				edit: false,
				activeLoanSetting: null,
			}));
			break;
		default:
			break;
		}
	};

	const handleCreateLoanSettings = (type: {
		interest: number;
		frequency: string;
		id: number;
		duration: string;
		isActive: boolean;
	}) => {
		setLoanTypes((old) => old.concat(type));
	};

	return (
		<MainContentLayout className="relative">
			<CreateFloatSettingsModal
				closeModal={() => handleModals("CLOSE_MODALS")}
				onSubmit={handleCreateLoanSettings}
				isOpen={create}
			/>
			{activeLoanSetting && (
				<EditFloatSettingsModal
					closeModal={() => handleModals("CLOSE_MODALS")}
					onSubmit={handleEditLoanSettings}
					isOpen={edit}
					loan={activeLoanSetting}
				/>
			)}
			<div className="w-full h-max flex flex-col md:flex-row md:items-center md:justify-between">
				<span className="text-xs md:text-sm lg:text-sm xl:text-base">
					{"breadcrumbs > go here"}
				</span>
				<button
					className="ml-auto block w-max text-center bg-amali-green text-[#EDF8F7] rounded-md py-1 md:py-2 px-3 lg:px-6 font-medium hover:bg-opacity-80 text-xs md:text-sm lg:text-sm xl:text-base"
					onClick={() => handleModals("SHOW_CREATE_MODAL")}
				>
					Add New
				</button>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-y-14 mt-6 p-3 md:p-4 lg:p-6 xl:p-8 bg-white drop-shadow-xl shadow-lg rounded-md">
				{loanTypes.map((loan) => {
					return (
						<LoanSettingsCard
							key={loan.id}
							loan={loan}
							handleModals={handleModals}
							toggleActive={handleEditLoanSettings}
						/>
					);
				})}
			</div>
		</MainContentLayout>
	);
};

export default FloatSettingsLayout;
