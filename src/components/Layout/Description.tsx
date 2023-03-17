import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';

const DescriptionCard = styled(Card)`
  background-color: #313131;
  color: white;
  margin-top: -250px;
  margin-bottom: 25px;
  text-align: center;

  & * {
    margin: 15px;
  }
`;

function Description() {
  return (
    <DescriptionCard width="700px">
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favorite meal from our broad
        selection of available meals and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients,
        just-in-time and of course by experienced chefs!
      </p>
    </DescriptionCard>
  );
}

export default Description;
