import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Data {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor?: string[];
		borderColor?: string[];
		borderWidth?: number;
	}[];
}

const backgroundColor = [
	"rgba(255, 99, 132, 0.2)",
	"rgba(54, 162, 235, 0.2)",
	"rgba(255, 206, 86, 0.2)",
	"rgba(75, 192, 192, 0.2)",
	"rgba(153, 102, 255, 0.2)",
	"rgba(255, 159, 64, 0.2)",
];
const borderColor = [
	"rgba(255, 99, 132, 1)",
	"rgba(54, 162, 235, 1)",
	"rgba(255, 206, 86, 1)",
	"rgba(75, 192, 192, 1)",
	"rgba(153, 102, 255, 1)",
	"rgba(255, 159, 64, 1)",
];

export function PieChart(data: Data) {
	data.datasets.map((item) => {
		item.backgroundColor = item.backgroundColor ?? backgroundColor;
		item.borderColor = item.borderColor ?? borderColor;
	});

	return (
		<Pie
			data={data}
			options={{
				plugins: {
					legend: {
						position: "bottom" as const,
					},
				},
			}}
		/>
	);
}
