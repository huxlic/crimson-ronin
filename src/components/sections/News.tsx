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
				{/* Additional subtle overlay for depth */}
				<div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/40"/>
				
				
				{/* News Content - Positioned in the gradient area (bottom half) */}
				<div
					className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 py-20 pb-32 sm:px-8 md:px-16 lg:px-24 xl:px-32">
					{/* Section Header */}
					<div className="w-full max-w-5xl mb-16 text-center">
						<h2 className="font-long-cang font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/95 tracking-tight leading-[1.1]">
							What's New in the
							<br/>
							<span className="text-wuxia">Ronin World</span>
						</h2>
						{/*<div*/}
						{/*	className="mt-6 w-24 h-px bg-linear-to-r from-transparent via-wuxia to-transparent mx-auto"/>*/}
					</div>
					
					{/* News Grid */}
					<div className="relative w-full h-[80vh] overflow-scroll scrollbar-none">
						{/* Buttons */}
						<button className={"absolute top-0 left-0"}>
							<img className={""} src={left_arrow} alt="left arrow"/>
						</button>
						<button className={"absolute top-0 right-0"}>
							<img className={""} src={right_arrow} alt="right arrow"/>
						</button>
						
						
						<div className="h-full w-[400%] flex">
						{latestNews.map((news) => (
							<Article {...news} />
						))}
						</div>
					</div>
     
				</div>
			</section>
		</>
	);
};