import NavBar from "../navbar";

export default function Header() {
	return (
		<div className="flex gap-2 justify-end py-4 bg-gray-600 fixed top-0 w-full z-10">
			<NavBar description="HOME" url="/" />
			<NavBar description="SOBRE" url="/about" />
			<NavBar description="GRÁFICOS" url="/charting" />
			<NavBar description="GRÁFICO PIZZA" url="/graficos" />
			<NavBar description="CONTATO" url="/contact" />
			<NavBar description="GALERIA" url="/gallery" />
		</div>
	);
}
