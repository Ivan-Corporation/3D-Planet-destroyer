import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import MarsMap from "../../assets/textures/planets/8k_mars.jpg";

import LavaMap from "../../assets/textures/lava.jpg";
import { TextureLoader } from "three";

export function DestroyedMars(props) {
  const [EarthLavaMap, normalMap] = useLoader(
    TextureLoader,
    [LavaMap, MarsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 9;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[2, 0, 0]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={earthRef} position={[0, 0, 0]} scale='0.7'>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial />
        <meshStandardMaterial
          map={EarthLavaMap}
          normalMap={normalMap}
          metalness={0}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
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
