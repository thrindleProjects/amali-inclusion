import React, { useState, useEffect } from "react";

import {
	masterAgentLinks,
	adminNavLinks,
	subAgentsNavLinks,
	agentsNavLinks,
} from "@/types/navLinks";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
	rotate: {
		rotate: 90,
		transition: { duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] },
	},
	stop: {
		rotate: 0,
		transition: { duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] },
	},
};

const NavItem = () => {
	const [expanded, setExpanded] = useState<number | boolean>(1);
	const [role, setRole] = useState<null | string>();

	const getUserRole = () => {
		const userRole = localStorage.getItem("userRole");
		setRole(userRole);
	};

	const dataToBeRendered =
		role === "master-agent"
			? masterAgentLinks
			: role === "admin"
				? adminNavLinks
				: role === "sub-agent"
					? subAgentsNavLinks
					: agentsNavLinks;

	useEffect(() => {
		getUserRole();
	}, []);

	return (
		<div className="px-4 nav-item pb-20 lg:pb-0  bg-white">
			{dataToBeRendered.map((item, index) => (
				<div key={index}>
					<div key={index} className="mt-4 overflow-hidden text-amali-grey">
						{item.link && item.link.length ? (
							<Link
								href={`${item.link}`}
								className="px-3 flex justify-between items-center mx-auto hover:text-white hover:bg-amali-steel-blue p-2 rounded-md ease-in-out"
							>
								<div className="flex items-center gap-3 ">
									<Icon icon={item.icon} className="font-bold" />
									<p className="text-md ">{item.name}</p>
								</div>
							</Link>
						) : (
							<button
								onClick={() =>
									setExpanded(item.id === expanded ? false : item.id)
								}
								className="px-3 w-full flex justify-between items-center mx-auto hover:text-white hover:bg-amali-steel-blue p-2 rounded-md ease-in-out"
							>
								<div className="flex items-center gap-3 ">
									<Icon icon={item.icon} className="font-bold" />
									<p className="text-md ">{item.name}</p>
								</div>
								{!!item.subLinks.length && (
									<motion.div
										variants={variants}
										animate={item.id === expanded ? "rotate" : "stop"}
									>
										<Icon
											icon="material-symbols:arrow-forward-ios-rounded"
											className="font-bold "
										/>
									</motion.div>
								)}
							</button>
						)}

						<AnimatePresence>
							{!!item.subLinks.length && item.id === expanded && (
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: "auto" }}
									exit={{ height: 0 }}
									transition={{
										duration: 0.3,
										ease: [0.6, 0.05, -0.01, 0.9],
									}}
								>
									<div className={"bg-amali-bg rounded-lg flex flex-col py-2 "}>
										{item.subLinks.map((subLink, index) => (
											<Link
												href={`${subLink.link}`}
												key={index}
												className="flex-shrink-0 hover:text-amali-green"
											>
												<div>
													<div className="flex gap-3 px-4 ">
														{/* <Icon icon="carbon:dot-mark" className="text-white hover:text-amali-green " /> */}
														<p className="text-s my-2">{subLink.subType}</p>
													</div>
												</div>
											</Link>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			))}
		</div>
	);
};

export default NavItem;
