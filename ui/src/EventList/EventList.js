import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const EventList = ({events}) => (
	<List>
		{
			events.length>0?events.map(
				(event) => (
					<ListItem  key={event.key}>
						<ListItemText 
							primary={event.name} 
							secondary={event.description} 
						/>
					</ListItem>
				)):<Container> <Typography>Adicione seu primeiro evento </Typography>  </Container>
		}
	</List>
)

EventList.defaultProps = {
	'events':[]
}

export default EventList;
