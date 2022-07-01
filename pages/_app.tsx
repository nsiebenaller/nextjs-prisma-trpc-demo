import { withTRPC } from "@trpc/next";
import type { AppRouter } from "@/lib/trpc";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
	config() {
		return {
			url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/trpc`,
		};
	},
	ssr: true,
})(MyApp);
