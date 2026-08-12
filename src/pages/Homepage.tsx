import {Navbar} from "../components/Navbar.tsx";
import {Hero} from "../components/sections/Hero.tsx";
import {News} from "../components/sections/News.tsx";
import {Weapons} from "../components/sections/Weapons.tsx";

const Homepage = () => {
	return (
		<>
			<div className={"relative"}>
				<Navbar/>
				<Hero/>
				<News/>
				<Weapons/>
			</div>
		</>
	)
}
export default Homepage;