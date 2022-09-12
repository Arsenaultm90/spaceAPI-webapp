import React, { useState, useRef } from 'react';
import { useAuth } from '../context/authContext';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({
	setSignIn,
	modalIsOpen,
	setModalIsOpen,
	setRegisterIsOpen,
	setPlanet,
}) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const closeHandler = () => {
		setModalIsOpen(false);
	};

	const signInHandler = async (e) => {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			console.log('sign in handler');
			setModalIsOpen(false);
			setSignIn(true);
			setPlanet('pluto');
		} catch {
			setError('Failed to sign in');
		}

		setLoading(false);
	};

	const registerHandler = () => {
		setModalIsOpen(false);
		setRegisterIsOpen(true);
	};

	if (!modalIsOpen) return null;
	return ReactDOM.createPortal(
		<>
			<div className='modal-bg' />
			<div className='modal-container'>
				<form className='form-container' action='submit' method='POST'>
					<button className='closeBtn' onClick={closeHandler}>
						X
					</button>
					<h3>Please sign in or register...</h3>
					<input
						ref={emailRef}
						name='username'
						type='email'
						placeholder='Username'
						required
					/>
					<input
						ref={passwordRef}
						name='password'
						type='password'
						placeholder='Password'
						required
					/>
					<div className='button-container'>
						<button onClick={signInHandler}>Login</button>
						<button onClick={registerHandler}>Register</button>
					</div>
				</form>
			</div>
		</>,
		document.getElementById('portal')
	);
};

export default Modal;
