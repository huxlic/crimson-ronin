import background_texture from "../../assets/images/background-texture.png";
import {WeaponDisplay} from "../ui/WeaponDisplay.tsx";
import weapons from "../../shared/weapons.ts";
import {useState} from "react";
import button_texture from "../../assets/images/button-texture.png";
import clsx from "clsx";

export const Weapons = () => {
	const [currentWeaponIndex, setCurrentWeaponIndex] = useState(0);
	
	return (
		<>
			<section style={{backgroundImage: `url(${background_texture})`}}
			         className={"w-full relative h-dvh bg-no-repeat bg-cover overflow-hidden"}>
				<WeaponDisplay ModelComponent={weapons[currentWeaponIndex].model} {...weapons[currentWeaponIndex]} />
				
				<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 absolute bottom-0 w-full p-2">
					{weapons.map((weapon, i) => (
						<button onClick={() => setCurrentWeaponIndex(i)} key={weapon.name}
						        title={weapon.name}
						        style={{backgroundImage: `url(${button_texture})`}}
							        className={clsx("relative w-full text-[14px] lg:text-[16px] line-clamp-1 text-wuxia font-black p-1 border-2 bg-center bg-cover hover:invert-20 transition-all duration-100 cursor-pointer", i === currentWeaponIndex ? "shadow-[0_-4px_20px_-8px_#CD9C61] border-wuxia-red" : "border-wuxia-red/20 hover:border-wuxia/20")}>
							{weapon.name}
						</button>
					))}
				</div>
			</section>
		</>
	);
};