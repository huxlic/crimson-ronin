import {Navbar} from "../components/Navbar.tsx";
import landscape from "../assets/images/landscape.jpg";
import buy_now from "../assets/images/buy-now.png";
import ronin_seal from "../assets/images/ronin-seal.png";
import {Link} from "react-router";
import {Canvas} from "@react-three/fiber";
import Samurai from "../components/models/Samurai.tsx"
import {Center, OrbitControls} from "@react-three/drei";
import {Suspense} from "react";

const Homepage = () => {
	return (
		<>
			<div className={"relative"}>
				<Navbar/>
				
				<section className={"relative h-screen overflow-hidden flex items-center justify-center box-border"}>
					<div className="absolute inset-0 bg-cover blur-[2px]"
					     style={{backgroundImage: `url(${landscape})`}}></div>
					<div className="bg-[#000000cc] absolute inset-0"></div>
					
					<div className="absolute inset-0">
						<Canvas id="canvas" camera={{position: [1, 2, 5], fov: 75, near: 1, far: 1000}}>
							<ambientLight intensity={0.6}/>
							<directionalLight position={[3, 5, 2]} intensity={1.5}/>
							<Suspense fallback={null}>
								<Center>
									<Samurai scale={0.08} position={[1, 8, 0]}/>
								</Center>
							</Suspense>
							<OrbitControls autoRotate={true} enableZoom={false} minPolarAngle={Math.PI / 2}
							               maxPolarAngle={Math.PI / 2}/>
						</Canvas>
					</div>
					
					<div className="relative w-full h-full flex flex-col items-center justify-between p-16 box-border">
						<div className="relative flex flex-col items-center">
							<img src={ronin_seal} className={"-rotate-90  z-0 w-50 animate-pulse"}
							     alt="a seal showing crimson ronin written in japanese"/>
							<h1
								className={"absolute w-max z-10 font-long-cang font-black text-8xl text-wuxia mask-b-from-50%"}>CRIMSON
								RONIN
							</h1>
						</div>
						
						<div className="flex flex-col items-center gap-4">
							<p className={"font-marcellus text-[#ffffff99] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl mx-auto leading-relaxed"}>Wander
								far enough, and the past
								finds you first.
							</p>
							
							<Link className={""} to={"/"}>
								<img draggable={false} src={buy_now}
								     className={"w-20 sm:w-28 md:w-36 lg:w-40 xl:w-50 hover:scale-105 transition-transform duration-300"}
								     alt="a gold buy now cta"/>
							</Link>
						</div>
					
					</div>
				</section>
			
			</div>
		</>
	)
}
export default Homepage
