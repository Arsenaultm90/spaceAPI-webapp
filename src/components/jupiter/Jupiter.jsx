import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import jupiterDiffuse from '../../assets/textures/jupiter/jupiter.jpeg';

const Jupiter = () => {
	const [diffuseMap] = useLoader(TextureLoader, [jupiterDiffuse]);

	const earthRef = useRef();

	useFrame(() => {
		earthRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={earthRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} />
			</mesh>
		</>
	);
};

export default Jupiter;
