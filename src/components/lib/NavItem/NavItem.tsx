import React, { useState } from "react";

import { subAgentsNavLinks } from "@/types/navLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const NavItem = () => {
	const router = useRouter();
	const [expanded, setExpanded] = useState<number | boolean>(1);
	return (
		<div className="px-4  md:mt-20 nav-item pb-20 lg:pb-0  bg-white  ">
			{subAgentsNavLinks.map((item, index) => (
				<Link href={`${router.pathname}${item.link}`} key={index}>
					<div key={index} className=" px-3 mt-4 overflow-hidden text-amali-grey">
						<div onClick={() => setExpanded(item.id === expanded ? false : item.id)} className="flex justify-between items-center   mx-auto transition-all  duration-200  hover:text-white hover:bg-amali-steel-blue p-2 rounded-md  ease-in-out">
							<div className="flex items-center gap-3 ">
								{/*  eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
								<Icon icon={item.icon!} className="font-bold" />
								<p className="text-md " >{item.name}</p>
							</div>

							{item.subLinks.length !== 0 && (
								<Icon
									icon="material-symbols:arrow-forward-ios-rounded"
									className="font-bold "


								/>
							)}
						</div>
						<div
							className={
								item.subLinks.length !== 0 && item.id === expanded ? "bg-amali-bg p-2 rounded-lg" : ""
							}
						>
							{item.subLinks.map((subLink, index) => (
								<motion.div
									className={expanded === item.id ? "my-2 " : ""}
									key={index}
									animate={{
										height: expanded === item.id ? "100%" : "0",
									}}
									transition={{
										duration: 0.8,
										ease: [0.6, 0.05, -0.01, 0.9],
									}}
								>
									<div className="flex gap-3 hover:text-amali-green px-4 ">
										{/* <Icon icon="carbon:dot-mark" className="text-white hover:text-amali-green " /> */}
										<p className="text-sm text-black my-2">{subLink.subType}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default NavItem;
