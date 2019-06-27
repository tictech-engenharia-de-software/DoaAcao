import React, { Component } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import LoadingPage from '/LoadingPage';
import Topbar from './Topbar';
import ChatWindow from '/ChatWindow';
import InputText from './InputText';


const ChatPage = styled.div`
	display: flex;
	flex-direction:column;
	justify-content:space-between;
	height:100%
`

const Chat = ({chats, auth,firebase,requesting, match, users, institution}) => {
  const {chatId} = match.params

  const firebaseSend = (message) => firebase.push(`chats/${chatId}/messages`,{
    senderId:auth.uid,
    sender:institution[auth.uid].displayName,
    timestamp:new Date().getTime(),
    message,
  })

  const loadingData = requesting.users  || requesting.chats || requesting.institution
  const choosenChat = !loadingData && chatsToArray(chats, auth.uid, users).filter(chat => chatId == chat.key)[0]

  return loadingData?(<LoadingPage/>):(<ChatPage>
      <CssBaseline/>
      <Topbar 
        username={choosenChat? choosenChat.displayName:''}
        logo={choosenChat? choosenChat.avatarUrl:''}
        title={choosenChat? choosenChat.title:''}
      />
      <ChatWindow 
        chat={choosenChat}
        user={auth.uid}/>
      <InputText firebaseSend={firebaseSend} />
    </ChatPage>
  )
}


const chatsToArray = (chats, user, users) => chats !== {} && users !== {}
  ? Object.keys(chats).filter(key => chats[key].organizer == user).map(key => (
    {
      ...chats[key],
      key,
      displayName:users[chats[key].user]?users[chats[key].user].displayName: '',
      avatarUrl:users[chats[key].user]?users[chats[key].user].avatarUrl: '',
    }
  ))
  :[]

const mapFirebaseStateToProps = state => ({
  chats: state.firebase.data.chats || {},
  auth: state.firebase.auth,
  users: state.firebase.data.users || {},
  institution: state.firebase.data.institution || {},
  requesting: state.firebase.requesting,
})



export default compose (
  connect(mapFirebaseStateToProps),
  firebaseConnect(['chats', 'users', 'institution']),
)(Chat);
