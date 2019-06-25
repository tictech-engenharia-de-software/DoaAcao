import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { firebaseConnect } from 'react-redux-firebase';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

const FacebookButton = styled(Button)`
&&&{
  border-style: solid;
  color: #FFF;
  cursor: pointer;
  display: inline-block;
  font-size: calc-responsive(14, 468, 18, 1920);
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color .3s, border-color .3s;
  background-color: rgb(66, 133, 244);
  border-color: rgb(66, 133, 244);
  font-weight: bold;
  height:50px;
  width:240px;
  display:flex;
  justify-content:space-around;
}
`;

const loginSettings = {
		provider:'google',
		type:'popup',
	}

const FacebookLogin = ({firebase}) => (
	<FacebookButton onClick={ () => firebase.login(loginSettings)}>
	<FontAwesomeIcon icon={faGoogle} /> Sign in with Google
	</FacebookButton>
);

export default compose (
	firebaseConnect(),
	connect( ({ firebase: { auth, profile} }) => ({ auth, profile}))
)(FacebookLogin)

