import React from 'react';
import styled from 'styled-components';
import EventDeck from '/EventDeck';
import Container from '@material-ui/core/Container';
import ChatIcon from '@material-ui/icons/Chat';
import LoadingPage from '/LoadingPage';
import { Link } from 'react-router-dom';
import Logo from '/Logo';
import IconButton from '@material-ui/core/IconButton';
import { UserIsAuthenticated } from '/HOC';
import AppBar from '/AppBar';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const PageContainer = styled.div`
width:100%;
margin: 0;
height: 100%;
overflow: hidden
`;

const ChatButton = () =>(
  <StyledLink to='/chat'>
    <IconButton>
      <ChatIcon />
    </IconButton>
  </StyledLink>
);

const EventPage = ({events, institution, requesting, firebase, auth}) => {
  const loadingData = requesting.events || requesting.institution 
  const createNewChat = (event, organizer, title) =>  {
    firebase.uniqueSet(`chats/${event}${organizer}${auth.uid}`, {  event, organizer, title, user:auth.uid,  messages:[]})
    return `${event}${organizer}${auth.uid}`
  }
      
	return loadingData?(<LoadingPage/>)
		:(<PageContainer>
		  <AppBar>
		    <Logo/>
		    <ChatButton/>
		  </AppBar>
			<Container>
				<EventDeck events={events} institution={institution} createNewChat={createNewChat}/>
			</Container>
		</PageContainer>
	)
}

const eventsToArray = events => events?Object.keys(events).map( key => ({...events[key],key})):[]
const mapFirebaseStateToProps = state => ({
  events: eventsToArray(state.firebase.data.events),
  institution: state.firebase.data.institution || {},
  requesting: state.firebase.requesting,
  auth: state.firebase.auth,
})

export default compose(
	connect(mapFirebaseStateToProps),
	firebaseConnect(['events','institution']),
	UserIsAuthenticated,
)(EventPage);
