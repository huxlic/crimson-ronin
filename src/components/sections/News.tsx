import trailer from "../../assets/videos/crimson-trailer-video.mp4";
import {Carousel} from "../ui/Carousel.tsx";

export const News = () => {
	
	return (
		<>
			<section className="relative overflow-hidden">
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
				<div className="absolute inset-0 bg-linear-to-t from-black via-black/70 at-50% to-transparent"/>
				
				
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
					<Carousel/>
				</div>
			</section>
		</>
	);
};
