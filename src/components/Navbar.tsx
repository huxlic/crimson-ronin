import logo from "../assets/icons/crimson-ronin-logo.png"
import samurai from "../assets/icons/samurai.png"
import {Link, NavLink} from "react-router";
import {navLinks} from "../shared/navLinks.ts";
import type {NavLinks} from "../types";
import {useState} from "react";

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			<header
				className="fixed top-0 w-full left-0 right-0 box-border px-4 sm:px-6 md:px-8 lg:px-12 bg-linear-to-t from-transparent to-[#0D0F11] z-50">
				<nav className="flex items-center justify-between w-full py-3 sm:py-4">
					<Link to="/"
					      className="w-max h-max font-long-cang text-lg sm:text-xl md:text-2xl mask-b-from-50% text-wuxia flex items-center gap-1 sm:gap-2 uppercase font-bold shrink-0">
						crimson
						<img draggable={false} className="w-6 sm:w-8" src={logo}
						     alt="a logo displaying a crescent and a sword"/>
						ronin
					</Link>

					{/* Mobile menu button */}
					<button
						className="md:hidden flex items-center justify-center p-2 text-white hover:text-wuxia transition-colors"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMobileMenuOpen}
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							{isMobileMenuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
							)}
						</svg>
					</button>

					{/* Navigation links - desktop */}
					<ul className="hidden md:flex items-center font-marcellus gap-6 sm:gap-8">
						{navLinks.map(({href, title, icon: Icon}: NavLinks) => (
							<li key={title}
							    className="text-[#ffffff99] hover:text-wuxia text-[12px] sm:text-sm transition-colors duration-300 gap-1 whitespace-nowrap">
								<NavLink
									className={({isActive}) => isActive ? "text-wuxia flex items-center " : "flex items-center "}
									to={href}>{title} {Icon && <Icon size={18}/>}</NavLink>
							</li>))}
					</ul>

					{/* Samurai icon - desktop */}
					<Link to={"/"} className="hidden md:block">
						<img draggable={false} className="w-6 sm:w-8" src={samurai} alt=""/>
					</Link>

					{/* Mobile menu dropdown */}
					{isMobileMenuOpen && (
						<div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0F11] py-6 border-t border-white/10">
							<ul className="flex flex-col items-center gap-4 font-marcellus">
								{navLinks.map(({href, title, icon: Icon}: NavLinks) => (
									<li key={title} className="w-full text-center">
										<NavLink
											className={({isActive}) => `block py-2 px-4 text-lg transition-colors duration-300 ${isActive ? "text-wuxia" : "text-[#ffffff99] hover:text-wuxia"}`}
											to={href}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{title} {Icon && <Icon size={20}/>}
										</NavLink>
									</li>))}
							</ul>
							<div className="pt-4 border-t border-white/10 w-full px-4">
								<Link to={"/"} className="flex justify-center" onClick={() => setIsMobileMenuOpen(false)}>
									<img draggable={false} className="w-10" src={samurai} alt=""/>
								</Link>
							</div>
						</div>
					)}
				</nav>
			</header>
		</>);
};