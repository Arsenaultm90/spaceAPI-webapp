import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Mars from './components/mars/index';
import Earth from './components/earth/index';
import InfoPanel from './components/InfoPanel';
import { fetchData } from './api/fetchData';

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
			<Canvas
				camera={{ position: [2, 0, 1], fov: 60, near: 1, far: 1000 }}
				style={{ display: 'block', height: '100vh', background: 'black' }}
			>
				<Stars />
				<ambientLight intensity={0.3} />
				<spotLight position={[10, 15, 10]} angle={0.3} intensity={0.8} />
				{planet === 'mars' ? (
					<Mars />
				) : planet === 'earth' ? (
					<Earth />
				) : (
					<Earth />
				)}
			</Canvas>
			<InfoPanel planetData={planetData} setPlanet={setPlanet} />
		</div>
	);
}

export default App;
