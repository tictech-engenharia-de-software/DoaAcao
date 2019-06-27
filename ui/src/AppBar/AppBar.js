import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '/Logo';

const StyledAppBar = styled(AppBar)`
display:flex;
height:100px;
width:100%;
align-items:center;
justify-content:center;
margin-bottom:24px;
padding:4px 24px 4px 0px;
`;

const StyledToolbar = styled(Toolbar)`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height:100%;
`;

const Header = ({children, title}) => (
	<StyledAppBar position="sticky" color="default">
		<Typography variant="overline" noWrap={true} color="textSecondary"> {title }</Typography>
		<StyledToolbar>
			{
				children 
			}
		</StyledToolbar>
	</StyledAppBar>
);

export default Header;
