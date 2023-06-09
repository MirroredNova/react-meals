import React from 'react';
import styled from 'styled-components';

import mealsImage from '../../assets/meals.jpg';
import HeaderButton from './CartButton';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem) scale(1.1);
  }
`;

type Props = {
  toggleCart: () => void
}

function Header({ toggleCart }: Props) {
  return (
    <>
      <HeaderWrapper>
        <h1>ReactMeals</h1>
        <HeaderButton toggleCart={toggleCart} />
      </HeaderWrapper>
      <ImageWrapper>
        <img src={mealsImage} alt="Meal Banner" />
      </ImageWrapper>
    </>
  );
}

export default Header;
