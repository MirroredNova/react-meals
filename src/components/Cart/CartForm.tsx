import React, { useState } from 'react';
import styled from 'styled-components';
import Checkout from './Checkout';

const CartActionsWrapper = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  & .button {
    background-color: #8a2b06;
    color: white;
  }

  & .button--alt {
    color: #8a2b06;
  }

  button:hover,
  button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

type Props = {
  toggleCart: () => void
}

function CartActions({ toggleCart }: Props) {
  const [checkoutVisible, setCheckedoutVisible] = useState(false);

  return (
    checkoutVisible ? <Checkout onCancel={toggleCart} /> : (
      <CartActionsWrapper>
        <button className="button--alt" type="button" onClick={toggleCart}>Close</button>
        <button className="button" type="button" onClick={() => setCheckedoutVisible(true)}>Order</button>
      </CartActionsWrapper>
    )
  );
}

export default CartActions;
