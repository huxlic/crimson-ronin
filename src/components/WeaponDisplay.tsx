import {Environment, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

export const WeaponDisplay = ({ModelComponent}) => {
	return (
		<>
			<div className="absolute inset-0">
				<Canvas camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 10000 }}>
					<ambientLight intensity={0.25} />
					<directionalLight position={[3, 5, 2]} intensity={1.8} />
					
					<ModelComponent position={[-1, 0, -1]} rotation={[0, 0, Math.PI / 4]} />
					
					<Environment preset="night" />
					<OrbitControls
						enableZoom={true}
						enablePan={false}
					/>
				</Canvas>
			</div>
		</>
	);
};