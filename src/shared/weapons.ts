import AncientChineseDecorativeGlaive from "../components/models/AncientChineseDecorativeGlaive.tsx";
import AncientChineseSword from "../components/models/AncientChineseSword.tsx";
import ChineseHandFan from "../components/models/ChineseHandFan.tsx";
import ChineseSwordDaoOfQingDynasty from "../components/models/ChineseSwordDaoOfQingDynasty.tsx";
import ChineseSwordHanJian from "../components/models/ChineseSwordHanJian.tsx";
import JianStyledSword from "../components/models/JianStyledSword.tsx";
import OldTheWagasaJapaneseUmbrella from "../components/models/OldTheWagasaJapaneseUmbrella.tsx";
import type {Weapon} from "../types";

const weapons: Weapon[] = [
	{
		name: "The Widow's Glaive",
		description: "A polearm built for sweeping arcs and long reach, its curved blade favors a mounted rider over a footman. Forged for a general who never returned from the northern passes.",
		model: AncientChineseDecorativeGlaive,
		scale: 0.25,
		position: [2, 0, 0],
		rotation: [5, -6, 1],
	},
	{
		name: "Whispering Edge",
		description: "A single-edged blade weighted for fast, decisive cuts rather than parrying. Said to hum before bloodshed — monks once buried it to silence the sound.",
		model: AncientChineseSword,
		scale: 8,
		position: [3, -0.1, 0],
		rotation: [10, -6, 3]
	},
	{
		name: "Fan of the Wandering Court",
		description: "A folding fan reinforced with hidden iron ribs, as suited to deflecting a blade as concealing a blush. Carried by a courtesan-spy who traded secrets for silk.",
		model: ChineseHandFan,
		scale: 0.7,
		position: [3, -1, 0],
		rotation: [-1.5, 1, 3],
		alt_pos: [0, -0.5, 0]
	},
	{
		name: "Dao of the Fallen Throne",
		description: "A broad, curved single-edged saber built for close-quarters slashing over precision thrusts. Taken from a Qing-era armory in the dynasty's final days.",
		model: ChineseSwordDaoOfQingDynasty,
		scale: 0.005,
		position: [2, 0, 0],
		rotation: [-1.5, 1, 3]
	},
	{
		name: "Han Reliquary Blade",
		description: "A straight, double-edged jian favoring thrusts and quick redirection over brute force. Older than the roads it once defended — scholars still argue whether it saw war or only ceremony.",
		model: ChineseSwordHanJian,
		scale: 0.03,
		position: [2, 0, 0],
		rotation: [-1.5, 1, Math.PI / 4]
	},
	{
		name: "Jian of Quiet Ruin",
		description: "A light, balanced dueling sword designed for speed and a single decisive strike. Its owner was known to draw it only once per fight — and never a second time.",
		model: JianStyledSword,
		scale: 0.6,
		position: [2, 0, 0],
		rotation: [-2.5, 0, 2]
	},
	{
		name: "Wagasa of the Last Rain",
		description: "An oiled-paper umbrella with a reinforced spine, sturdy enough to catch a blade or shield a strike. Carried through a storm that never truly ended.",
		model: OldTheWagasaJapaneseUmbrella,
		scale: 1.4,
		position: [-1, -2, 0],
		rotation: [0, 0, 0],
		alt_pos: [-2, -1, 0]
	},
]

export default weapons;