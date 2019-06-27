import React, { Component } from 'react';
import styled from 'styled-components';
import Topbar from './Topbar';
import ChatWindow from './ChatWindow';
import InputText from './InputText';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';


const ChatPage = styled.div`
	display: flex;
	flex-direction:column;
	justify-content:space-between;
	height:100%
`

const Chat = ({chats,userId,firebase}) => {
	const firebaseSend = (message) => firebase.push('chats',{sender:userId,message,receiver:receiverId})

	return (<ChatPage>
		<CssBaseline/>
		<Topbar/>
		<ChatWindow messages={chats} user={userId}/>
		<InputText />
	</ChatPage>)
}

const chatsToArray = chats => chats?Object.keys(chats).map( key => chats[key]):[]

const mapFirebaseStateToProps = state => ({
  chats: chatsToArray(state.firebase.data.chats),
  userId: state.firebase.auth.uid,
})



export default compose (
  connect(mapFirebaseStateToProps),
  firebaseConnect(['chats']),
)(Chat);