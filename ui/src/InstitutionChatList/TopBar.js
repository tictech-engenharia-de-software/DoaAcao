import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from '/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Backspace from '@material-ui/icons/KeyboardBackspace';

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const NameContainer = styled.div`
    display: flex;
`

const TopBar = () => (
	<AppBar>
		<StyledLink to='/manage-events/'>
			<IconButton>
				<Backspace/>
			</IconButton>
		</StyledLink>
		<NameContainer>
		<Typography variant="h6">Conversas</Typography>
	</NameContainer>
	</AppBar>
)
 
export default TopBar;
