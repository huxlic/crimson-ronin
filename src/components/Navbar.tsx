import logo from "../assets/icons/crimson-ronin-logo.png"
import samurai from "../assets/icons/samurai.png"
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
					
					<ul className={"flex items-center font-marcellus gap-6"}>
						{navLinks.map(({href, title, icon: Icon}: NavLinks) => (
							<li key={title} className={"flex items-center text-[#ffffff99] hover:text-wuxia text-[13px] transition-colors duration-300 gap-1"} >
								<NavLink className={({isActive}) => isActive ? "text-wuxia" : ""} to={href}>{title}</NavLink>
								{Icon && <Icon size={18}/>}
							</li>
						))}
					</ul>
					
					<Link to={"/"}><img draggable={false} className={"w-8"} src={samurai} alt=""/></Link>
				</nav>
			</header>
		</>
	);
};