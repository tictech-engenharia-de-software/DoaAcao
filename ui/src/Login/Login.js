import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from '/FacebookLogin';
import GoogleLogin from '/GoogleLogin';


const Login = () => (
	<div>
		<Link to='/events/' >
			<FacebookLogin />
		</Link>
		<Link to='/events/'>
			<GoogleLogin />
		</Link>
	</div>
);

export default Login;
