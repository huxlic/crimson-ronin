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
		name: "Ancient Chinese decorative glaive",
		model: AncientChineseDecorativeGlaive
	},
	{
		name: "Ancient Chinese sword",
		model: AncientChineseSword
	},
	{
		name: "Chinese Hand fan",
		model: ChineseHandFan
	},
	{
		name: "Chinese sword of Qing Dynasty",
		model: ChineseSwordDaoOfQingDynasty
	},
	{
		name: "Chinese sword of Han Dynasty",
		model: ChineseSwordHanJian
	},
	{
		name: "Jian styled sword",
		model: JianStyledSword
	},
	{
		name: "Old The Wagasa Japanese umbrella",
		model: OldTheWagasaJapaneseUmbrella
	},
	
]

export default weapons;