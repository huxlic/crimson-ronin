import {Html} from "@react-three/drei";
import {GlassCube} from "./components/GlassCube.tsx";

export const Loader = () => {
	return (
		<>
			<Html center>
				<GlassCube/>
			</Html>
		</>
	);
};