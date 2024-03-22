import BarChartExemplo from "@/components/charting/bar-exemplo";
import { VerticalBar } from "@/components/charting/vertical-bar";

export default function Charting() {
	return (
		<section>
			<h1 className="text-6xl mt-14 text-white bg-black flex justify-center items-center h-44">
				TESTANDO A LIB REACT-CHART-JS
			</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					alignItems: "center",
					height: "100vh",
					gap: "48px",
					// margin: "44px",
				}}
			>
				<div style={{ width: 700 }}>
					<VerticalBar />
				</div>
				<div style={{ width: 700 }}>
					<BarChartExemplo />
				</div>
			</div>
		</section>
	);
}
