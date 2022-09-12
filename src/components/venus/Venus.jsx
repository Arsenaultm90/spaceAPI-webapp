import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import venusDiffuse from '../../assets/textures/venus/venus.jpeg';

const Venus = () => {
	const [diffuseMap] = useLoader(TextureLoader, [venusDiffuse]);

	const venusRef = useRef();

	useFrame(() => {
		venusRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={venusRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} />
			</mesh>
		</>
	);
};

export default Venus;
