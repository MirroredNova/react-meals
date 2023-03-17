import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartItem, CartItem as CartItemType } from '../../constants/types';
import { CartContext } from '../../store/CartProvider';
import SingleCartItem from './CartItem';

const CartItemsWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

function CartItems() {
  const cartCtx = useContext(CartContext);

  const onRemove = (id: string) => {
    cartCtx.removeItem(id);
  };

  const onAdd = (item: CartItem) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <CartItemsWrapper>
      {cartCtx.items.map((item: CartItemType) => (
        <SingleCartItem
          item={item}
          onAdd={onAdd}
          onRemove={onRemove}
          key={Math.random()}
        />
      ))}
    </CartItemsWrapper>
  );
}

export default CartItems;
