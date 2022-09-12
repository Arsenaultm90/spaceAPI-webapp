import React, { useState } from 'react';
import './InfoPanel.css';
import MarsDesc from './mars/MarsDesc';
import MercuryDesc from './mercury/MercuryDesc';
import VenusDesc from './venus/VenusDesc';
import Navbar from './navbar/Navbar';
import EarthDesc from './earth/EarthDesc';
import JupiterDesc from './jupiter/JupiterDesc';
import UranusDesc from './uranus/UranusDesc';
import NeptuneDesc from './neptune/NeptuneDesc';
import SaturnDesc from './saturn/SaturnDesc';
import Modal from './signin/Modal';
import RegisterModal from './register/RegisterModal';
import PlutoDesc from './pluto/PlutoDesc';

const InfoPanel = ({ planetData, setPlanet }) => {
	const [signIn, setSignIn] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [registerIsOpen, setRegisterIsOpen] = useState(false);

	return (
		<>
			<Modal
				setSignIn={setSignIn}
				setPlanet={setPlanet}
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
				setRegisterIsOpen={setRegisterIsOpen}
			/>
			<RegisterModal
				registerIsOpen={registerIsOpen}
				setRegisterIsOpen={setRegisterIsOpen}
				setModalIsOpen={setModalIsOpen}
			/>
			{planetData && (
				<div className='info-panel'>
					<Navbar
						setPlanet={setPlanet}
						setModalIsOpen={setModalIsOpen}
						signIn={signIn}
					/>
					<h1 className='planet-title'>{planetData.englishName}</h1>
					<table className='info-table'>
						<tbody>
							<tr className='body-row'>
								<td>Body Type...</td>
								<td className='planet-info'>{planetData.bodyType}</td>
							</tr>
							<tr className='moon-row'>
								<td className='moon-title'>Moons...</td>
								<td className='planet-info'>
									{Array.isArray(planetData.moons) &&
									planetData?.moons.length <= 5 ? (
										planetData.moons.map((moon) => {
											return <p>{moon.moon},</p>;
										})
									) : Array.isArray(planetData.moons) &&
									  planetData.moons.length > 5 ? (
										<select className='dropdown'>
											<optgroup>
												{planetData.moons.map((moon) => {
													return <option>{moon.moon}</option>;
												})}
											</optgroup>
										</select>
									) : (
										'None'
									)}
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
						) : planetData.englishName === 'Earth' ? (
							<EarthDesc />
						) : planetData.name === 'Mercure' ? (
							<MercuryDesc />
						) : planetData.englishName === 'Venus' ? (
							<VenusDesc />
						) : planetData.englishName === 'Jupiter' ? (
							<JupiterDesc />
						) : planetData.englishName === 'Uranus' ? (
							<UranusDesc />
						) : planetData.englishName === 'Neptune' ? (
							<NeptuneDesc />
						) : planetData.englishName === 'Saturn' ? (
							<SaturnDesc />
						) : planetData.englishName === 'Pluto' ? (
							<PlutoDesc />
						) : null}
					</div>
				</div>
			)}
		</>
	);
};

export default InfoPanel;
