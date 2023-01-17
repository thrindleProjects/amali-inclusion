export interface LoanSettingsProps {
	loan: {
		interest: number;
		frequency: string;
		id: number;
		duration: string;
		isActive: boolean;
	};
	handleModals(
		type: HandleModal,
		loan: {
			interest: number;
			frequency: string;
			id: number;
			duration: string;
			isActive: boolean;
		}
	): void;
	toggleActive(loan: {
		interest: number;
		frequency: string;
		id: number;
		duration: string;
		isActive: boolean;
	}): void;
}

export type HandleModal =
	| "SHOW_EDIT_MODAL"
	| "SHOW_CREATE_MODAL"
	| "HIDE_EDIT_MODAL"
	| "HIDE_CREATE_MODAL"
	| "CLOSE_MODALS";
