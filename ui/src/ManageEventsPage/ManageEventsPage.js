import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import Logo from '/Logo';
import Fab from '@material-ui/core/Fab';
import ChatIcon from '@material-ui/icons/Chat';
import AppBar from '/AppBar';
import CreateEventDialog from '/CreateEventDialog';
import EventList from '/EventList';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { InstitutionAuthenticated } from '/HOC';

const AbsoluteFab = styled(Fab)`
&&&{
    position: absolute;
    bottom: 24px;
    right: 24px;
}
`;

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
  <StyledLink to='/institution-chat'>
    <IconButton>
      <ChatIcon />
    </IconButton>
  </StyledLink>
);



const ManageEventsPage = ({events, auth, requesting}) =>{
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  return(
    <PageContainer>
      <AppBar>
	<Logo/>
	<ChatButton/>
      </AppBar>			
      <EventList 
	events={eventsToArray(events, auth.uid)}
      />
      <AbsoluteFab onClick={() => setOpen(true)}>
	<AddIcon/>
      </AbsoluteFab>
      <CreateEventDialog open={open} 
	handleClose={() => setOpen(false)}/>
    </PageContainer>
  )
}

const eventsToArray = (events, organizer) => events !== {}
  ? Object.keys(events).filter(key => events[key].organizer == organizer).map(key => ({...events[key],key}))
  :[]


const mapFirebaseStateToProps = state => ({
  events: state.firebase.data.events || {},
  auth: state.firebase.auth,
}) 

export default compose (
  connect(mapFirebaseStateToProps),
  firebaseConnect(['events']),
  InstitutionAuthenticated,
)(ManageEventsPage)
