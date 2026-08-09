import trailer from "../../assets/videos/crimson-trailer-video.mp4"

export const News = () => {
	return (
		<>
			<section className={"relative h-max overflow-hidden"}>
				<div className="h-screen overflow-hidden">
					<video className={"w-[120vw]"} autoPlay muted playsInline={true} unselectable={"on"} controls={false} loop>
						<source className={""} src={trailer} type="video/mp4" />
					</video>
				</div>
				
				<div className="bg-[#000000bb] absolute inset-0"></div>
			</section>
		</>
	);
};
