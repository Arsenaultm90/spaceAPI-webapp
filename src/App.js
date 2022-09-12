//=========================================================================================================
// Planet Info Website
// This website serves mainly as a project to garner better skills in Authentication, React,
//	Firebase, and ThreeJS
//
// Framework/Libraries:
// React, ThreeJS, React Fiber 3,  NetlifyCLI, Firebase
//=========================================================================================================

import { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Mars from './components/mars/index';
import Earth from './components/earth/index';
import Jupiter from './components/jupiter/Jupiter';
import InfoPanel from './components/InfoPanel';
import { fetchData } from './api/fetchData';
import Mercury from './components/mercury/Mercury';
import Neptune from './components/neptune/Neptune';
import Saturn from './components/saturn/Saturn';
import Uranus from './components/uranus/Uranus';
import Venus from './components/venus/Venus';
import { AuthProvider } from './components/context/authContext';
import Pluto from './components/pluto/Pluto';
import { rgba } from '@react-spring/shared';

function App() {
	const [planet, setPlanet] = useState('earth');
	const [planetData, setPlanetData] = useState(null);

	const caller = async () => {
		setPlanetData(await fetchData(planet));
	};

	useEffect(() => {
		caller();
		planetData && console.log(planetData);
	}, [planet]);

	return (
		<div className='App' style={{ width: '100%', height: '100%' }}>
			<AuthProvider>
				<Canvas
					camera={{ position: [2, 0, 1], fov: 60, near: 1, far: 1000 }}
					style={{ display: 'block', height: '100vh', background: 'black' }}
				>
					<Stars />
					<ambientLight intensity={0.3} />
					<spotLight position={[10, 15, 15]} angle={0.5} intensity={0.8} />
					{planet === 'mars' ? (
						<Mars />
					) : planet === 'earth' ? (
						<Earth />
					) : planet === 'jupiter' ? (
						<Jupiter />
					) : planet === 'mercury' ? (
						<Mercury />
					) : planet === 'neptune' ? (
						<Neptune />
					) : planet === 'saturn' ? (
						<Saturn />
					) : planet === 'uranus' ? (
						<Uranus />
					) : planet === 'venus' ? (
						<Venus />
					) : planet === 'pluto' ? (
						<Pluto />
					) : (
						<Earth />
					)}
				</Canvas>
				<InfoPanel planetData={planetData} setPlanet={setPlanet} />
			</AuthProvider>
		</div>
	);
}

export default App;
