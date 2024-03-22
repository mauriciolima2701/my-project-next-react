import Image from "next/image";
import { useState } from "react";
import { ListImageProps } from "./types";

export default function ListImages({ content }: ListImageProps) {
	const [size, setSize] = useState<number>(300);
	const url = "https://source.unsplash.com/featured/";

	function renderImage() {
		return (
			<Image
				src={`${url}${size}x${size}?${content}`}
				height={300}
				width={300}
				alt="Imagem"
				className="rounded-md"
			/>
		);
	}

	return (
		<div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
			<div className="flex justify-center items-center gap-7 mb-5">
				<span className="bg-indigo-600 uppercase w-full flex justify-center">
					{content}
				</span>
			</div>
			{renderImage()}
			<div className="flex justify-center">
				<button
					className="bg-indigo-600 hover:bg-opacity-35 transition duration-700 px-4 py-2 rounded-md m-auto text-xs"
					onClick={() => setSize(size + 1)}
				>
					MUDAR IMAGEM
				</button>
			</div>
		</div>
	);
}
