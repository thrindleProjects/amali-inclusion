import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { SideNavProps } from "../SideNav.props";
import NavItem from "@/components/lib/NavItem";
import Image from "next/image";
import AmaliLogo from "@/public/assets/amali-logo.png";

const MobileSideNav: React.FC<SideNavProps> = ({ toggleSidebar }) => {
	const largeScreen = useMediaQuery("(min-width: 1024px)");
	const divRef = useRef<null | HTMLDivElement>(null);

	// close modal on click outside
	useOnClickOutside(divRef, () => toggleSidebar(false));

	return (
		<div className="absolute right-0 left-0 top-0 bottom-0 bg-[rgba(0,0,0,0.6)] z-50 main-wrapper">
			<div className="w-[50%] opacity-100">
				<Image
					width={150}
					height={150}
					src={AmaliLogo}
					alt="Amali Logo"
					blurDataURL=""
					className="object-contain border-none"
				/>
			</div>
			<motion.div
				ref={divRef}
				animate={{ x: !largeScreen ? 0 : "" }}
				initial={{ x: !largeScreen ? "-100vw" : "" }}
				exit={{ x: "-100vw" }}
				transition={{
					duration: 1,
					ease: [0.6, 0.05, -0.01, 0.9],
				}}
				className="shadow-xl bg-white w-[95%] md:w-[70%] p-3  h-screen overflow-y-scroll pb-32"
			>
				<NavItem />
			</motion.div>
		</div>
	);
};

export default MobileSideNav;
