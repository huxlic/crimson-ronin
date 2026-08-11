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
		description: "Forged for a general who never returned from the northern passes. Its curved blade has outlived every hand that held it.",
		model: AncientChineseDecorativeGlaive,
		scale: 0.25,
		position: [2, 0, 0],
		rotation: [5, -6, 1]
	},
	{
		name: "Whispering Edge",
		description: "An ancestral blade said to hum before bloodshed. Monks once buried it to silence the sound.",
		model: AncientChineseSword,
		scale: 8,
		position: [3, 1, 0],
		rotation: [10, -6, 3]
	},
	{
		name: "Fan of the Wandering Court",
		description: "Carried by a courtesan-spy who traded secrets for silk. Its folds still smell faintly of jasmine and smoke.",
		model: ChineseHandFan,
		scale: 0.7,
		position: [3, -1, 0],
		rotation: [-1.5, 1, 3]
	},
	{
		name: "Dao of the Fallen Throne",
		description: "A Qing-era blade taken from a dynasty's last armory. Its edge has tasted the fall of an empire.",
		model: ChineseSwordDaoOfQingDynasty,
		scale: 0.005,
		position: [2, 0, 0],
		rotation: [-1.5, 1, 3]
	},
	{
		name: "Han Reliquary Blade",
		description: "Older than the roads it once defended. Scholars argue whether it was a weapon of war or of ceremony — the scars suggest both.",
		model: ChineseSwordHanJian,
		scale: 0.03,
		position: [2, 0, 0],
		rotation: [-1.5, 1, Math.PI / 4]
	},
	{
		name: "Jian of Quiet Ruin",
		description: "A duelist's sword, balanced for a single decisive strike. Its owner was known to draw it only once per fight.",
		model: JianStyledSword,
		scale: 0.6,
		position: [2, 0, 0],
		rotation: [-2.5, 0, 2]
	},
	{
		name: "Wagasa of the Last Rain",
		description: "An umbrella carried through a storm that never truly ended. Some say the wanderer still walks beneath it.",
		model: OldTheWagasaJapaneseUmbrella,
		scale: 1.4,
		position: [-1, -2, 0],
		rotation: [0, 0, 0]
	},
]

export default weapons;