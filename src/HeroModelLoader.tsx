import {Html, useProgress} from "@react-three/drei";

export const HeroModelLoader = () => {
	const {progress} = useProgress();
	return (
		<>
			<Html center>
				<div className="text-white text-sm">{progress.toFixed(0)}% loaded</div>
			</Html>
		</>
	);
};