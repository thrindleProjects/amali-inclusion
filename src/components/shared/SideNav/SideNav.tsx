import Image from "next/image";
import React from "react";
import NavItem from "@/components/lib/NavItem";
import Link from "next/link";

const SideNav = () => {
	return (
		<aside className="layout__side_bar">
			<figure className="w-full h-20 px-4 py-4 my-auto bg-white flex items-center">
				<Link href={"/"} className="relative w-full h-full">
					<Image
						style={{
							height: "100%",
							width: "auto",
						}}
						src="/assets/amali-logo.png"
						alt="amali Logo"
						width={300}
						height={300}
					/>
				</Link>
			</figure>
			<div className="w-full">
				<NavItem />
			</div>
		</aside>
	);
};

export default SideNav;
