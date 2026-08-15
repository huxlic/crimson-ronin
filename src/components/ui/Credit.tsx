export const Credit = ({
	                       assetTitle,
	                       assetUrl,
	                       author,
	                       licenceName = "Creative Commons Attribution",
	                       licenceUrl = "http://creativecommons.org/licenses/by/4.0/"
                       }: {
	assetTitle: string;
	assetUrl: string;
	author: string;
	licenceName: string;
	licenceUrl: string;
}) => {
	return (
		<div
			className={"w-full flex items-center justify-center px-4 py-1 sm:py-2 bg-black/50 backdrop-blur-sm select-none"}>
			<p className="text-[#9E968D] text-[10px] sm:text-[12px] text-center ">
				<a href={assetUrl} className={"font-semibold underline hover:no-underline"}
				   target="_blank">"{assetTitle}"</a> by {author} is licensed under
				<a href={licenceUrl}
				   className={"font-semibold underline hover:no-underline"} target="_blank"> {licenceName}</a>.
			</p>
		
		</div>
	);
};