import React, {useRef} from "react";

import { allMasterAgents } from "@/data/data";
import { Icon } from "@iconify/react";
import PrimaryButton from "../Button/PrimaryButton";
import DateInput from "../Input/Input";
import SelectInput from "../Input/SelectInput";
import { AssignTerminalProps } from "./AssignTerminalModal.props";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const AssignTerminalModal: React.FC<AssignTerminalProps> = ({ setShowModal }) => {
	const divRef = useRef<null | HTMLDivElement>(null);


	// close modal on click outside
	useOnClickOutside(divRef, () => setShowModal(false));

	return (
		<div className='fixed inset-0 z-[99999999999] flex justify-center items-center px-10' style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
			<div ref={divRef} className="bg-white p-10 rounded-lg  w-full md:w-[500px]">
				<div className="flex justify-between">
					<p className="text-center text-sm md:text-xl font-bold">Assign Terminal To agent</p>
					<Icon icon="mdi:window-close" className="text-red-500" onClick={() =>setShowModal(false)} />
				</div>
				<hr className="bg-amali-grey my-4" />
				<SelectInput label="Select agent" data={allMasterAgents} />
				<DateInput label="Serial Number" type='text' placeholder='Enter serial number' />

				<div className="mt-6 md:flex justify-between gap-10">
					<PrimaryButton text="Assign Terminal" bgColor="#42B0A8" />
					<PrimaryButton text="Close" bgColor="red" />

				</div>
              
			</div>
		</div>
	);
};

export default AssignTerminalModal;