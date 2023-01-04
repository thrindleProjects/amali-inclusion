import React, { ReactElement } from "react";
import LoginLayout from "@/components/pages-layout/login";
import { NextPageWithLayout } from "./_app";
const Login: NextPageWithLayout = () => {
	return (
		<>
			<LoginLayout />
		</>
	);
};

Login.getLayout = function getLayout(page: ReactElement) {
	return <>{page}</>;
};

export default Login;
