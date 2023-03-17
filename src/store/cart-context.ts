/* eslint-disable @typescript-eslint/no-empty-function */
import { Cart, CartItem } from '../constants/types';

const cart: Cart = {
  items: [],
  totalAmount: 0,
  addItem(item: CartItem): void {},
  removeItem(id: string): void {},
};

export default cart;
