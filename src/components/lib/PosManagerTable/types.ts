import * as CONSTANTS from "@/types/constants";
export interface PosManagerTableProps {
	data?: {
		[CONSTANTS.TERMINAL_ID]: string;
		[CONSTANTS.AGENT_ASSIGNED]: string;
		[CONSTANTS.SUB_AGENT_ASSIGNED]: string;
		[CONSTANTS.SERIAL_NO]: string;
		[CONSTANTS.STATUS]: "active" | "inactive";
		[CONSTANTS.CREATED_AT]: string;
	}[];
}
