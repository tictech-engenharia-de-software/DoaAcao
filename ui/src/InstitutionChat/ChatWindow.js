import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';


const ChatMessages = styled.div`
	display:flex;
	flex-direction:column;
	overflow:auto;
	overflow-x: hidden;
	margin: 24px 12px;
	flex-grow:4;

`

const SenderMessage = styled.div`
	display:flex;
	justify-content: flex-end;
	margin-top:12px;
`

const SenderChip = styled(Chip)`
&&&{
	background-color:#dcedc8;
}
`;
const ReceiverMessage = styled.div`
	display:flex;
	justify-content: flex-start;
	margin-top:12px;
`

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:;
`


const ChatWindow = ({chat, user}) => (
	<ChatMessages>
	{
		chat && chat.messages? 				
			messageToArray(chat.messages || {}).map(
				({message, senderId,timestamp, key}) =>	user === senderId? 
				(<SenderMessage key={key}>
					<SenderChip size="medium" label={message} />
					<Typography variant='caption'>
						{	timestamp?new Date(timestamp).toLocaleTimeString('pt-BR'):''}
					</Typography>
				</SenderMessage>) 
				: (<ReceiverMessage 
					key={key}>
					<Container>
						<Chip size="medium" label={message}/>
					<Typography variant='overline'>
							{	timestamp?new Date(timestamp).toLocaleTimeString('pt-BR'):''}
						</Typography>
					</Container>
				</ReceiverMessage>)
			):<div/>

	}
</ChatMessages>
)

const messageToArray = (messages) => messages !== {}
	? Object.keys(messages).map(key => (
		{
			...messages[key],
			key,
		}
	))
	:[]





export default ChatWindow;
