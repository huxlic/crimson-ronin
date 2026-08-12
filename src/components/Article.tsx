import type {NewsItem} from "../types";
import noise from '../assets/images/noise.png';
import item_msg from '../assets/images/item-msg.png'

export const Article = ({id, title, date, excerpt, image, category}: NewsItem) => {
	return (
		<>
			<article
				key={id}
				className={`relative w-full h-full flex-1 bg-no-repeat bg-top bg-cover select-none`}
				style={{backgroundImage: `url(${image})`}}
			>
				<div className="absolute inset-0 bg-wuxia-red/30" style={{backgroundImage: `url(${noise})`}}></div>
				<div className="absolute inset-0 p-6 sm:p-8 z-10">
					<h3 className="mb-4 font-long-cang font-bold text-xl sm:text-5xl uppercase text-white/95 transition-colors duration-300">
						{title}
					</h3>
					
					<div className="w-full h-20 flex flex-col justify-between absolute left-0 right-0 bottom-0 z-10 bg-top font-marcellus box-border p-4" style={{backgroundImage: `url(${item_msg})`}}>
						<p className={"text-wuxia text-[10px] md:text-[11px] flex gap-2 font-semibold"}>
							<time
								className=""
								dateTime={date}
							>
								{date}
							</time>
							
							<span className={"uppercase"}>
								{category}
							</span>
						</p>
						
						<p className="text-white text-[16px] md:text-[18px] line-clamp-1">
							{excerpt}
						</p>
					</div>
				</div>
			</article>
		</>
	);
};