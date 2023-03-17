import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../store/CartProvider';

const CartButtonStyles = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  .icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  &:hover .badge,
  &:active .badge {
    background-color: #92320c;
  }
`;

type Props = {
  toggleCart: () => void
}

function CartButton({ toggleCart }: Props) {
  const cartCtx = useContext(CartContext);
  const numCartItems = cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0);

  return (
    <CartButtonStyles type="button" color="#3f1502" onClick={toggleCart}>
      <i className="fa-solid fa-cart-shopping icon" />
      {' '}
      Your Cart
      {' '}
      <span className="badge">{numCartItems}</span>
    </CartButtonStyles>
  );
}

export default CartButton;
