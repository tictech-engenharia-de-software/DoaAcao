import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import LoadingPage from '/LoadingPage';
import EventList from './EventList';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { UserIsAuthenticated} from '/HOC';


const ChatListPage = styled.div`
	display: flex;
	flex-direction:column;
`

const ChatList = ({auth, chatlist, users, requesting}) => {
  const loadingData = requesting.users  || requesting.chats
  return loadingData?(<LoadingPage/>)
    :(	
      <ChatListPage>
	<TopBar/>
	<EventList chatlist={chatsToArray(chatlist,auth.uid, users)}/>
      </ChatListPage>
    )
}

const chatsToArray = (chats, user, users) => chats !== {} && users !== {}
  ? Object.keys(chats).filter(key => chats[key].organizer == user).map(key => (
    {
      ...chats[key],
      key,
      institution:users[chats[key].user]?users[chats[key].user].displayName: '',
      logo:users[chats[key].user]?users[chats[key].user].avatarUrl: '',
    }
  ))
  :[]
const mapFirebaseStateToProps = state => ({
  chatlist: state.firebase.data.chats || [],
  auth: state.firebase.auth,
  requesting: state.firebase.requesting,
  users: state.firebase.data.users || {},
}) 


export default compose (
	connect(mapFirebaseStateToProps),
	firebaseConnect(['chats', 'users']),
	UserIsAuthenticated,
)(ChatList);
