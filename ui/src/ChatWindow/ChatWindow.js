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

const TimeContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
`;

const ChatWindow = ({chat, user}) => (
	<ChatMessages>
	{
		chat && chat.messages? 				
			messageToArray(chat.messages || {}).map(
				({message, senderId, timestamp, key}) =>{
					const Message =  () => user === senderId? 
						(<SenderMessage key={key}><SenderChip size="medium" label={message} /></SenderMessage>) 
						: (<ReceiverMessage key={key}><Chip size="medium" label={message}/></ReceiverMessage>)
					const Time = () =>( 					
						user === senderId?(
						<TimeContainer>
							<Typography variant='overline' color='textSecondary'>
								{	timestamp?new Date(timestamp).toLocaleDateString('pt-BR'):''}
							</Typography>
							<Typography variant='overline' color='textSecondary'>
								{	timestamp?new Date(timestamp).toLocaleTimeString('pt-BR'):''}
							</Typography>
						</TimeContainer>
						):(
							<TimeContainer>
								<Typography variant='overline' color='textSecondary'>
									{	timestamp?new Date(timestamp).toLocaleTimeString('pt-BR'):''}
								</Typography>

								<Typography variant='overline' color='textSecondary'>
									{	timestamp?new Date(timestamp).toLocaleDateString('pt-BR'):''}
								</Typography>
							</TimeContainer>
						)
					)
				return (
					<div key={timestamp}>
						<Message />
						<Time />
					</div>
				)
				}):<div/>

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
