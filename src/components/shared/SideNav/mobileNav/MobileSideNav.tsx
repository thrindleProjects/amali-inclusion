import useMediaQuery from "@/hooks/useMediaQuery";
import React, {useRef} from "react";
import { motion } from "framer-motion";
import { useHandleOutsideClicks } from "@/hooks/useHandleOutsideClicks";
import { SideNavProps } from "../SideNav.props";
import NavItem from "@/components/lib/NavItem";
  
const MobileSideNav: React.FC<SideNavProps>  = ({setIsOpen}) => {
	const largeScreen = useMediaQuery("(min-width: 1024px)");
	const divRef = useRef<null | HTMLDivElement>(null);
	


	// close modal on click outside
	useHandleOutsideClicks(divRef, () => setIsOpen(false));
	
	return (
		<div   className=" fixed right-0 left-0 top-[4.5rem] bottom-0 bg-[rgba(0,0,0,0.6)]  "
			style={{ zIndex: "1000000000" }}>
			<motion.div
				// ref={divRef}
				animate={{ x: !largeScreen ? 0 : "" }}
				initial={{ x: !largeScreen ? "-100vw" : "" }}
				exit={{ x: "-100vw" }}
				transition={{
					duration: 1,
					ease: [0.6, 0.05, -0.01, 0.9],
				}}

				className="shadow-xl bg-white  w-[70%] p-3 h-screen">
				<NavItem />
			</motion.div>
		</div>
		
	);
};

export default MobileSideNav;