import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom" as const,
		},
		title: {
			display: true,
			text: "Testando a funcionalidade",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => Math.random() * (100 - 1) + 1),
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: labels.map(() => Math.random() * (100 - 1) + 1),
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

export function VerticalBar() {
	return <Bar options={options} data={data} />;
}
