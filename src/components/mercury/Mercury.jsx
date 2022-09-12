import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import mercuryDiffuse from '../../assets/textures/mercury/mercury.jpeg';

const Mercury = () => {
	const [diffuseMap] = useLoader(TextureLoader, [mercuryDiffuse]);

	const mercuryRef = useRef();

	useFrame(() => {
		mercuryRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={mercuryRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} />
			</mesh>
		</>
	);
};

export default Mercury;
