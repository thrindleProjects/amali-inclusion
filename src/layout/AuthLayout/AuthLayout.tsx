import React from "react";
import type { FC, PropsWithChildren } from "react";
import SideNav from "@/components/shared/SideNav";

const AuthLayout: FC<PropsWithChildren> = ({children }) => {
	return (
		<div>
			<div className="relative flex h-screen w-screen">
				<SideNav  />

				<main className="relative flex h-full w-full flex-1 flex-col overflow-y-auto overflow-x-hidden">

					<div className="w-full flex-1 p-5 pt-5 lg:p-10">{children}</div>
				</main>
			</div>;

		</div>
	);
};

export default AuthLayout;