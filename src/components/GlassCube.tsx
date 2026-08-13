export const GlassCube = () => {
	return (
		<>
			<div className="perspective-600px">
				<div className="relative w-12 h-12 transform-3d animate-spin-cube">
					<div className="face transform-[translateZ(24px)]" />
					<div className="face transform-[rotateY(180deg)_translateZ(24px)]" />
					<div className="face transform-[rotateY(90deg)_translateZ(24px)]" />
					<div className="face transform-[rotateY(-90deg)_translateZ(24px)]" />
					<div className="face transform-[rotateX(90deg)_translateZ(24px)]" />
					<div className="face transform-[rotateX(-90deg)_translateZ(24px)]" />
				</div>
			</div>
		</>
	);
};