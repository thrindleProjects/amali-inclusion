import React, { useState } from "react";

import { adminNavLinks } from "@/types/navLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const NavItem = () => {
	const router = useRouter();
	const [expanded, setExpanded] = useState(1);
	return (
		<div className="p-4 text-amali-grey">
			{adminNavLinks.map((item, index) => (
				<Link href={`${router.pathname}${item.link}`} key={index}>
					<div key={index} className=" px-4 mt-4 overflow-hidden" onClick={() => setExpanded(item.id)}>
						<div className="flex justify-between items-center   mx-auto ">

							<div className="flex items-center gap-3">
								{/*  eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
								<Icon icon={item.icon!} className="font-bold" />
								<p className="text-md ">{item.name}</p>
							</div>

							{item.subLinks.length !== 0 && (
								<Icon icon="material-symbols:arrow-forward-ios-rounded" className="font-bold" />
							)}

						</div>
						{item.subLinks.map((subLink, index) => (
							<motion.div
								className={expanded === item.id ? "mt-2" : ""}
								key={index}
								animate={{
									height: expanded === item.id ? "100%" : "0",
								}}
								transition={{
									duration: 0.8,
									ease: [0.6, 0.05, -0.01, 0.9],
								}}
							>
								<div className="flex gap-3 hover:text-amali-green">
									<Icon icon="carbon:dot-mark" className="text-white hover:text-amali-green " />
									<p className="text-sm ">{subLink.subType}</p>
								</div>
							</motion.div>
						))}
					</div>
				</Link>
			))}
		</div>
	);
};

export default NavItem;
