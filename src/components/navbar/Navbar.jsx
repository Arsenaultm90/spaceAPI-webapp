import React from 'react';
import './Navbar.css';

const Navbar = ({ setPlanet, setModalIsOpen, signIn }) => {
	const clickHandler = (e) => {
		switch (e.currentTarget.getAttribute('data-value')) {
			case 'Mercury':
				setPlanet('mercury');
				break;
			case 'Venus':
				setPlanet('venus');
				break;
			case 'Earth':
				setPlanet('Earth');
				break;
			case 'Mars':
				setPlanet('mars');
				break;
			case 'Jupiter':
				setPlanet('jupiter');
				break;
			case 'Saturn':
				setPlanet('saturn');
				break;
			case 'Uranus':
				setPlanet('uranus');
				break;
			case 'Neptune':
				setPlanet('neptune');
				break;
			case '?':
				if (signIn) {
					setPlanet('pluto');
				} else {
					setModalIsOpen(true);
				}
				break;
			default:
				break;
		}
	};

	return (
		<nav className='navbar'>
			<ul className='navbar-items'>
				<li onClick={clickHandler} data-value='Mercury'>
					Mercury
				</li>
				<li onClick={clickHandler} data-value='Venus'>
					Venus
				</li>
				<li onClick={clickHandler} data-value='Earth'>
					Earth
				</li>
				<li onClick={clickHandler} data-value='Mars'>
					Mars
				</li>
				<li onClick={clickHandler} data-value='Jupiter'>
					Jupiter
				</li>
				<li onClick={clickHandler} data-value='Saturn'>
					Saturn
				</li>
				<li onClick={clickHandler} data-value='Uranus'>
					Uranus
				</li>
				<li onClick={clickHandler} data-value='Neptune'>
					Neptune
				</li>
				<li onClick={clickHandler} data-value='?'>
					?
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
