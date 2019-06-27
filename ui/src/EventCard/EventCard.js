import React from 'react';
import styled from "styled-components";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const StyledCard = styled(Card)`
position: relative;
min-width: 150px;
min-height: 150px;
`;

const StyledMedia = styled(CardMedia)`
height:240px;
`;

const EventCard = ({title, logo, description, image}) => (
  <StyledCard>
    <CardHeader
      avatar={<Avatar src={logo}/>}
      title={title}
    />
    <CardContent>
      <StyledMedia
	image={image}
      />
      <Typography variant="body2" color="textSecondary">
	{description}
      </Typography>
    </CardContent>
  </StyledCard>
);

export default EventCard;
