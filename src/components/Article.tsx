import type {NewsItem} from "../types";

export const Article = ({id, title, date, excerpt, link, image}: NewsItem) => {
	return (
		<>
			<article
				key={id}
				className="w-full h-full group relative flex-1 bg-no-repeat bg-top bg-cover"
				style={{backgroundImage: `url(${image})`}}
			>
				<div className=""></div>
				<div className="p-6 sm:p-8">
					{/* Date Badge */}
					<time
						className="mb-4 inline-block px-3 py-1 text-xs font-marcellus uppercase tracking-wider text-wuxia/70 bg-wuxia/10 border border-wuxia/20 rounded-full"
						dateTime={date}
					>
						{date}
					</time>
					
					{/* Title */}
					<h3 className="mb-4 font-long-cang font-bold text-xl sm:text-2xl text-white/95 group-hover:text-wuxia transition-colors duration-300 leading-tight">
						{title}
					</h3>
					
					{/* Excerpt */}
					<p className="mb-6 text-sm sm:text-base text-white/60 leading-relaxed line-clamp-3">
						{excerpt}
					</p>
				</div>
			</article>
		</>
	);
};