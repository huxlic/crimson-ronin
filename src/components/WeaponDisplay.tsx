import {Environment, OrbitControls, useProgress} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense, useRef} from "react";
import gsap from "gsap";
import * as THREE from "three";
import {useGSAP} from "@gsap/react";
import type {WeaponDisplayProps} from "../types";
import underline from "../assets/icons/underline.png";
import {useMediaQuery} from "react-responsive";
import {Loader} from "../Loader.tsx";

export const WeaponDisplay = ({
	                              ModelComponent,
	                              scale,
	                              position,
	                              rotation,
	                              alt_pos = [0, 0, 0],
	                              name,
	                              description
                              }: WeaponDisplayProps) => {
	const groupRef = useRef<THREE.Group | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	const finalPosition: [number, number, number] = [1.5, 0, -1];
	
	const isMobile = useMediaQuery({query: '(max-width: 768px)'});
	
	const {progress} = useProgress();
	
	useGSAP(() => {
		if (!groupRef.current) return;
		if (!contentRef.current) return;
		
		gsap.fromTo(
			groupRef.current.position,
			{x: finalPosition[0] + 4},
			{
				x: finalPosition[0],
				duration: 1,
				ease: "power3.out",
			}
		);
		
		gsap.fromTo(
			contentRef.current,
			{x: -400, opacity: 0},
			{
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out",
			}
		);
	}, [ModelComponent]);
	
	return (
		<>
			<div className="absolute inset-0">
				<div ref={contentRef}
				     className="absolute h-max left-0 right-0 top-0 pt-20 sm:pt-24 md:top-1/3 md:right-1/2 md:pt-0 flex flex-col gap-3 sm:gap-4 justify-start px-6 sm:px-8 md:px-16 bg-linear-to-b from-black/70 via-black/30 to-transparent md:bg-none">
					<h3
						className="w-max max-w-full relative text-center font-long-cang text-wuxia text-3xl sm:text-4xl md:text-5xl font-black uppercase">
						{name}
						<img draggable={false} src={underline} alt="underline"
						     className="w-1/2 h-0.5 justify-self-center"/>
					</h3>
					<p className="text-white font-marcellus text-sm sm:text-base max-w-prose">{description}</p>
				</div>
				
				<Canvas camera={{position: [0, 0, 5], fov: 45, near: 0.1, far: 10000}}>
					<Suspense fallback={<Loader/>}>
						
						<ambientLight intensity={0.25}/>
						<directionalLight position={[3, 5, 2]} intensity={1.8}/>
						
						<group ref={groupRef} position={finalPosition}>
							<ModelComponent scale={isMobile ? scale! / 2 : scale}
							                position={isMobile ? alt_pos : position} rotation={rotation}/>
						</group>
						
						{progress.toFixed(0) === "100" && <Environment preset="sunset"/>}
						<OrbitControls
							target={finalPosition}
							enableZoom={false}
							enablePan={false}
							autoRotateSpeed={2}
						/>
					</Suspense>
				</Canvas>
			
			</div>
		</>
	);
};