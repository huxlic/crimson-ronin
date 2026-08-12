import landscape from "../../assets/images/landscape.jpg";
import {Canvas} from "@react-three/fiber";
import Samurai from "../models/Samurai.tsx";
import {OrbitControls} from "@react-three/drei";
import ronin_seal from "../../assets/images/ronin-seal.png";
import {Link} from "react-router";
import buy_btn from "../../assets/images/buy-btn.png";
import type {PurchaseStore} from "../../types";
import purchaseStore from "../../shared/purchaseStore.ts";
import {useMediaQuery} from "react-responsive";
import {Suspense} from "react";
import {HeroModelLoader} from "../../HeroModelLoader.tsx";
export const Hero = () => {
	const isMobile = useMediaQuery({query: '(max-width: 768px)'});
	
	return (
		<>
			<section className={"relative h-screen overflow-hidden flex items-center justify-center box-border"}>
				<div className="absolute inset-0 bg-cover blur-[2px]"
				     style={{backgroundImage: `url(${landscape})`}}></div>
				<div className="bg-[#000000cc] absolute inset-0"></div>
				
				<div className="absolute inset-0">
					<Canvas id="canvas" camera={{
						position: [0, 2, 5], fov: 75
					}}>
						
						<Suspense fallback={
							<HeroModelLoader/>
						}>
							<ambientLight intensity={0.6}/>
							<directionalLight position={[3, 5, 2]} intensity={1.5}/>
							<Samurai position={[0, -11, 0]} scale={isMobile ? 0.07 : 0.075}/>
							<OrbitControls autoRotate={true} enableRotate={true}
							               enableZoom={false}
							               minPolarAngle={Math.PI / 2}
							               maxPolarAngle={Math.PI / 2}/>
						</Suspense>
					</Canvas>
				</div>
				
				<div
					className="relative w-full h-full flex flex-col items-center justify-between py-20 pb-10 px-8 md:px-16 box-border">
					<div className="w-full relative flex justify-between">
						<img src={ronin_seal} className={"z-0 w-30 blur-[2px] md:w-40 lg:w-50 animate-ping"}
						     alt="a seal showing crimson ronin written in japanese"/>
						<h1
							className={"z-10 blur-[3px] text-end font-long-cang font-black text-4xl md:text-6xl lg:text-8xl text-wuxia/80 break-all select-none"}>CRIMSON<br/>
							RONIN
						</h1>
					</div>
					
					<div className="flex flex-col items-center gap-4">
						<p className={"font-marcellus text-[#ffffff99] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl mx-auto leading-relaxed"}>Wander
							far enough, and the past
							finds you first.
						</p>
						
						<Link className={"relative"} to={"https://store.steampowered.com/"} target={"_blank"}>
							<img draggable={false} src={buy_btn}
							     className={"w-28 md:w-36 lg:w-40 xl:w-50 hover:scale-105 transition-transform duration-300"}
							     alt="a gold buy now cta"/>
							<div
								className="absolute inset-0 flex items-center justify-center font-marcellus font-black text-white text-[12px] md:text-[14px] lg:text-[16px]">
								<span className={""}>Buy now</span>
							</div>
						</Link>
						
						<div className="w-full flex flex-wrap gap-4 justify-evenly items-center -mb-4">
							{purchaseStore.map(({link, image, alt}: PurchaseStore) => (
								<a key={alt} href={link}>
									<img className={"h-4 sm:h-5 invert-25 hover:invert-0 transition-all"} src={image}
									     alt={alt}/>
								</a>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};