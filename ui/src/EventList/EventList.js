import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const EventList = ({events, organizer}) => (
	<List>
		{
			Object.keys(events).filter(key => events[key].organizer == organizer)
				.map(
				(eventKey) => (
					<ListItem 
						key={eventKey}
					>
						<ListItemText 
							primary={events[eventKey].name} 
							secondary={events[eventKey].description} 
						/>
					</ListItem>
				))
		}
	</List>
)

EventList.defaultProps = {
	'events':{}
}

export default EventList;
