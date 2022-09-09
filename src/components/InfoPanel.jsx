import React from 'react';
import './InfoPanel.css';
import MarsDesc from './mars/MarsDesc';

const InfoPanel = ({ planetData }) => {
	return (
		<>
			{planetData && (
				<div className='info-panel'>
					<h1 className='planet-title'>{planetData.name}</h1>
					<table className='info-table'>
						<tbody>
							<tr className='body-row'>
								<td>Body Type...</td>
								<td className='planet-info'>{planetData.bodyType}</td>
							</tr>
							<tr className='moon-row'>
								<td className='moon-title'>Moons...</td>
								<td className='planet-info'>
									{planetData?.moons
										? planetData.moons.map((moon) => {
												return <p>{moon.moon}</p>;
										  })
										: 'None'}
								</td>
							</tr>
							<tr className='temp-row'>
								<td>Average Temp...</td>
								<td className='planet-info'>{planetData.avgTemp + 'C'}</td>
							</tr>
							<tr className='axial-row'>
								<td>Axial Tilt...</td>
								<td className='planet-info'>{planetData.axialTilt + 'Deg'}</td>
							</tr>
							<tr className='mass-row'>
								<td>Mass...</td>
								<td className='planet-info'>
									{planetData.mass.massValue +
										' * 10^' +
										planetData.mass.massExponent +
										'Kg'}
								</td>
							</tr>
							<tr className='gravity-row'>
								<td>Gravity...</td>
								<td className='planet-info'>{planetData.gravity}</td>
							</tr>
							<tr className='escape-row'>
								<td>Escape Velocity...</td>
								<td className='planet-info'>{planetData.escape + 'm/s'}</td>
							</tr>
							<tr className='radius-row'>
								<td>Mean Radius...</td>
								<td className='planet-info'>{planetData.meanRadius}</td>
							</tr>
							<tr>
								<td>Aphelion...</td>
								<td className='planet-info'>{planetData.aphelion + 'Km'}</td>
							</tr>
							<tr>
								<td>Perihelion...</td>
								<td className='planet-info'>{planetData.perihelion + 'Km'}</td>
							</tr>
						</tbody>
					</table>
					<div className='info-container'>
						{planetData.name === 'Mars' ? (
							<MarsDesc />
						) : planetData.name === 'Earth' ? (
							<MarsDesc />
						) : null}
					</div>
				</div>
			)}
		</>
	);
};

export default InfoPanel;
