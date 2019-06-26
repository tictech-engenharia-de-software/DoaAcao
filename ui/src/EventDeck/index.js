import React, { useState, useEffect } from 'react';
import images from "../resources/images/*.jpg";
import EventCard from "/EventCard";
import Swipeable from "react-swipy";
import styled from "styled-components";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';


const EventDeck = (props) => {
  const [cards, setCards] = useState([]);
  const remove =() => setCards(cards.slice(1, cards.length))

  useEffect(() => {
    setCards(props.events)
  }, [props.events])

  return cards.length>0?(
    <Swipeable onAfterSwipe={remove}>
      <EventCard
        title = {cards[0].title} 
        limit={80}
        logo = {cards[0].logo}
        description = {cards[0].description}
        image = {cards[0].image}
      />
    </Swipeable>)
    :(<div> Nenhum evento aqui! </div>)

}

const eventsToArray = events => events?Object.keys(events).map( key => events[key]):[]
const mapFirebaseStateToProps = state => ({
  events: eventsToArray(state.firebase.data.events),
})

export default compose (
  connect(mapFirebaseStateToProps),
  firebaseConnect(['events']),
)(EventDeck)
