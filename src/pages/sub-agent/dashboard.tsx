import AuthLayout from "@/layout/AuthLayout/AuthLayout";
import BodyLayout from "@/layout/BodyLayout/BodyLayout";
import React from "react";

const Dashboard = () => {
	return (
		<AuthLayout>
			<BodyLayout>
                Admin Dashboard
			</BodyLayout>
		</AuthLayout>
	);
};

export default Dashboard;