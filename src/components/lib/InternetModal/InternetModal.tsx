import React from "react";
import Modal from "react-modal";
import { InternetModalProps } from "./types";
import PinInput from "react-pin-input";
import * as CONSTANTS from "@/types/constants";
import { Icon } from "@iconify/react";

const InternetModal: React.FC<InternetModalProps> = ({
	isOpen,
	handleHideModal,
	onChange,
	amount,
	recipient,
	value
}) => {
	const handleChange = (value: string) => {
		onChange(CONSTANTS.PIN, value);
	};
	return (
		<Modal
			isOpen={isOpen}
			shouldCloseOnEsc
			onRequestClose={handleHideModal}
			style={{
				overlay: {
					backgroundColor: "#00000020",
					zIndex: 100,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflow: "auto",
				},
				content: {
					outline: "none",
				},
			}}
			shouldCloseOnOverlayClick={true}
			shouldReturnFocusAfterClose={true}
			ariaHideApp={false}
			className="bg-white rounded-md flex-shrink-0 w-[90%] md:w-4/6 lg:w-2/6 drop-shadow-2xl"
		>
			<div className="text-amali-grey text-opacity-90">
				<section className="flex-shrink-0 border-b border-b-amali-grey border-opacity-40 flex justify-between items-center py-3 px-4">
					<h1 className="text-bold text-sm md:text-lg lg:text-xl p-3">
						Confirm Transaction
					</h1>
					<Icon
						icon="ic:outline-close"
						className="text-amali-grey tex- lg:text-2xl"
						onClick={handleHideModal}
					/>
				</section>
				<section className="text-center px-7 mt-4">
					<p className="text-xs md:text-base">
						To verify your Airtime purchase of
					</p>
					<h4 className="font-extrabold text-lg lg:text-xl xl:text-2xl text-amali-steel-blue">
						{amount} for ₦{value}
					</h4>
				</section>
				<section className="px-7 mt-4 text-xs md:text-base">
					To: {recipient}
				</section>
			</div>
			<div className="px-7 py-4">
				<p className="text-xs md:text-sm font-medium pb-1 text-text-color-a">
					Please enter your 4-digit pin
				</p>
				<PinInput
					length={4}
					secret={true}
					type={"numeric"}
					focus={true}
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
						gap: "0.5rem",
					}}
					inputStyle={{
						borderColor: "#88c3c1",
						backgroundColor: "#88c3c180",
						width: "100%",
						aspectRatio: 1,
						height: "auto",
						margin: "0",
					}}
					inputFocusStyle={{
						borderColor: "#718096",
						backgroundColor: "#71809620",
					}}
					onChange={handleChange}
				/>
				<button className="w-full text-center bg-amali-green text-[#EDF8F7] mt-4 rounded-md py-4 font-bold hover:bg-opacity-80">
					Continue
				</button>
			</div>
		</Modal>
	);
};

export default InternetModal;
