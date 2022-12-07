import React from "react";
import AmaliLogo from "@/public/amali-logo.png";
import ImageComponent from "@/components/shared/ImageComponent";

const Login: React.FC = () => {
	return (
		<div className="w-full h-screen min-h-max py-20 flex flex-col gap-4 items-center">
			<div className="h-16 w-full bg-inherit relative mb-4">
				<ImageComponent src={AmaliLogo} alt="Amali Logo" />
			</div>
			<section className="bg-red-500 border-2 border-red-500">
				<h4 className="text-xl font-bold mb-2">Sign In</h4>
				<p className="bg-black">Please login to your account</p>
			</section>
		</div>
	);
};

export default Login;
