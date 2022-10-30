import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import PlutonMap from "../../assets/textures/planets/plutomap2k.webp";

import { TextureLoader } from "three";

export function Pluton(props) {
	const [colorMap] = useLoader(
		TextureLoader,
		[PlutonMap]
	);

	const earthRef = useRef();

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();

		earthRef.current.rotation.y = elapsedTime / 4;
	});

	return (
		<>
			{/* <ambientLight intensity={1} /> */}
			<pointLight color="#f6f3ea" position={[4, 0, 5]} intensity={0.14} />
			<Stars
				radius={300}
				depth={60}
				count={35000}
				factor={9}
				saturation={0}
				fade={true}
			/>

			<mesh ref={earthRef} position={[0, 0, 0]} scale='0.2'>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial
					map={colorMap}
					metalness={0.2}
					roughness={0.5}
				/>
				<OrbitControls
					enableZoom={true}
					enablePan={false}
					enableRotate={true}
					zoomSpeed={0.6}
					rotateSpeed={0.4}
					minDistance={1}
					maxDistance={5}
				/>
			</mesh>
		</>
	);
}
