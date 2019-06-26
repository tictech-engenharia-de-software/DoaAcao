import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import EventList from './EventList';
import CssBaseline from '@material-ui/core/CssBaseline';


const ChatListPage = styled.div`
	display: flex;
	flex-direction:column;
`

const ChatList = () => (
	<ChatListPage>
		<CssBaseline/>
		<TopBar/>
		<EventList/>
	</ChatListPage>
)



export default ChatList;