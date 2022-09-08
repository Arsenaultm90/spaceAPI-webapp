import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Mars from './components/mars/index';

function App() {
	return (
		<div className='App' style={{ width: '100%', height: '100%' }}>
			<Canvas
				style={{ display: 'block', height: '100vh', background: 'black' }}
			>
				<Stars />
				<ambientLight intensity={0.3} />
				<spotLight position={[10, 15, 10]} angle={0.3} intensity={0.8} />
				<Mars />
			</Canvas>
		</div>
	);
}

export default App;
