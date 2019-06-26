import React, { Component } from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const StyledList = styled.div`
	display: flex;	
	flex-direction:column;
`

const EventList = ({chatlist}) => (
	<StyledList>
		<List>
			{chatlist.map( (chatname) => (
					<ListItem button>
						<ListItemText primary={chatname} />
					</ListItem>
				)
			)
		}
		</List>

	</StyledList>

	)


EventList.defaultProps = {
	chatlist:['doação','campanha do agasalho']
}

export default EventList;