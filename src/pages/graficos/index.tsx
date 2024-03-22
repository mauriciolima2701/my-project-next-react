import { PieChart } from "@/components/charting/pie";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type Repo = {
	users: {
		id: number;
		age: number;
		weight: number;
	}[];
};

export const getStaticProps: GetStaticProps<{
	repo: Repo;
}> = (async () => {
	const res = await fetch("https://dummyjson.com/users?limit=100");
	const repo = await res.json();
	return { props: { repo } };
}) satisfies GetStaticProps<{
	repo: Repo;
}>;

const ageGroup = {
	lessThan18: { title: "Menos de 18", ages: [] as number[], TotalWeight: 0 },
	between18and30: {
		title: "Entre 18 e 30",
		ages: [] as number[],
		TotalWeight: 0,
	},
	between31and40: {
		title: "Entre 31 e 40",
		ages: [] as number[],
		TotalWeight: 0,
	},
	moreThan40: { title: "Mais de 40", ages: [] as number[], TotalWeight: 0 },
};

export default function Page({
	repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	let labels: string[] = [];
	let totalPersons: number[] = [];
	let avgWeight: number[] = [];

	repo.users.reduce((acc, user) => {
		const { age, weight } = user;
		const group =
			age <= 18
				? "lessThan18"
				: age <= 30
				? "between18and30"
				: age <= 40
				? "between31and40"
				: "moreThan40";

		ageGroup[group].ages.push(age);
		ageGroup[group].TotalWeight += weight;

		return acc;
	}, ageGroup);

	Object.values(ageGroup).forEach((group) => {
		labels.push(group.title);
		totalPersons.push(group.ages.length);
		avgWeight.push(group.TotalWeight / group.ages.length);
	});

	return (
		<section>
			<h1 className="text-6xl mt-14 text-white bg-black flex justify-center items-center h-44">
				LIB REACT-CHART-JS
			</h1>
			<div className="w-full h-screen flex items-center justify-around">
				<div className="w-1/3">
					<PieChart
						labels={labels}
						datasets={[
							{
								data: totalPersons,
								label: "Total de pessoas",
							},
						]}
					/>
				</div>
			</div>
		</section>
	);
}

// export default Page;
