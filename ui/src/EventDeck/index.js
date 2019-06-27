import React, { useState, useEffect } from 'react';
import images from "../resources/images/*.jpg";
import EventCard from "/EventCard";
import Swipeable from "react-swipy";
import styled from "styled-components";


const EventDeck = ({events, institution}) => {
  const [cards, setCards] = useState([]);
  const remove =() => setCards(cards.slice(1, cards.length))

  useEffect(() => {
    setCards(events)
  }, [events])

  return cards.length>0?(
    <Swipeable onAfterSwipe={remove}>
      <EventCard
        title = {cards[0].name} 
        limit={80}
        logo={institution[cards[0].organizer].logo}
        description = {cards[0].description}
        image = {cards[0].image}
      />
    </Swipeable>)
    :(<div> Nenhum evento aqui! </div>)
}



export default (EventDeck)
