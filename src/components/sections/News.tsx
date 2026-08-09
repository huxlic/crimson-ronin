import trailer from "../../assets/videos/crimson-trailer-video.mp4"

export const News = () => {
	return (
		<>
			<section className={"relative min-h-screen overflow-hidden"}>
				{/*<div className="h-screen overflow-hidden">*/}
					<video className={""} autoPlay muted playsInline={true} unselectable={"on"} controls={false} loop>
						<source className={""} src={trailer} type="video/mp4" />
					</video>
				{/*</div>*/}
				
				<div className="absolute inset-0 bg-linear-to-b from-black to-transparent"></div>
				<div className="bg-black/70 backdrop-blur-lg h-full absolute inset-0 top-1/2"></div>
			</section>
		</>
	);
};
