import { Variants } from "framer-motion";

export const variants: Variants = {
	initial: {
		opacity: 0,
		x: -100,
		transition: {
			duration: 0.3,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
	exit: {
		opacity: 0,
		x: 50,
		transition: {
			duration: 0.3,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
};
