import React from 'react';
import Swipeable from "react-swipy";
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';

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

var cards = [
      {logo: "../resources/images/sth.webp", title: "Somos todos Heróis", foto: "sth_foto.jpg", description: "Desenvolva crianças dando aula de skate!"},
      {logo: "sth.webp", title: "Somos todos Heróis", foto: "sth_foto.jpg", description: "Desenvolva crianças dando aula de skate!"}
    ];


const CardsPage = () => {
  return (
    <Container>
      <Header>
        <img height="10%" src={require('../resources/images/doaacao_logo.png')}/>
      </Header>
      <Content>
          <CardsContainer>
            <Swipeable>
              <Card>
                <CardTitle>
                  <img height="150px" src={require("../resources/images/sth.webp")}/>
                  <CardTitleText><h1>{cards[0].title}</h1></CardTitleText>
                </CardTitle>

                <img src={require('../resources/images/sth_foto.jpg')}/>

                <CardDescription>
                  <h2>
                  {cards[0].description}
                  </h2>
                </CardDescription>

              </Card>
              </Swipeable>


          </CardsContainer>
          <ButtonsContainer>
            <Button size="50" color="#a8a8a8"><i className="fa fa-times fa-2x"/></Button>
            <Button size="40" color="#ff0500"><i className="fa fa-heart fa-2x"/></Button>

          </ButtonsContainer>
          
      </Content>
    </Container>
  )
}

export default CardsPage;
