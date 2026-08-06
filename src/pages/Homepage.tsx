import {Navbar} from "../components/Navbar.tsx";
import landscape from "../assets/images/landscape.jpg";
import buy_now from "../assets/images/buy-now.png";
import ronin_seal from "../assets/images/ronin-seal.png";
import {Link, useLocation} from "react-router";
import {Canvas} from "@react-three/fiber";
import Samurai from "../components/models/Samurai.tsx"
import {OrbitControls} from "@react-three/drei";

const Homepage = () => {
	const location = useLocation();
	return (
		<>
			<div className={"relative"}>
				<Navbar/>
				
				<section className={"relative h-screen overflow-hidden flex items-center justify-center box-border"}>
					<div className="absolute inset-0 bg-cover blur-[2px]"
					     style={{backgroundImage: `url(${landscape})`}}></div>
					<div className="bg-[#000000cc] absolute inset-0"></div>
					
					<div className="absolute inset-0">
						<Canvas id="canvas" camera={{
							position: [0, 2, 5], fov: 75
						}}>
							<ambientLight intensity={0.6}/>
							<directionalLight position={[3, 5, 2]} intensity={1.5}/>
							<Samurai position={[0, -11, 0]} scale={0.08}/>
							<OrbitControls key={location.pathname} autoRotate={true} enableRotate={false}
							               enableZoom={false}
							               minPolarAngle={Math.PI / 2}
							               maxPolarAngle={Math.PI / 2}/>
						</Canvas>
					</div>
					
					<div
						className="relative w-full h-full flex flex-col items-center justify-between py-20 px-8 md:px-16 box-border">
						<div className="w-full relative flex justify-between">
							<img src={ronin_seal} className={"z-0 w-30 md:w-40 lg:w-50 animate-pulse"}
							     alt="a seal showing crimson ronin written in japanese"/>
							<h1
								className={"z-10 font-long-cang font-black leading-10 lg:leading-15 text-4xl md:text-6xl lg:text-8xl text-wuxia/80 break-all select-none"}>CRIMSON<br/>
								RONIN
							</h1>
						</div>
						
						<div className="flex flex-col items-center gap-4">
							<p className={"font-marcellus text-[#ffffff99] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl mx-auto leading-relaxed"}>Wander
								far enough, and the past
								finds you first.
							</p>
							
							<Link className={""} to={"https://store.steampowered.com/"} target={"_blank"}>
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
