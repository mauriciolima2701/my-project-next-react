import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
	labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
	datasets: [
		{
			label: "Vendas",
			backgroundColor: "rgba(75,192,192,1)",
			borderColor: "#e60313",
			borderWidth: 1,
			data: [65, 59, 80, 81, 56, 55],
		},
	],
};

const options = {
	indexAxis: "x" as const,
	elements: {
		bar: {
			borderWidth: 1,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			display: true,
		},
		title: {
			display: true,
			text: "Gráfico de Vendas Mensais",
			fontSize: 36,
		},
	},
};

const BarChartExemplo = () => {
	return <Bar data={data} options={options} />;
};

export default BarChartExemplo;
