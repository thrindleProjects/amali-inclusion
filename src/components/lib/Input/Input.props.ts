export interface DateInputProps {
	label: string;
	type: string;
	placeholder?: string;
}


 interface SelectDataInputProps {
    name: string;
    value?: string;
}

export interface SelectInputProps {
    label: string;
    data: SelectDataInputProps[]
}