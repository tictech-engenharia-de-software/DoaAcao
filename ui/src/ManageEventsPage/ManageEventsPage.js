import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import AppBar from '/AppBar';
import CreateEventDialog from '/CreateEventDialog';
import EventList from '/EventList';
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

const PageContainer = styled.div`
width:100%;
margin: 0;
height: 100%;
overflow: hidden
`;


const ManageEventsPage = ({events, auth}) =>{
	const [open, setOpen] = React.useState(false);
	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');
	return(
		<PageContainer>
			<AppBar/>
			<EventList 
			  events={events}
			  organizer={auth.uid}
			/>
			<AbsoluteFab onClick={() => setOpen(true)}>
				<AddIcon/>
			</AbsoluteFab>
			<CreateEventDialog open={open} 
				handleClose={() => setOpen(false)}/>
		</PageContainer>
	)
}


const mapFirebaseStateToProps = state => ({
  events: state.firebase.data.events,
  auth: state.firebase.auth,
}) 

export default compose (
	connect(mapFirebaseStateToProps),
	firebaseConnect(['events']),
	InstitutionAuthenticated,
)(ManageEventsPage)
