import React from 'react';
import Login from '/Login';
import EventDeck from '/EventDeck'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import images from "../resources/images/*.jpg";
import Swipeable from "react-swipy";
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';

const App = (props) =>
	(
		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/events/" component={EventDeck} />
			</Switch>
		</Router>
	);

   
  const Container = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    align-items:stretch;
    position:relative;
  `;
   
  const Header = styled.div`
      background-color: #ffb4ce;
      padding: 45px;
  `;
  
  const Content = styled.div`
  `;
  
  const CardsContainer = styled.div`
      padding: 90px;
  `;
  
  const ButtonsContainer = styled.div`
    display:flex;
    align-content:center;
    justify-content: space-around;
  `;
  
  const Button = styled.button`
    font-size: ${props => props.size}px;
    background-color:${props => props.color};
    border-radius:50%;
    border:none;
    width:250px;
    height:250px;
    color: white;
    margin:50px 30px;
  `;
  
  const Card = styled.div`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      background-color:#FFF;
      display:flex;
      flex-direction:column;
  `;
  
  const CardTitle = styled.div`
    display:flex;
    flex-direction:row;
    padding: 50px;
  `;
  
  const CardTitleText = styled.div`
    vertical-align:center;
    padding-left:80px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
  `;
  
  const CardDescription = styled.div`
    padding:100px;
  `;
  
    const EventCard = ({title, logo, description, image}) => (
        <Card>
          <CardTitle>
            <img height="150px" src={logo}/>
            <CardTitleText><h1>{title}</h1></CardTitleText>
          </CardTitle>
  
          <img src={image}/>
  
          <CardDescription>
            <h2>
            {description}
            </h2>
          </CardDescription>
        </Card>
    )
  
    class CardsDeck extends React.Component{
  
  
      state = {cards: [
        {
          logo: images["sth_foto"], 
          title: "Somos todos Heróis", 
          foto: images["sth_foto"], 
          description: "Desenvolva crianças dando aula de skate!"
        },
  
        {
          logo: images["sth_foto"], 
          title: "Somos todos Heróis", 
          foto: images["sth_foto"], 
          description: "Desenvolva crianças dando aula de skate!"
        },
        ]
      }
  
      remove = () =>
      this.setState(({cards}) => ({
        cards: cards.slice(1, cards.length),
      }));
  
      render (){
        const {title, logo, description, image} = this.state.cards[0];
        return (
        <Swipeable onAfterSwipe={this.remove}>
          <EventCard
          key={} 
            title = {title} 
            logo = {logo}
            description = {description}
            image = {image}
            />
          </Swipeable>
          );
          
      }
    }
  
  
  const Wrapper = () => {
    return (
      <Container>
        <Header>
          <img height="10%" src={require('../resources/images/doaacao_logo.png')}/>
        </Header>
        <Content>
            <CardsContainer>
              <CardsDeck/>
  
            </CardsContainer>
            <ButtonsContainer>
              <Button size="50" color="#a8a8a8"><i className="fa fa-times fa-2x"/></Button>
              <Button size="40" color="#ff0500"><i className="fa fa-heart fa-2x"/></Button>
  
            </ButtonsContainer>
            
        </Content>
      </Container>
    )
  }
  
  export default Wrapper;
