import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const loginSettings = {
		provider:'google',
		type:'popup',
	}

const GoogleLogin = ({firebase}) => (
	<Button onClick={ () => firebase.login(loginSettings)}>
		LOGIN WITH GOOGLE
	</Button>
);

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
)(GoogleLogin)
