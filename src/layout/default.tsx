import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactElement } from "react";

export default function DefaultLayout(page: ReactElement) {
	return (
		<>
			<Header />
			<div>{page}</div>
			<Footer />
		</>
	);
}
