import React from "react";
import AmaliLogo from "@/public/assets/amali-logo.png";
import ImageComponent from "@/components/shared/ImageComponent";
import LoginForm from "@/components/lib/loginForm";
import Link from "next/link";

const Login: React.FC = () => {
	return (
		<div className="w-full h-screen min-h-max py-20 flex flex-col gap-4 items-center bg-[#FBFBFF]">
			<div className="h-12 lg:h-16 flex-shrink-0 min-h-max w-full bg-inherit relative">
				<Link href={"/"} className="h-full">
					<ImageComponent src={AmaliLogo} alt="Amali Logo" />
				</Link>
			</div>
			<section className="cursor-default w-4/5 md:w-2/4 lg:w-1/4 xl:w-1/3">
				<h4 className="text-sm md:text-xl font-bold mb-2">Sign In</h4>
				<p className="text-sm md:text-lg text-[#202B37] font-thin">
					Please login to your account
				</p>
			</section>
			<div className="w-4/5 md:w-2/4 lg:w-1/4 xl:w-1/3">
				<LoginForm />
			</div>
			<section className="flex flex-row gap-2 items-center text-xs lg:text-sm">
				<h6>Don&apos;t have an account?</h6>{" "}
				<Link
					href="/register"
					className="block text-amali-green w-max relative before:w-0 before:absolute before:-bottom-px before:mx-auto before:inset-x-0 before:bg-amali-green hover:before:w-full before:transition-all before:duration-500 before:ease-out hover:before:h-[2px]"
				>
					Sign up
				</Link>
			</section>
		</div>
	);
};

export default Login;
