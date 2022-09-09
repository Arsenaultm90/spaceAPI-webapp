import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { TextureLoader } from 'three';
import earthDiffuse from '../../assets/textures/earth/earth_diffuse.jpeg';
import earthNormal from '../../assets/textures/earth/earth_normal.jpeg';

const Earth = ({ setPlanetData }) => {
	useEffect(() => {}, []);

	const [diffuseMap, normalMap] = useLoader(TextureLoader, [
		earthDiffuse,
		earthNormal,
	]);

	const earthRef = useRef();

	useFrame(() => {
		earthRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={earthRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} normalMap={normalMap} />
			</mesh>
		</>
	);
};

export default Earth;
