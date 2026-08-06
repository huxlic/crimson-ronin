import {Navbar} from "../components/Navbar.tsx";
import landscape from "../assets/images/landscape.jpg";
import buy_now from "../assets/images/buy-now.png";
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
				
				<section className={"relative h-screen overflow-hidden flex items-center justify-center"}>
					<div className="absolute inset-0 bg-cover blur-[2px]"
					     style={{backgroundImage: `url(${landscape})`}}></div>
					<div className="bg-[#000000cc] absolute inset-0"></div>
					
					<div className="absolute inset-0">
						<Canvas id="canvas" camera={{position: [0, 2, 5], fov: 75, near: 1, far: 1000}}>
							<ambientLight intensity={0.6}/>
							<directionalLight position={[3, 5, 2]} intensity={1.5}/>
							<Suspense fallback={null}>
								<Center>
									<Samurai scale={0.08} position={[0, 8, 0]}/>
								</Center>
							</Suspense>
							<OrbitControls autoRotate={true} enableZoom={false} minPolarAngle={Math.PI / 2}
							               maxPolarAngle={Math.PI / 2}/>
						</Canvas>
					</div>
					
					<Link className={"absolute bottom-0"} to={"/"}>
						<img draggable={false} src={buy_now} className={"w-50"} alt="a gold buy now cta"/>
					</Link>
				</section>
			
			</div>
		</>
	)
}
export default Homepage
