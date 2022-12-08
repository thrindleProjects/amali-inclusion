import React from "react";
import Link from "next/link";
import ImageComponent from "@/components/shared/ImageComponent";
import AmaliLogo from "@/public/assets/amali-logo.png";
import RegisterForm from "@/components/lib/registerForm";

const Register: React.FC = () => {
	return (
		<div className="w-full h-full min-h-max py-20 flex flex-col gap-4 items-center bg-[#FBFBFF]">
			<div className="h-12 lg:h-16 flex-shrink-0 min-h-max w-full bg-inherit relative">
				<Link href={"/"} className="h-full">
					<ImageComponent src={AmaliLogo} alt="Amali Logo" />
				</Link>
			</div>
			<section className="cursor-default w-4/5 md:w-3/4 lg:w-3/4 xl:w-7/12">
				<h4 className="text-sm md:text-xl font-bold mb-2">Register</h4>
				<p className="text-sm md:text-lg text-[#202B37] font-thin">
					Please fill the form below to create a new account
				</p>
			</section>
			<div className="w-4/5 md:w-3/4 lg:w-3/4 xl:w-7/12">
				<RegisterForm />
			</div>
			<section className="flex flex-row gap-2 items-center text-xs lg:text-sm">
				<h6>Have an account?</h6>
				<Link
					href="/login"
					className="block text-amali-green w-max relative before:w-0 before:absolute before:-bottom-px before:mx-auto before:inset-x-0 before:bg-amali-green hover:before:w-full before:transition-all before:duration-500 before:ease-out hover:before:h-[2px]"
				>
					Login
				</Link>
			</section>
		</div>
	);
};

export default Register;
