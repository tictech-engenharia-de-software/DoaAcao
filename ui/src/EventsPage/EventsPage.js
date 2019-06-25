import React from 'react';
import styled from 'styled-components';
import EventDeck from '/EventDeck';
import Container from '@material-ui/core/Container';
import { UserIsAuthenticated } from '/HOC';
import AppBar from '/AppBar';

const PageContainer = styled.div`
width:100%;
margin: 0;
height: 100%;
overflow: hidden
`;


const EventPage = () => {
	return (
		<PageContainer>
			<AppBar/>
			<Container>
				<EventDeck/>
			</Container>
		</PageContainer>
)
}

export default UserIsAuthenticated(EventPage);
