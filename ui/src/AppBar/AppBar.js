import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '/Logo';

const StyledAppBar = styled(AppBar)`
display:flex;
height:100px;
margin-bottom:24px;
padding:4px 24px 4px 0px;
`;

const StyledToolbar = styled(Toolbar)`
display:flex;
align-items:center;
justify-content:space-between;
height:100%;
`;

const Header = ({children}) => (
	<StyledAppBar position="sticky" color="default">
		<StyledToolbar>
			{
				children 
			}
		</StyledToolbar>
	</StyledAppBar>
);

export default Header;
