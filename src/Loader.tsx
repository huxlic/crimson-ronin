import {Html} from "@react-three/drei";
import {GlassCube} from "./components/GlassCube.tsx";

export const Loader = () => {
	return (
		<>
			<Html center className={"flex flex-col items-center gap-2"}>
				<GlassCube/>
			</Html>
		</>
	);
};