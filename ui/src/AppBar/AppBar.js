import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '/Logo';

const StyledAppBar = styled(AppBar)`
display:flex;
max-height:100px;
margin-bottom:24px;
`;

const StyledToolbar = styled(Toolbar)`
display:flex;
align-items:center;
justify-content:center;
`;

const Header = () => (
	<StyledAppBar position="sticky" color="default">
		<StyledToolbar>
			<Logo/>
		</StyledToolbar>
	</StyledAppBar>
);

export default Header;
