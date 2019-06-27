import React, { Component } from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const StyledList = styled(List)`
	display: flex;	
	flex-direction:column;
	width:100%
`

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const EventList = ({chatlist}) => (
		<StyledList>
			{chatlist.map( ({title, key, logo, institution}) => (
				<StyledLink to={`/institution-chat/${key}`} key={key}>
					<ListItem align-items="flex-start" button>
						<ListItemAvatar>
							<Avatar src={logo}/>
						</ListItemAvatar>
						<ListItemText primary={institution} secondary={title} />
					</ListItem>
					<Divider variant="inset" component="li" />
				</StyledLink>
				)
			)
		}
		</StyledList>
	)


EventList.defaultProps = {
	chatlist:['doação','campanha do agasalho']
}

export default EventList;
