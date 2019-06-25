import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookLogin from '/FacebookLogin';
import GoogleLogin from '/GoogleLogin';
import Button from '@material-ui/core/Button';
import logo from '/../logo.png';
import { UserIsNotAuthenticated } from '/HOC';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const PageContainer = styled.div`
&&{
margin:12.5%;
height:75vh;
width:75vw;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
}
`;

const LoginContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;


const Login = () => (
  <PageContainer>
    <img src={logo}/>
    <StyledLink to='/events/' >
      <FacebookLogin />
    </StyledLink>
    <StyledLink to='/events/' >
      <GoogleLogin />
    </StyledLink>
  </PageContainer>
    );

export default UserIsNotAuthenticated(Login);
