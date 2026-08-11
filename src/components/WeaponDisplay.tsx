import {Environment, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {type ComponentType, useRef} from "react";
import gsap from "gsap";
import * as THREE from "three";
import {useGSAP} from "@gsap/react";

export const WeaponDisplay = ({ModelComponent}: {
	ModelComponent: ComponentType<{ position?: [number, number, number]; rotation?: [number, number, number] }>
}) => {
	
	const groupRef = useRef<THREE.Group>(null);
	const finalPosition: [number, number, number] = [-1, 0, -1];
	
	useGSAP(() => {
		if (!groupRef.current) return;
		
		gsap.fromTo(
			groupRef.current.position,
			{ x: finalPosition[0] + 4 },
			{
				x: finalPosition[0],
				duration: 1,
				ease: "power3.out",
			}
		);
	}, [ModelComponent]);
	
	return (
		<>
			<div className="absolute inset-0">
				<Canvas camera={{position: [0, 0, 5], fov: 45, near: 0.1, far: 10000}}>
					<ambientLight intensity={0.25}/>
					<directionalLight position={[3, 5, 2]} intensity={1.8}/>
					
					<group ref={groupRef} position={finalPosition}>
						<ModelComponent rotation={[0, 0, Math.PI / 4]}/>
					</group>
					
					<Environment preset="night"/>
					<OrbitControls
						target={finalPosition}
						enableZoom={false}
						enablePan={false}
					/>
				</Canvas>
			</div>
		</>
	);
};