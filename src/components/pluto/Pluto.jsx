import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import plutoDiffuse from '../../assets/textures/pluto/pluto.jpeg';
import plutoNormal from '../../assets/textures/pluto/pluto_normal.png';

const Pluto = () => {
	const [diffuseMap, normalMap] = useLoader(TextureLoader, [
		plutoDiffuse,
		plutoNormal,
	]);

	const plutoRef = useRef();

	useFrame(() => {
		plutoRef.current.rotation.y += 0.001;
	});

	return (
		<>
			<mesh ref={plutoRef} position={[-0.5, 0, 0.5]}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhongMaterial color='red' />
				<meshStandardMaterial map={diffuseMap} normalMap={normalMap} />
			</mesh>
		</>
	);
};

export default Pluto;
