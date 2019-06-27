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

const Chat = ({chats, auth,firebase,requesting, match, institution}) => {
  const {chatId} = match.params

  const firebaseSend = (message) => firebase.push(`chats/${chatId}/messages`,{
    senderId:auth.uid,
    sender:auth.displayName,
    timestamp:new Date().getTime(),
    message,
  })

  const loadingData = requesting.institution  || requesting.chats
  const choosenChat = !loadingData && chatsToArray(chats, auth.uid, institution).filter(chat => chatId == chat.key)[0]

  return loadingData?(<LoadingPage/>):(<ChatPage>
      <CssBaseline/>
      <Topbar 
        username={choosenChat? choosenChat.institution:''}
        logo={choosenChat? choosenChat.logo:''}
        title={choosenChat? choosenChat.title:''}
      />
      <ChatWindow 
        chat={choosenChat}
        user={auth.uid}/>
      <InputText firebaseSend={firebaseSend} />
    </ChatPage>
  )
}


const chatsToArray = (chats, user, institution) => chats !== {}
  ? Object.keys(chats).filter(key => chats[key].user == user).map(key => (
    {
      ...chats[key],
      key,
      logo:institution[chats[key].organizer].logo,
      institution:institution[chats[key].organizer].displayName,
    }
  ))
  :[]

const mapFirebaseStateToProps = state => ({
  chats: state.firebase.data.chats || {},
  auth: state.firebase.auth,
  institution: state.firebase.data.institution || {},
  requesting: state.firebase.requesting,
})



export default compose (
  connect(mapFirebaseStateToProps),
  firebaseConnect(['chats', 'institution']),
)(Chat);
