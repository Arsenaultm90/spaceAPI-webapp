import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import uranusDiffuse from '../../assets/textures/uranus/uranus.jpeg';

const Uranus = () => {
	const [diffuseMap] = useLoader(TextureLoader, [uranusDiffuse]);

	const uranusRef = useRef();

	useFrame(() => {
		uranusRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={uranusRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} />
			</mesh>
		</>
	);
};

export default Uranus;
