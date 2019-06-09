import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import logo from '/../btn_google.png';
//import GoogleButton from 'react-google-button';

const loginSettings = {
		provider:'google',
		type:'popup',
	}

const GoogleLogin = ({firebase}) => (
	<Button > <img src="" onClick={ () => firebase.login(loginSettings)} /> </Button>
);

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
)(GoogleLogin)
