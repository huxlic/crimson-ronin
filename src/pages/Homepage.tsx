import {Navbar} from "../components/Navbar.tsx";
import landscape from "../assets/images/landscape.jpg";
import samurai_warrior from "../assets/videos/samurai-warrior.webm"

const Homepage = () => {
	return (
		<>
			<div className={"relative"}>
				<Navbar/>
				
				<section className={"relative h-screen overflow-hidden"} >
					<div className="absolute inset-0 bg-cover blur-[2px]" style={{backgroundImage: `url(${landscape})`}}></div>
					<video autoPlay={true} muted={true} loop={true} playsInline={true} className={"absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%]"}>
						<source src={samurai_warrior} />
					</video>
				</section>
			</div>
		</>
	)
}
export default Homepage
