import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Backspace from '@material-ui/icons/KeyboardBackspace';


const NameContainer = styled.div`
    display: flex;
    align-items: center;
`
const StyledToolbar = styled(Toolbar)`
	display:flex;
	justify-content: space-between;
	background-color:pink;
`

const TopBar = () => (
	<AppBar position="sticky">
		<StyledToolbar>
		
		<IconButton><Backspace/>
		</IconButton>
		

		<Typography>Lista de eventos</Typography>

		
		</StyledToolbar>
	</AppBar>
)
 
export default TopBar;