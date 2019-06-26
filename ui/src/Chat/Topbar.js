import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Backspace from '@material-ui/icons/KeyboardBackspace';


const NameContainer = styled.div`
    display: flex;
    align-items: center;
`

const AvatarMargin = styled(Avatar)`
	margin-right: 10px;
`

const StyledToolbar = styled(Toolbar)`
	display:flex;
	justify-content: space-between;
	background-color:pink;
`

const TopBar = ({username}) => (
	<AppBar position="sticky">
		<StyledToolbar>
		
		<IconButton><Backspace/>
		</IconButton>
		
		<NameContainer>
		<AvatarMargin>{username[0]}</AvatarMargin>
		<Typography>{username}</Typography>
		</NameContainer>
		
		</StyledToolbar>
	</AppBar>
)

TopBar.defaultProps = {
	username:"Henrique"
}


export default TopBar;