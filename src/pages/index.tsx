import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div className="h-screen bg-bg-home bg-center bg-cover bg-no-repeat bg-fixed opacity-60"></div>
			<h1 className="text-6xl w-full text-white bg-black flex justify-center items-center h-44 absolute top-14">
				HOME
			</h1>
			<div className="h-[800px] p-20 flex flex-col gap-8">
				<h2 className="text-4xl">TEXTO PADRÃO</h2>
				<p className="text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, delectus
					pariatur! Voluptates corrupti inventore dolores veritatis suscipit,
					eligendi accusantium, consequatur aspernatur, incidunt doloribus ullam
					exercitationem vitae autem fuga veniam tempora! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit. Ut, delectus pariatur! Voluptates
					corrupti inventore dolores veritatis suscipit, eligendi accusantium,
					consequatur aspernatur, incidunt doloribus ullam exercitationem vitae
					autem fuga veniam tempora! Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Ut, delectus pariatur! Voluptates corrupti inventore
					dolores veritatis suscipit, eligendi accusantium, consequatur
					aspernatur, incidunt doloribus ullam exercitationem vitae autem fuga
					veniam tempora!
				</p>
				<p className="text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, delectus
					pariatur! Voluptates corrupti inventore dolores veritatis suscipit,
					eligendi accusantium, consequatur aspernatur, incidunt doloribus ullam
					exercitationem vitae autem fuga veniam tempora!
				</p>
				<p className="text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, delectus
					pariatur! Voluptates corrupti inventore dolores veritatis suscipit,
					eligendi accusantium, consequatur aspernatur, incidunt doloribus ullam
					exercitationem vitae autem fuga veniam tempora!
				</p>
			</div>
			<div className="h-screen bg-bg-home-two bg-center bg-cover bg-no-repeat bg-fixed opacity-60"></div>
			<div className="h-[800px] p-20 flex flex-col gap-8">
				<h2 className="text-4xl">TEXTO PADRÃO</h2>
				<p className="text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, delectus
					pariatur! Voluptates corrupti inventore dolores veritatis suscipit,
					eligendi accusantium, consequatur aspernatur, incidunt doloribus ullam
					exercitationem vitae autem fuga veniam tempora! Lorem ipsum dolor sit
					amet, consectetur adipisicing elit. Ut, delectus pariatur! Voluptates
					corrupti inventore dolores veritatis suscipit, eligendi accusantium,
					consequatur aspernatur, incidunt doloribus ullam exercitationem vitae
					autem fuga veniam tempora! Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Ut, delectus pariatur! Voluptates corrupti inventore
					dolores veritatis suscipit, eligendi accusantium, consequatur
					aspernatur, incidunt doloribus ullam exercitationem vitae autem fuga
					veniam tempora!
				</p>
				<p className="text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, delectus
					pariatur! Voluptates corrupti inventore dolores veritatis suscipit,
					eligendi accusantium, consequatur aspernatur, incidunt doloribus ullam
					exercitationem vitae autem fuga veniam tempora!
				</p>
				<p className="text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, delectus
					pariatur! Voluptates corrupti inventore dolores veritatis suscipit,
					eligendi accusantium, consequatur aspernatur, incidunt doloribus ullam
					exercitationem vitae autem fuga veniam tempora!
				</p>
			</div>
		</>
	);
}
