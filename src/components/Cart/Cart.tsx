import React from 'react';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import CartForm from './CartForm';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

type Props = {
  toggleCart: () => void
}

function Cart({ toggleCart }: Props) {
  return (
    <Modal toggleCart={toggleCart}>
      <Card width="100%">
        <CartItems />
        <CartTotal />
        <CartForm toggleCart={toggleCart} />
      </Card>
    </Modal>

  );
}

export default Cart;
