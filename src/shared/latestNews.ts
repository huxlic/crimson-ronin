import type {NewsItem} from "../types";
import characterRevealArt from "../assets/images/lu_kuan-wu.jpg";
import weaponShowcaseArt from "../assets/images/emma-nguyen.webp";
import battleSceneArt from "../assets/images/marilynmeme.webp";
import architectureLoreArt from "../assets/images/lihang-w-lake-final.jpg";
import mountainAtmosphereArt from "../assets/images/george.jpg";

const latestNews: NewsItem[] = [
	{
		id: 1,
		title: "Meet Hana: The Blade That Remembers",
		date: "August 2026",
		excerpt: "A wandering swordswoman haunted by a debt older than her own memory. Discover the character reveal for Crimson Ronin's newest playable warrior.",
		link: "#",
		image: characterRevealArt,
		category: "Announcement"
	},
	{
		id: 2,
		title: "Forged in Fire: The Weapons of Crimson Ronin",
		date: "August 2026",
		excerpt: "From cursed katanas to twin hook-swords soaked in old blood, take a closer look at the arsenal waiting to be claimed on your journey.",
		link: "#",
		image: weaponShowcaseArt,
		category: "Update"
	},
	{
		id: 3,
		title: "First Look: The Siege of Kurogawa",
		date: "August 2026",
		excerpt: "Steel meets steel as rival clans clash beneath a blood-red sky. Watch the first gameplay footage from one of the game's pivotal battles.",
		link: "#",
		image: battleSceneArt,
		category: "Media"
	},
	{
		id: 4,
		title: "Inside the Fractured Court of Aokage Castle",
		date: "August 2026",
		excerpt: "Explore the crumbling halls and forgotten shrines of a once-great stronghold, and uncover the secrets its silence still holds.",
		link: "#",
		image: architectureLoreArt,
		category: "Lore"
	},
	{
		id: 5,
		title: "A Journey Through the Mist: World Concept Reveal",
		date: "August 2026",
		excerpt: "Wander far enough, and the past finds you first. A first glimpse into the ink-wash mountains and quiet villages of Crimson Ronin's world.",
		link: "#",
		image: mountainAtmosphereArt,
		category: "Lore"
	},
]

export default latestNews;