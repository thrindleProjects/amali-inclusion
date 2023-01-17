export interface CreateFloatSettingsModalProps {
	closeModal(): void;
	onSubmit(loan: {
		interest: number;
		frequency: string;
		id: number;
		duration: string;
		isActive: boolean;
	}): void;
	isOpen: boolean;
}
