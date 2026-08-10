import trailer from "../../assets/videos/crimson-trailer-video.mp4";
import latestNews from "../../shared/latestNews.ts";
import {Article} from "../Article.tsx";
import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";

export const News = () => {
	return (
		<>
			<section className="relative min-h-screen overflow-hidden">
				{/* Video Background */}
				<video
					className="absolute inset-0 w-full h-full object-cover"
					autoPlay
					muted
					playsInline
					loop
				>
					<source src={trailer} type="video/mp4"/>
				</video>
				{/* Gradient Overlay - Starts from middle (50%) of video */}
				<div className="absolute inset-0 bg-linear-to-t from-black via-black/60 at-50% to-transparent"/>
				
				
				{/* News Content - Positioned in the gradient area (bottom half) */}
				<div
					className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 py-20 pb-32 sm:px-8 md:px-16 lg:px-24 xl:px-64">
					{/* Section Header */}
					<div className="w-full max-w-5xl mb-16 text-center">
						<h2 className="font-long-cang font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/95 tracking-tight leading-[1.1]">
							What's New in the
							<br/>
							<span className="text-wuxia">Ronin World</span>
						</h2>
					</div>
					
					{/* News Grid */}
					<div className="relative w-full h-full">
						<div
							className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-scroll scrollbar-none">
							<div className="relative h-full w-[400%] flex">
								{latestNews.map((news) => (
									<Article key={news.id} {...news} />
								))}
							</div>
						</div>
						
						<button className={"absolute left-0 top-1/2 -translate-y-1/2 invert-30 hover:invert-0 z-10"}>
							<img draggable={false} className={""} src={left_arrow} alt="left arrow"/>
						</button>
						<button className={"absolute right-0 top-1/2 -translate-y-1/2 invert-30 hover:invert-0 z-10"}>
							<img draggable={false} className={""} src={right_arrow} alt="right arrow"/>
						</button>
					</div>
					
				</div>
			</section>
		</>
	);
};
