import latestNews from "../shared/latestNews.ts";
import {Article} from "./Article.tsx";
import clsx from "clsx";
import left_arrow from "../assets/icons/left-arrow.png";
import right_arrow from "../assets/icons/right-arrow.png";
import {useCallback, useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const autoPlayInterval = 5000;

export const Carousel = () => {
	const [active, setActive] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
	
	const goToSlide = useCallback((index: number) => {
		const clamped = (index + latestNews.length) % latestNews.length
		setActive(clamped);
	}, [])
	
	const nextSlide = useCallback(() => goToSlide(active + 1), [active, goToSlide]);
	const prevSlide = useCallback(() => goToSlide(active - 1), [active, goToSlide]);
	
	const resetTimer = useCallback(() => {
		if (timerRef.current) clearInterval(timerRef.current)
		if (!autoPlayInterval) return;
		timerRef.current = setInterval(() => {
			setActive((prev) => (prev + 1) % latestNews.length)
		}, autoPlayInterval);
	}, []);
	
	const handleManualNav = (fn: () => void) => {
		fn()
		resetTimer()
	};
	
	useGSAP(() => {
		if (!trackRef.current) return;
		gsap.to(trackRef.current, {
			xPercent: -(100 / latestNews.length) * active,
			duration: 0.8,
			ease: 'power3.inOut',
		})
	}, [active])
	
	useEffect(() => {
		timerRef.current = setInterval(() => {
			setActive((prev) => (prev + 1) % latestNews.length)
		}, autoPlayInterval)
		
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		}
	}, []);
	
	return (
		<>
			<div className="relative w-full h-full ">
				<div
					className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden scrollbar-none shadow-wuxia-red/20 shadow-[0_-4px_20px_8px_rgba(0,0,0,0.1)] rounded-sm">
					<div ref={trackRef} className="relative h-full w-[500%] flex">
						{latestNews.map((news) => (
							<Article key={news.id} {...news} />
						))}
					</div>
				</div>
				<div className="flex gap-1 mt-2 justify-self-center">
					{latestNews.map((_, i) => (
						<button
							key={i}
							onClick={() => handleManualNav(() => goToSlide(i))}
							className={clsx("h-[1.5px] transition-all cursor-pointer", i === active ? "bg-white w-8" : "bg-white/40 w-7")}
							aria-label={`Go to slide ${i + 1}`}
						/>
					))}
				</div>
				
				<button
					onClick={() => handleManualNav(prevSlide)}
					className={"w-8 sm:w-10 md:w-12 lg:w-15 absolute left-4 top-1/2 -translate-y-1/2 invert-30 hover:invert-0 z-10"}>
					<img draggable={false} className={""} src={left_arrow} alt="left arrow"/>
				</button>
				<button
					onClick={() => handleManualNav(nextSlide)}
					className={"w-8 sm:w-10 md:w-12 lg:w-15 absolute right-4 top-1/2 -translate-y-1/2 invert-30 hover:invert-0 z-10"}>
					<img draggable={false} className={""} src={right_arrow} alt="right arrow"/>
				</button>
			</div>
		</>
	);
};