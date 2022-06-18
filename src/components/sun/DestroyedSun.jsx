import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";


import LavaMap from "../../assets/textures/magma3.jpg";
import { TextureLoader } from "three";

export function DestroyedSun(props) {
  const [PlutonLavaMap] = useLoader(
    TextureLoader,
    [LavaMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 4;
  });

  return (
    <>
      <ambientLight intensity={2} />
      {/* <pointLight color="#f6f3ea" position={[2, 4, 5]} intensity={2.5} /> */}
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={earthRef} position={[0, 0, 0]} scale='3'>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial />
        <meshStandardMaterial
          map={PlutonLavaMap}
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
          minDistance = {4}
		      maxDistance = {6}
				  
        />
      </mesh>
    </>
  );
}
