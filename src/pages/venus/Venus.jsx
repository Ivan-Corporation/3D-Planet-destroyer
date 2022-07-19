import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import VenusMap from "../../assets/textures/planets/8k_venus_surface.jpg";
import VenusAtmosphere from "../../assets/textures/planets/8k_venus_atmosphere.jpg";

import { TextureLoader } from "three";

export function Venus(props) {
  const [colorMap, atmosphereMap] = useLoader(
    TextureLoader,
    [VenusMap, VenusAtmosphere]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 2;

  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[4, 0, 5]} intensity={1.1} />
      <Stars
        radius={300}
        depth={60}
        count={15000}
        factor={9}
        saturation={0}
        fade={true}
      />

<mesh ref={cloudsRef} position={[0, 0, 0]} scale='0.9'>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={atmosphereMap}
          opacity={0.85}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 0]} scale='0.9'>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial />
        <meshStandardMaterial
          map={colorMap}
          metalness={0.2}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          minDistance = {1.5}
				  maxDistance = {5}
        />
      </mesh>
    </>
  );
}
