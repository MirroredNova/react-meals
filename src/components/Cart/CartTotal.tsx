import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../store/CartProvider';

const CartTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

function CartTotal() {
  const cartCtx = useContext(CartContext);

  return (
    <CartTotalWrapper>
      <h2>Total Amount</h2>
      <div>
        $
        {cartCtx.totalAmount.toFixed(2)}
      </div>
    </CartTotalWrapper>
  );
}

export default CartTotal;
