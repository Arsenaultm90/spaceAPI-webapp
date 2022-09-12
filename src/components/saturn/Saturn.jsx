import { useFrame, useLoader } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react';
import { TextureLoader } from 'three';
import saturnDiffuse from '../../assets/textures/saturn/saturn.jpeg';
import ringDiffuse from '../../assets/textures/saturn/saturn_ring.png';

const Saturn = () => {
	const [diffuseMap] = useLoader(TextureLoader, [saturnDiffuse]);
	const [ringDiffuseMap] = useLoader(TextureLoader, [ringDiffuse]);

	const saturnRef = useRef();
	const ringRef = useRef();

	useFrame(() => {
		saturnRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={saturnRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} />
			</mesh>
		</>
	);
};

export default Saturn;
