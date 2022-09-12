import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import neptuneDiffuse from '../../assets/textures/neptune/neptune.jpeg';

const Neptune = () => {
	const [diffuseMap] = useLoader(TextureLoader, [neptuneDiffuse]);

	const neptuneRef = useRef();

	useFrame(() => {
		neptuneRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={neptuneRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} />
			</mesh>
		</>
	);
};

export default Neptune;
