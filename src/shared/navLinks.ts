import type {NavLinks} from "../types";
import News from "../pages/News.tsx";
import Media from "../pages/Media.tsx";
import Report from "../pages/Report.tsx";
import Homepage from "../pages/Homepage.tsx";
import {ArrowUpRight} from "lucide-react";

export const navLinks: NavLinks[]  = [
	{href: "/", title: "Homepage", element: Homepage},
	{href: "/news", title: "News", element: News},
	{href: "/media", title: "Media", element: Media},
	{href: "/report", title: "Report an issue", element: Report, icon: ArrowUpRight}
]