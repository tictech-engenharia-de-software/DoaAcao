import React from 'react';
import styled from 'styled-components';
import EventDeck from '/EventDeck';
import Container from '@material-ui/core/Container';
import LoadingPage from '/LoadingPage';
import { UserIsAuthenticated } from '/HOC';
import AppBar from '/AppBar';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';


const PageContainer = styled.div`
width:100%;
margin: 0;
height: 100%;
overflow: hidden
`;


const EventPage = ({events, institution, requesting}) => {
	const loadingData = requesting.events || requesting.institution 
	console.log(loadingData, events, institution)
	return loadingData?(<LoadingPage/>)
		:(<PageContainer>
			<AppBar/>
			<Container>
				<EventDeck events={events} institution={institution}/>
			</Container>
		</PageContainer>
	)
}

const eventsToArray = events => events?Object.keys(events).map( key => events[key]):[]
const mapFirebaseStateToProps = state => ({
  events: eventsToArray(state.firebase.data.events),
  institution: state.firebase.data.institution || {},
  requesting: state.firebase.requesting,
})

export default compose(
	connect(mapFirebaseStateToProps),
	firebaseConnect(['events','institution']),
	UserIsAuthenticated,
)(EventPage);
