import {Environment, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {useRef} from "react";
import gsap from "gsap";
import * as THREE from "three";
import {useGSAP} from "@gsap/react";
import type {WeaponDisplayProps} from "../types";
import underline from "../assets/icons/underline.png";

export const WeaponDisplay = ({
	                              ModelComponent,
	                              scale,
	                              position,
	                              name,
	                              description
                              }: WeaponDisplayProps) => {
	
	const groupRef = useRef<THREE.Group>(null);
	const finalPosition: [number, number, number] = [-1, 0, -1];
	
	useGSAP(() => {
		if (!groupRef.current) return;
		
		gsap.fromTo(
			groupRef.current.position,
			{x: finalPosition[0] + 4},
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
						<ModelComponent scale={scale} position={position} rotation={[0, 0, Math.PI / 4]}/>
					</group>
					
					<Environment preset="night"/>
					<OrbitControls
						target={finalPosition}
						enableZoom={false}
						enablePan={false}
					/>
				</Canvas>
				
				<div className="absolute left-0 right-1/2 top-0 bottom-0 flex flex-col gap-4 justify-center px-8 md:px-16">
					<h3 className={"w-max relative font-long-cang text-wuxia text-4xl font-black uppercase"}>
						{name}
					<img draggable={false} src={underline} alt="underline" className="w-1/2 justify-self-center"/>
					</h3>
					<p className={"text-white font-marcellus"}>{description}</p>
				</div>
			</div>
		</>
	);
};