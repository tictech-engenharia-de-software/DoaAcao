import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
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
  background-color: #4C69BA;
  border-color: #4C69BA;
  font-weight: bold;
  height:50px;
  width:240px;
  display:flex;
  justify-content:space-around;
}
`;

const loginSettings = {
	provider: 'facebook',
	type: 'redirect',
}

const FacebookLogin = ({firebase}) => (
	<FacebookButton onClick={ () => firebase.login(loginSettings)}>
	<FontAwesomeIcon icon={faFacebookF} /> Sign in with Facebook
	</FacebookButton>
);

export default compose (
	firebaseConnect(),
	connect( ({ firebase: { auth, profile} }) => ({ auth, profile}))
)(FacebookLogin)


