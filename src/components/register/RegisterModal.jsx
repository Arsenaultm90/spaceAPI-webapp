import React, { useRef, useState } from 'react';
import { useAuth } from '../context/authContext';
import ReactDOM from 'react-dom';

const RegisterModal = ({
	registerIsOpen,
	setRegisterIsOpen,
	setModalIsOpen,
}) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { signup } = useAuth();
	const closeHandler = () => {
		setRegisterIsOpen(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}
		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			setRegisterIsOpen(false);
			setModalIsOpen(true);
		} catch {
			setError('Failed to create an account');
		}

		setLoading(false);
	};

	if (!registerIsOpen) return null;
	return ReactDOM.createPortal(
		<>
			<div className='modal-bg' />
			<div className='modal-container'>
				<form className='form-container' action='submit'>
					<button className='closeBtn' onClick={closeHandler}>
						X
					</button>
					<h3>Register</h3>
					{error && <h3>{error}</h3>}
					<input
						ref={emailRef}
						name='username'
						type='text'
						placeholder='Username'
						required
					/>
					<input
						ref={passwordRef}
						name='password'
						type='text'
						placeholder='Password'
						required
					/>
					<input
						ref={passwordConfirmRef}
						name='password'
						type='text'
						placeholder='Confirm Password'
						required
					/>
					<div className='button-container'>
						<button onClick={handleSubmit}>Register</button>
					</div>
				</form>
			</div>
		</>,
		document.getElementById('portal')
	);
};

export default RegisterModal;
