import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import LavaMap from "../../assets/textures/lava.webp";
import { TextureLoader } from "three";

export function DestroyedEarth(props) {
	const [EarthLavaMap] = useLoader(
		TextureLoader,
		[LavaMap]
	);

	const earthRef = useRef();

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();

		earthRef.current.rotation.y = elapsedTime / 10;
	});

	return (
		<>
			{/* <ambientLight intensity={1} /> */}
			<pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2.9} />
			<Stars
				radius={300}
				depth={60}
				count={20000}
				factor={7}
				saturation={0}
				fade={true}
			/>

			<mesh ref={earthRef} position={[0, 0, 0]} scale='1'>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial />
				<meshStandardMaterial
					map={EarthLavaMap}
					metalness={0.1}
					roughness={0.7}
				/>
				<OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.4}
					minDistance={1.5}
					maxDistance={5}
				/>
			</mesh>
		</>
	);
}
