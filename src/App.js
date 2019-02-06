import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import Login from './components/Login';
import './App.css';

const App = () => {
	const [auth, setAuth] = useState(false);
	const [email, setEmail ] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		document.title = "BaRITO"
	});

	return (
		auth ? 
			<Homepage /> 
			: <Login
				auth={auth}
				setAuth={setAuth}
				email={email} 
				password={password} 
				setEmail={setEmail} 
				setPassword={setPassword}
			/>
	)
}

export default App;
