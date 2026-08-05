import logo from "../assets/crimson-ronin-logo.png"
import samurai from "../assets/samurai.png"
import {Link, NavLink} from "react-router";
import {navLinks} from "../shared/navLinks.ts";
import type {NavLinks} from "../types";

export const Navbar = () => {
	return (
		<>
			<header className={"fixed top-0 w-full left-0 right-0 box-border px-8 bg-linear-to-t from-transparent to-[#0D0F11] z-50"}>
				<nav className={"flex items-center justify-between w-full py-4"}>
					<Link to="/"
					      className={"w-max h-max font-long-cang text-xl mask-b-from-50% text-wuxia flex items-center gap-1 uppercase font-bold"}>
						crimson
						<img draggable={false} className={"w-8"} src={logo}
						     alt="a logo displaying a crescent and a sword"/>
						ronin
					</Link>
					
					<ul className={"flex items-center gap-6"}>
						{navLinks.map(({href, title}: NavLinks) => (
							<li key={title} className={"text-[#ffffff99] text-[14px] hover:text-wuxia transition-colors duration-300"}>
								<NavLink to={href}>{title}</NavLink>
							</li>
						))}
					</ul>
					
					<img draggable={false} className={"w-8"} src={samurai} alt=""/>
				</nav>
			</header>
		</>
	);
};