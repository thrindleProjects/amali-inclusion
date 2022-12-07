import useMediaQuery from "@/hooks/useMediaQuery";
import { profileDropdown } from "@/types/navLinks";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const AccountDropdown = () => {
	const largeScreen = useMediaQuery("(min-width: 1024px)");

	return (
		<div className="absolute  pt-1 p-2 top-[0.25rem]  text-xs right-0 w-52 text-amali-grey">
			<div className="bg-white shadow-lg rounded-md overflow-hidden">
				{!largeScreen && (
					<>
						<ul>
							{profileDropdown.map((item, index) => (
								<li
									key={index}
									className=" w-full h-7 flex flex-row items-center px-2 mb-1 transition-all ease-in-out duration-200 hover:text-amali-green "
								>
									{item.name}
								</li>
							))}
						</ul>
					</>
				)}
				{largeScreen && (
					<div className="p-3">
						<div className="flex items-center">
							<Image
								alt="owner"
								src="/assets/profile.png"
								width={50}
								height={50}
								className="rounded-full"
							/>
							<div>
								<p>Master Agent</p>
								<p>09087656744</p>
							</div>
							<hr />
						</div>
						<hr className="w-full my-2" />

						<ul>
							{profileDropdown.map((item, index) => (
								<div key={index} className="gap-4 flex items-center">
									<Icon
										icon={item.icon}
										className={
											item.name === "Logout"
												? "text-3xl text-red-500"
												: "text-3xl text-amali-grey"
										}
									/>
									<li
										className={
											item.name === "Logout"
												? " w-full cursor-pointer h-7 flex flex-row items-center px-2 mb-1 transition-all ease-in-out duration-200 text-red-500 "
												: " w-full cursor-pointer h-7 flex flex-row items-center px-2 mb-1 transition-all ease-in-out duration-200 "
										}
									>
										{item.name}
									</li>
								</div>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default AccountDropdown;
