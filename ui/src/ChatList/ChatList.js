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

const ChatList = ({auth, chatlist, institution, requesting}) => {
  const loadingData = requesting.institution  || requesting.chats
  return loadingData?(<LoadingPage/>)
    :(	
      <ChatListPage>
	<TopBar/>
	<EventList chatlist={chatsToArray(chatlist,auth.uid, institution)}/>
      </ChatListPage>
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
  chatlist: state.firebase.data.chats || [],
  auth: state.firebase.auth,
  institution: state.firebase.data.institution || {},
  requesting: state.firebase.requesting,
}) 


export default compose (
	connect(mapFirebaseStateToProps),
	firebaseConnect(['chats', 'institution']),
	UserIsAuthenticated,
)(ChatList);
