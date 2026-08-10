import type {NewsItem} from "../types";
import posterA from "../assets/images/poster_ninja.png";
import posterB from "../assets/images/poster_beauty.png";
import posterC from "../assets/images/poster_tour.png";
import posterD from "../assets/images/poster_brutal.png";

const latestNews: NewsItem[] = [
	{
		id: 1,
		title: "Crimson Ronin Launches on Steam Early Access",
		date: "August 2026",
		excerpt: "Experience the brutal beauty of feudal Japan in our action-packed roguelike. Master the blade, embrace death, and forge your legend.",
		link: "https://store.steampowered.com/",
		image: posterA
	},
	{
		id: 2,
		title: "Major Content Update: The Shogun's Castle",
		date: "July 2026",
		excerpt: "Explore the newly added Shogun's Castle biome with 15 new enemy types, 3 boss encounters, and exclusive legendary weapons.",
		link: "#",
		image: posterB
	},
	{
		id: 3,
		title: "Community Tournament Announced",
		date: "June 2026",
		excerpt: "Join our first official Crimson Ronin speedrun tournament. $10,000 prize pool. Registration opens next week.",
		link: "#",
		image: posterC
	},
	{
		id: 4,
		title: "Seasonal Festival: Obon Celebration",
		date: "May 2026",
		excerpt: "Honor the spirits with the limited-time Obon Festival event. New cosmetic rewards, ancestral challenges, and lantern-lit maps await.",
		link: "#",
		image: posterD
	}
];

export default latestNews;