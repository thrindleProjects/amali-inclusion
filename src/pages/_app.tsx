import React, { ReactNode, ReactElement, useState, useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { store } from "@/store";
import { toastOptions } from "@/utils/toastConfig";
import AuthenticatedLayout from "@/layout/AuthenticatedLayout";
import { NextPage } from "next";

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const router = useRouter();

	const [showChild, setShowChild] = useState(false);

	useEffect(() => {
		setShowChild(true);
	}, []);
	if (!showChild && process.env.NODE_ENV === "development") {
		return null;
	}

	const getLayout =
		Component.getLayout ??
		((page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>);

	return (
		<CookiesProvider>
			<Provider store={store}>
				{getLayout(<Component {...pageProps} key={router.pathname} />)}
				<Toaster position="top-right" toastOptions={toastOptions} />
			</Provider>
		</CookiesProvider>
	);
};

export default MyApp;
