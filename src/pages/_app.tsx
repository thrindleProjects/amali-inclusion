import React from "react";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import { store } from "@/store";
import { toastOptions } from "@/utils/toastConfig";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	return (
		<CookiesProvider>
			<Provider store={store}>
				<Component {...pageProps} key={router.pathname} />
				<Toaster position="top-right" toastOptions={toastOptions} />
			</Provider>
		</CookiesProvider>
	);
};

export default MyApp;
