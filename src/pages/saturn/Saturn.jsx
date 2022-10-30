import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import SaturnMap from "../../assets/textures/planets/8k_saturn.webp";
import SaturnRing from "../../assets/textures/planets/8k_saturn_ring_alpha.webp";

import { TextureLoader } from "three";

export function Saturn(props) {
	const [colorMap, atmosphereMap] = useLoader(
		TextureLoader,
		[SaturnMap, SaturnRing]
	);

	const earthRef = useRef();
	const cloudsRef = useRef();

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();

		earthRef.current.rotation.y = elapsedTime / 9;
		cloudsRef.current.rotation.z = elapsedTime / 9;

	});

	return (
		<>
			{/* <ambientLight intensity={1} /> */}
			<pointLight color="#f6f3ea" position={[4, 0, 5]} intensity={0.7} />
			<Stars
				radius={300}
				depth={60}
				count={15000}
				factor={9}
				saturation={0}
				fade={true}
			/>

			<mesh ref={cloudsRef} rotation={[2, 0.3, 1]} castShadow position={[0, 0, 0]} scale='2.3'>
				<torusGeometry args={[1.5, 0.3, 8, 50]} />
				<meshPhongMaterial
					map={atmosphereMap}
					opacity={0.9}
					transparent={true}
					side={THREE.DoubleSide}
				/>

			</mesh>
			<mesh ref={earthRef} position={[0, 0, 0]} scale='2.1'>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial />
				<meshStandardMaterial
					map={colorMap}
					metalness={0.1}
					roughness={0.4}

				/>
				<OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.4}
					minDistance={3.5}
					maxDistance={10}
				/>
			</mesh>
		</>
	);
}
