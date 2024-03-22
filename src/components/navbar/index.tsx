import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderProps } from "./types";

export default function NavBar({ description, url }: HeaderProps) {
	const router = useRouter();
	const { pathname } = router;

	const isSelected =
		pathname === url ? "text-indigo-400 underline font-bold" : "";

	return (
		<div
			className={`${isSelected} w-max px-4 transition duration-700 font-bold hover:underline hover:text-indigo-400 hover:font-bold cursor-pointer`}
		>
			<Link href={url}>{description}</Link>
		</div>
	);
}
