import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { NavBarProps } from "./Navbar.props";

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar, isOpen }) => {
	const largeScreen = useMediaQuery("(min-width: 1024px)");

	return (
		<div className="shadow-xl bg-white w-full p-4   h-[70px]">
			{largeScreen && (
				<div className="flex gap-4 items-center justify-end">
					<Icon icon="material-symbols:search" className="text-2xl" />
					<div className=" relative">
						<Image alt="owner" src="/assets/profile.png" width={50} height={50} className="rounded-full" />
					</div>
				</div>
			)}

			{!largeScreen && (
				<div className="flex justify-between items-center w-auto px-2">
					<Icon icon={isOpen ? "ic:outline-close" : "ri:menu-2-fill"} className="text-amali-green text-2xl" onClick={toggleSidebar} />
					<figure className="relative  ">
						<Image width={150} height={150} src="/assets/logo.png" alt="amali Logo" />
					</figure>
					<Icon icon="mdi:dots-vertical" className="text-amali-green text-2xl" />
				</div>
			)}
		</div>
	);
};

export default NavBar;
