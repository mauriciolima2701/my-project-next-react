export default function Footer() {
	const currentDate = new Date().getFullYear();

	return (
		<div className="bg-gray-600 w-full relative bottom-0 h-10">
			<div className="flex justify-center items-center h-full flex-col ">
				<p className="text-[10px]">
					Developed by Mauricio Lima © {currentDate}
				</p>
			</div>
		</div>
	);
}
