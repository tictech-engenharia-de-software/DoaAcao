import React from 'react';
import Swipeable from "react-swipy";
import styled from "styled-components";
import Card from '@material-ui/core/Card';


const StyledCard = styled.div`
    background-color:red;
    display:inline-block;
    width:300px;
    height:400px;
`;

const Container = styled.div`
    position: "relative"; 
    width: "250px"; 
    height: "250px";
    text-align:center;
`;

const data = ['Alexandre', 'Thomas', 'Lucien']

var cards = ["First", "Second", "Third"]

class CardsPage extends React.Component{

  state = {};
  

}

const Wrapper = () => {
  return (
    <div>
    {cards.length > 0 ? (
      <Container>
        <Swipeable>
          <Card>{cards[0]}</Card>
        </Swipeable>
        {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
      </Container>
    ) : (
      <Card zIndex={-2}>No more cards</Card>
    )}
  </div>
  )
}

export default Wrapper;
