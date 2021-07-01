import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='bg-gray-800 h-full'>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}
export default MyApp;
