import {Html} from "@react-three/drei";

export const WeaponLoader = ({progress}: {progress: number}) => {
	
	return (
		<>
			<Html center>
				<div className="text-white text-sm">{progress.toFixed(0)}% loaded</div>
			</Html>
		</>
	);
};