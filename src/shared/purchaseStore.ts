import playstation from "../assets/logos/playstation.png";
import xbox from "../assets/logos/xbox.png";
import steam from "../assets/logos/steam.png";
import epic from "../assets/logos/epic.png";
import type {PurchaseStore} from "../types";

const purchaseStore: PurchaseStore[] = [
	{link: "https://store.playstation.com/", image: playstation, alt: "PS5"},
	{link: "https://www.xbox.com/games/store/", image: xbox, alt: "XBOX"},
	{link: "https://store.steampowered.com/", image: steam, alt: "STEAM"},
	{link: "https://store.epicgames.com/p/crimson-desert-6d6135", image: epic, alt: "EPIC GAMES"},
]

export default purchaseStore;