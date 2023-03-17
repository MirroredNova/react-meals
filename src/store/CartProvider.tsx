/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext, ReactNode, useMemo, useReducer,
} from 'react';
import { CartItem, DefaultCart } from '../constants/types';
import cart from './cart-context';

type Props = {
  children: ReactNode
}

export const defaultCartState: DefaultCart = {
  items: [],
  totalAmount: 0,
};

type Actions = CartItem | string;
const isCartItem = (b: Actions): b is CartItem => (b as CartItem).meal !== undefined;

const cartReducer = (
  state: DefaultCart,
  action: { type: string, [index: string]: Actions },
) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (isCartItem(action.item)) {
        const updatedTotalAmount = state.totalAmount + action.item.meal.price * action.item.amount;
        const indexOfMeal = state.items.map((e) => e.meal).indexOf(action.item.meal);
        const existingCartItem = state.items[indexOfMeal];
        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
          updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
          };
          updatedItems = [...state.items];
          updatedItems[indexOfMeal] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      break;
    case 'REMOVE_ITEM':
      if (typeof action.id === 'string') {
        const indexOfId = state.items.map((e) => e.meal.id).indexOf(action.id);
        const existingCartItem = state.items[indexOfId];
        const updatedTotalAmount = state.totalAmount - existingCartItem.meal.price;
        const updatedItems = [...state.items];
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };

        if (updatedItem.amount > 0) { // item still exists
          updatedItems[indexOfId] = updatedItem;
        } else { // no items left, remove meal from array
          updatedItems.splice(indexOfId, 1);
        }

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      break;
    default:
      break;
  }
  return state;
};

export const CartContext = createContext(cart);

function CartProvider({ children }: Props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };

  const cartContext = useMemo(() => ({
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }), [cartState]);

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
