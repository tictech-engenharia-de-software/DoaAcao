import React, { Component } from 'react';
import styled from 'styled-components';
import Topbar from './Topbar';
import ChatWindow from './ChatWindow';
import InputText from './InputText';
import CssBaseline from '@material-ui/core/CssBaseline';

const ChatPage = styled.div`
	display: flex;
	flex-direction:column;
	justify-content:space-between;
	height:100%
`

const Chat = () => (
	<ChatPage>
		<CssBaseline/>
		<Topbar/>
		<ChatWindow/>
		<InputText/>
	</ChatPage>
)



export default Chat;