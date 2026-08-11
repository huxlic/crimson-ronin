import background_texture from "../../assets/images/background-texture.png";
import {WeaponDisplay} from "../WeaponDisplay.tsx";
import weapons from "../../shared/weapons.ts";
import {useState} from "react";

export const Weapons = () => {
	const [currentWeaponIndex, setCurrentWeaponIndex] = useState(0);
	
	return (
		<>
			<section style={{backgroundImage: `url(${background_texture})`}}
			         className={"relative h-screen bg-no-repeat bg-cover overflow-hidden"}>
				<WeaponDisplay ModelComponent={weapons[currentWeaponIndex].model}/>
				
				<div className="flex">
					{weapons.map((weapon, i) => (
						<button onClick={() => setCurrentWeaponIndex(i)} key={weapon.name}
						        className="relative w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
							{weapon.name}
						</button>
					))}
				</div>
			</section>
		</>
	);
};