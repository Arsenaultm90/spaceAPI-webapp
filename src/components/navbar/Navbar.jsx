import React from 'react';
import './Navbar.css';

const Navbar = ({ setPlanet }) => {
	const clickHandler = (e) => {
		console.log(e.currentTarget.getAttribute('data-value') === 'Mercury');
		switch (e.currentTarget.getAttribute('data-value')) {
			case 'Mercury':
				setPlanet('mercury');
				console.log('blah');
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
			default:
				break;
		}
	};

	const secretClickHandler = () => {};

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
				<li onClick={secretClickHandler}>?</li>
			</ul>
		</nav>
	);
};

export default Navbar;
