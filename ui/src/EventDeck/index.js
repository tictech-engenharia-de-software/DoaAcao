import React from 'react';
import images from "../resources/images/*.jpg";
import EventCard from "/EventCard";
import Swipeable from "react-swipy";
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';

class EventDeck extends React.Component{
        state = {cards: [
          {
            logo: images["sth"], 
            title: "Somos todos Heróis", 
            image: images["sth_foto"], 
            description: "Desenvolva crianças dando aula de skate!"
          },

          {
            logo: images["formiga_verde"], 
            title: "Formiga Verde", 
            image: images["formiga_verde_foto"], 
            description: "Desenvolva crianças dando aula de skate!"
          },
        ]
        }

        remove = () => this.setState(({cards}) => ({
          cards: cards.slice(1, cards.length),
        }));

        render (){
          if(this.state.cards.length > 0)
          {

            const {title, logo, description, image} = this.state.cards[0];
            return (
              <Swipeable onAfterSwipe={this.remove}>
                <EventCard
                  title = {title} 
                  limit={80}
                  logo = {logo}
                  description = {description}
                  image = {image}
                />
              </Swipeable>
            );
          }
          else
          {
                return (<div> Nenhum evento aqui! </div>);
          }

        }
      }
  

export default EventDeck;
