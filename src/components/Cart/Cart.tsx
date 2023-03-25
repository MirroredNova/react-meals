import React, { useContext, useState } from 'react';
import { UserData } from '../../constants/types';
import { CartContext } from '../../store/CartProvider';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import CartForm from './CartForm';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import Checkout from './Checkout';

type Props = {
  toggleCart: () => void
}

function Cart({ toggleCart }: Props) {
  const cartCtx = useContext(CartContext);
  const [checkoutVisible, setCheckedoutVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleCheckoutVisible = () => {
    setCheckedoutVisible((prev) => !prev);
  };

  const onConfirm = async (userData: UserData) => {
    setLoading(true);
    await fetch('https://react-http-9f8a7-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    cartCtx.clearCart();
    setLoading(false);
    setSubmitted(true);
  };

  const cartModalContent = (
    <>
      <CartItems />
      <CartTotal />
      {checkoutVisible
        ? <Checkout onCancel={toggleCart} onConfirm={onConfirm} />
        : <CartForm toggleCart={toggleCart} toggleCheckoutVisible={toggleCheckoutVisible} />}
    </>
  );

  const submittingModalContent = (
    <p>Sending order data...</p>
  );

  const submittedModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <button className="button--alt" type="button" onClick={toggleCart}>Close</button>
    </>

  );

  return (
    <Modal toggleCart={toggleCart}>
      <Card width="100%">
        {loading && submittingModalContent}
        {!loading && submitted ? submittedModalContent : cartModalContent}
      </Card>
    </Modal>

  );
}

export default Cart;
