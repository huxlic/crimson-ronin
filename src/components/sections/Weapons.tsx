import background_texture from "../../assets/images/background-texture.png";
import weapons from "../../shared/weapons.ts";
import {WeaponDisplay} from "../WeaponDisplay.tsx";

export const Weapons = () => {
	return (
		<>
			<section style={{backgroundImage: `url(${background_texture})`}} className={"relative h-screen bg-no-repeat bg-cover overflow-hidden"}>
				{weapons.map((weapon) => (
					<div key={weapon.name} className={"w-screen h-full"}>
						<WeaponDisplay {...weapon} />
					</div>
				))}
			</section>
		</>
	);
};