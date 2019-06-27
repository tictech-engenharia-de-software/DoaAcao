import React, { useState, useEffect } from 'react';
import images from "../resources/images/*.jpg";
import EventCard from "/EventCard";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Swipeable from "react-swipy";
import styled from "styled-components";
import { withRouter } from "react-router";


const EventDeck = ({events, institution, createNewChat, history}) => {
  const [cards, setCards] = useState([]);
  const remove = () => setCards(cards.slice(1, cards.length))
  const likeEvent = direction =>{
    if(direction === 'right') {
      const key =  createNewChat(currentCard.key, currentCard.organizer, currentCard.name)
      history.replace(`/chat/${key}`)
    }
  }

  useEffect(() => {
    setCards(events)
  }, [events])

  const currentCard = cards.length>0? cards[0]: false
  return currentCard?(
    <Swipeable onAfterSwipe={remove} onSwipe={likeEvent}>
      <EventCard
        title = {currentCard.name} 
        limit={80}
        logo={institution[currentCard.organizer].logo}
        description = {currentCard.description}
        image = {currentCard.image}
      />
    </Swipeable>)
    :(<Container> <Typography>Não há mais eventos. Volte mais tarde!</Typography>  </Container>)
}



export default(withRouter(EventDeck))
