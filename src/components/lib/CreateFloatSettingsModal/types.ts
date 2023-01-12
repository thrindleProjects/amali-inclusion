export interface CreateFloatSettingsModalProps {
	closeModal(): void;
	onSubmit(loan: {
		interest: number;
		frequency: string;
		id: number;
		duration: string;
	}): void;
	isOpen: boolean;
}
