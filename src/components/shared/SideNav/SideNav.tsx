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

			className="shadow-xl bg-white  h-screen fixed  pb-28 overflow-y-scroll">
			<figure className="  ml-6 w-full  h-[70px] my-auto fixed bg-white flex items-center  ">
				<Image width={150} height={300} src="/assets/amali-logo.png" alt="amali Logo" className="" />
			</figure>
			<div className=" ">
				<NavItem />
			</div>
		</motion.div>
	);
};

export default SideNav;
