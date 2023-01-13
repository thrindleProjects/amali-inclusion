// import { GetStaticProps } from "next";
import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "./_app";
import { useRouter } from "next/router";

export const Home: NextPageWithLayout = () => {
	const router = useRouter();
	useEffect(() => {
		router.push("/login");

		// const role = localStorage.getItem("userRole");

		// if (role) {
		// 	if (role === "admin") {
		// 		router.push("/admin");
		// 	}
		// 	if (role === "master-agent") {
		// 		router.push("/master-agent");
		// 	}
		// 	if (role === "sub-agent") {
		// 		router.push("/sub-agent");
		// 	}
		// 	if (role === "agent") {
		// 		router.push("/agent");
		// 	}
		// }else{
		// 	router.push("/login");
		// }
	}, []);

	return <></>;
};
export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
	return <>{page}</>;
};
