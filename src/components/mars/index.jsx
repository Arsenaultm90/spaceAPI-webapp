import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { TextureLoader } from 'three';
import MarsDiffuse from '../../assets/textures/mars/mars_4k_color.jpeg';
import MarsNormal from '../../assets/textures/mars/mars_4k_normal.jpeg';

const Mars = () => {
	const [diffuseMap, normalMap] = useLoader(TextureLoader, [
		MarsDiffuse,
		MarsNormal,
	]);

	const marsRef = useRef();

	useFrame(() => {
		marsRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={marsRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} normalMap={normalMap} />
			</mesh>
		</>
	);
};

export default Mars;
