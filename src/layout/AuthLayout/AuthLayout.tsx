import React, { useState } from "react";
import type { FC, PropsWithChildren } from "react";
import SideNav from "@/components/shared/SideNav";
import NavBar from "@/components/shared/NavBar";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileSideNav from "@/components/shared/SideNav/mobileNav/MobileSideNav";
import { AnimatePresence } from "framer-motion";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const largeScreen = useMediaQuery("(min-width: 1024px)");

	const toggleSidebar = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div>
			<div className="relative flex justify-between no-scrollbar ">
				{largeScreen && (
					<div>
						<SideNav />
					</div>
				)}
				<AnimatePresence>{isOpen && !largeScreen && <MobileSideNav setIsOpen={setIsOpen} />}</AnimatePresence>

				<main className="  h-full flex-1  main-wrapper">
					<NavBar toggleSidebar={toggleSidebar} isOpen={isOpen} />

					<div className="w-full flex-1    wrapper">{children}</div>
				</main>
			</div>
		</div>
	);
};

export default AuthLayout;
