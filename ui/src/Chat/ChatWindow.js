import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';


const ChatMessages = styled.div`
	display:flex;
	flex-direction:column-reverse;
	overflow:auto;
	overflow-x: hidden;
	margin: 24px 12px;
	flex-grow:4;

`

const SenderMessage = styled.div`
	display:flex;
	justify-content: flex-end;
`
const ReceiverMessage = styled.div`
	display:flex;
	justify-content: flex-start;
`


const ChatWindow = ({messages, user}) => (
	<ChatMessages>
	{
		messages.map(
			(message) => (
			<Typography>
				{
					user.id === message.username ? 
					(<SenderMessage><Chip size="medium" label={message.content}/></SenderMessage>) 
					: (<ReceiverMessage><Chip size="medium" label={message.content}/></ReceiverMessage>)
				}
			</Typography> 
			)
		)
	}
	</ChatMessages>
	
)



ChatWindow.defaultProps = {
	messages:[
		{username:"Henrique",content:"Ja é ou ja era?"},
		{username:"Jéssica",content:"Já é"},
		{username:"Henrique",content:"Ja é ou ja era?"},
		{username:"Jéssica",content:"Já é"}
	],
	user:{id:"Henrique"}
}

export default ChatWindow;
