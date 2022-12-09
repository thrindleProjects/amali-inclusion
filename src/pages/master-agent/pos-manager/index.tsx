import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import PosManager from "@/layout/pages-layout/master-agent/pos-manager";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
	return (
		<AuthLayout>
			<BodyLayout>
				<PosManager />
			</BodyLayout>
		</AuthLayout>
	);
};

export default Home;
