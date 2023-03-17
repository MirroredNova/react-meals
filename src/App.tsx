/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import Description from './components/Layout/Description';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const AppWrapper = styled.div`
  min-width: 520px;
`;

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <CartProvider>
      <AppWrapper>
        <Header toggleCart={toggleCart} />
        <Description />
        <Menu />
        {showCart && <Cart toggleCart={toggleCart} />}
      </AppWrapper>
    </CartProvider>
  );
}

export default App;
