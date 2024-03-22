import ListImages from "@/components/list-image";

export default function Gallery() {
	return (
		<section className="max-w-screen-xl mx-auto">
			<div
				className={`
      flex justify-center
      flex-wrap
      items-center
      gap-5
      min-h-screen
      mt-16
      mb-6
      `}
			>
				<ListImages content="comida" />
				<ListImages content="pessoa" />
				<ListImages content="festa" />
				<ListImages content="praia" />
				<ListImages content="carro" />
				<ListImages content="paisagem" />
			</div>
		</section>
	);
}
