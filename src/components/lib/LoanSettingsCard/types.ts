export interface LoanSettingsProps {
	loan: {
		interest: number;
		frequency: string;
		id: number;
		duration: string;
	};
	handleModals(
		type: HandleModal,
		loan: {
			interest: number;
			frequency: string;
			id: number;
			duration: string;
		}
	): void;
}

export type HandleModal =
	| "SHOW_EDIT_MODAL"
	| "SHOW_CREATE_MODAL"
	| "HIDE_EDIT_MODAL"
	| "HIDE_CREATE_MODAL"
	| "CLOSE_MODALS";
