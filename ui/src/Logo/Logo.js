import React from 'react';
import logo from '/resources/images/logo.png';
import styled from 'styled-components';

const ResponsiveImage = styled.img`
                object-fit: contain; 
`;

const Logo = () => (
	<ResponsiveImage src={logo} />
);

export default Logo;
