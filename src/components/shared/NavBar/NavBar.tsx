import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { NavBarProps } from "./Navbar.props";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import AccountDropdown from "@/components/lib/accountDropdown/AccountDropdown";
import AmaliLogo from "@/public/assets/amali-logo.png";


const NavBar: React.FC<NavBarProps> = ({ toggleSidebar, isOpen }) => {
	const largeScreen = useMediaQuery("(min-width: 1024px)");
	const [accountDropdown, setAccountDropdown] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(dropdownRef, () => setAccountDropdown(false));

	const toggleAccountDropdown = () => {
		setAccountDropdown((prevState) => !prevState);
	};

	return (
		<div className="shadow-sm bg-white right-0  fixed w-full lg:w-[77%] z-[1000]  h-[70px]">
			{largeScreen && (
				<div className="flex gap-4 items-center ml-[90%] p-4  w-full">
					<Icon icon="material-symbols:search" className="text-2xl" />

					<div
						className=" relative cursor-pointer"
						onClick={toggleAccountDropdown}
					>
						<Image
							alt="owner"
							src="/assets/profile.png"
							width={40}
							height={40}
							className="rounded-full"
						/>
						
					</div>
				</div>
			)}

			{!largeScreen && (
				<div className="flex justify-between items-center w-full  py-4 px-7">
					<Icon
						icon={isOpen ? "ic:outline-close" : "ri:menu-2-fill"}
						className="text-amali-green text-2xl "
						onClick={toggleSidebar}
					/>
					<div className="w-[50%]">
						<Image
							width={150}
							height={150}
							src={AmaliLogo}
							alt="Amali Logo"
							blurDataURL=""
							className="object-contain"

						/>
					</div>
					<div onClick={toggleAccountDropdown}>
						<Icon
							icon="mdi:dots-vertical"
							className="text-amali-green text-2xl z-[99999999999999999]"
						/>
					</div>
				</div>
			)}
			<div className="relative" ref={dropdownRef}>
				{accountDropdown && <AccountDropdown />}
			</div>
		</div>
	);
};

export default NavBar;
