
export default function Header() {


	return (<>
		<div className="w-full h-16 flex flex-col justify-center px-6 shadow border-b bg-white ">
			<div className="">
				<div className="flex items-center justify-between px-2">

					<div className="flex items-center space-x-4">
						<h1 className="font-bold text-3xl">IIBS</h1>
						<p className="text-base font-light">Institut informatique business school</p>
					</div>
					<div className="flex items-center justify-end space-x-4">
						{/* <InputSearch onChange={(value) => console.log(value)} placeholder="Search" className="w-80" /> */}
						<div className="min-w-fit">Le Hacker Souriant</div>
						<div className="w-10 h-10 flex items-center">
							<img
								src="https://cnmi.spmi.pt/wp-content/uploads/2014/10/speaker-3.jpg"
								className="w-auto rounded-full bg-cover"
								alt="profile"
							/>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</>);
}
