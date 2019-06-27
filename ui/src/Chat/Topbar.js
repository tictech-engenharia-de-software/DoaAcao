import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from '/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Backspace from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    &:focus, &:hover, &:visited, &:link, &:active {
                <StyledLink to='/events/'>
                </StyledLink>
`


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

const TopBar = ({username, logo, title}) => (
	<AppBar title={title}>
		<StyledLink to='/chat'>
		<IconButton>
			<Backspace/>
		</IconButton>
	</StyledLink>
		
		<NameContainer>
			{
				logo?
					<AvatarMargin src={logo}/>
					:<AvatarMargin>{username[0]}</AvatarMargin>
			}
		<Typography>{username}</Typography>
		</NameContainer>
		
	</AppBar>
)

TopBar.defaultProps = {
	username:"Henrique",
	logo:""
}


export default TopBar;
