import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import FacebookButton from 'react-facebook-login';
import { Fab } from '@material-ui/core';


const loginSettings = {
	provider: 'facebook',
	type: 'popup',
}

const FacebookLogin = ({firebase}) => (
	<FacebookButton onClick={ () => firebase.login(loginSettings)} />
);

export default compose (
	firebaseConnect(),
	connect( ({ firebase: { auth, profile} }) => ({ auth, profile}))
)(FacebookLogin)


