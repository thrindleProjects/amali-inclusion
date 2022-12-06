import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavItem from "@/components/lib/NavItem";


const SideNav = () => {
	const largeScreen = useMediaQuery("(min-width: 1024px)");
	return (
		<motion.div
			animate={{ x: !largeScreen ? 0 : "" }}
			initial={{ x: !largeScreen ? "-100vw" : "" }}
			exit={{ x: "-100vw" }}
			transition={{
				duration: 1,
				ease: [0.6, 0.05, -0.01, 0.9],
			}}

			className="shadow-xl bg-white w-[20%] h-screen">
			<figure className="relative mt-2  ">
				<Image width={200} height={200} src="/assets/logo.png" alt="amali Logo" />
			</figure>
			<div>
				<NavItem />
			</div>
		</motion.div>
	);
};

export default SideNav;
