import React, { Fragment } from 'react';
import Row from './Row';

const Login = props => {
	const { email, password, setEmail, setPassword, setAuth } = props;

	function checkLogin(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		const email = data.get('email');
		const password = data.get('password');

		setAuth((email === 'nebab.johncarl@gmail.com' && password === 'user123') && true)

		console.log(`Email: ${data.get('email')}`);
		console.log(`Password: ${data.get('password')}`);
	}

	function handleSetEmail(e) {
		setEmail(e.target.value);
	}

	function handleSetPassword(e) {
		setPassword(e.target.value);
	}

	return (
		<Fragment>
			<h1>Welcome to BaRITO</h1>
			<h3>Login</h3>
			<form onSubmit={checkLogin}>
				<Row label="Email Address">
					<input 
						type="text" 
						name="email" 
						value={email} 
						onChange={handleSetEmail} 
					/>
				</Row>
				<Row label="Password">
					<input 
						type="password" 
						name="password" 
						value={password} 
						onChange={handleSetPassword} 
					/>
				</Row>
				<button type="submit">Login</button>
			</form>
		</Fragment>
	)
}

export default Login;
