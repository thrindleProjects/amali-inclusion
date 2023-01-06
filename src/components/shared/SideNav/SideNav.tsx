import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import useMediaQuery from "@/hooks/useMediaQuery";
import NavItem from "@/components/lib/NavItem";
import Link from "next/link";

const SideNav = () => {
	// const largeScreen = useMediaQuery("(min-width: 1024px)");
	return (
		<motion.aside
			// animate={{ x: !largeScreen ? 0 : "" }}
			// initial={{ x: !largeScreen ? "-100vw" : "" }}
			// exit={{ x: "-100vw" }}
			// transition={{
			// 	duration: 1,
			// 	ease: [0.6, 0.05, -0.01, 0.9],
			// }}
			className="layout__side_bar"
		>
			<figure className="w-full px-4 py-4 my-auto bg-white flex items-center">
				<Link href={"/"}>
					<Image
						width={150}
						height={300}
						src="/assets/amali-logo.png"
						alt="amali Logo"
						className=""
					/>
				</Link>
			</figure>
			<div className="w-full">
				<NavItem />
			</div>
		</motion.aside>
	);
};

export default SideNav;
