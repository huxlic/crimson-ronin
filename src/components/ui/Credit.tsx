export const Credit = ({
	                       assetTitle,
	                       assetUrl,
	                       author
                       }: {
	assetTitle: string;
	assetUrl: string;
	author: string;
}) => {
	return (
		<div className={"w-full flex items-center justify-center px-4 py-1 sm:py-2 bg-black/50 backdrop-blur-sm"}>
			<p className="text-[#9E968D] text-[10px] sm:text-[12px] text-center ">
				<a href={assetUrl} className={"font-semibold underline hover:no-underline"} target="_blank">"{assetTitle}"</a> by {author} is licensed under
				<a href="http://creativecommons.org/licenses/by/4.0/" className={"font-semibold underline hover:no-underline"} target="_blank"> Creative Commons Attribution</a>.
			</p>
		
		</div>
	);
};