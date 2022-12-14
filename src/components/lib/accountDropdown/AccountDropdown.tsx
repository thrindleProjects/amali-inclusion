import useMediaQuery from "@/hooks/useMediaQuery";
import { profileDropdown } from "@/types/navLinks";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const AccountDropdown = () => {
	const largeScreen = useMediaQuery("(min-width: 1024px)");

	return (
		<div className="fixed right-0  pt-1 p-2 text-xs  w-52 text-amali-grey ">
			<div className="bg-white shadow-lg rounded-md overflow-hidden  p-2">
				{!largeScreen && (
					<>
						<ul>
							{profileDropdown.map((item, index) => (
								<li
									key={index}
									className=" w-full h- flex flex-row items-center px-2 mb-1 transition-all ease-in-out duration-200  hover:text-white hover:bg-amali-steel-blue p-2 rounded-md   "
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
								<div key={index} className="gap-4 flex items-center hover:text-white hover:bg-amali-steel-blue p-2 rounded-md  transition-all ease-in-out duration-200 ">
									<Icon
										icon={item.icon}
										className={
											item.name === "Logout"
												? "text-3xl text-red-500"
												: "text-3xl "
										}
									/>
									<li
										className={
											item.name === "Logout"
												? " w-full cursor-pointer h-5 flex flex-row items-center px-2 mb-1 transition-all ease-in-out duration-200 text-red-500 "
												: " w-full cursor-pointer h-5 flex flex-row items-center px-2 mb-1 transition-all ease-in-out duration-200 "
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
