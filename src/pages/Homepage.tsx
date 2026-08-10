import {Navbar} from "../components/Navbar.tsx";
import {Hero} from "../components/sections/Hero.tsx";
import {News} from "../components/sections/News.tsx";

const Homepage = () => {
	return (
		<>
			<div className={"relative"}>
				<Navbar/>
				<Hero/>
				<News/>
			</div>
		</>
	)
}
export default Homepage;