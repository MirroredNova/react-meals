import React from 'react';
import styled from 'styled-components';
import { CartItem } from '../../constants/types';

const CartItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  & .summary {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .price {
    font-weight: bold;
    color: #8a2b06;
  }

  & .amount {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
  }

  & .actions {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  & button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;

    &:hover,
    &:active {
      background-color: #8a2b06;
      color: white;
    }
  }
`;

type Props = {
  item: CartItem,
  onAdd: (item: CartItem) => void,
  onRemove: (id: string) => void,
}

function SingleCartItem({ item, onAdd, onRemove }: Props) {
  const onAddHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onAdd(item);
  };

  const onRemoveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onRemove(item.meal.id);
  };

  return (
    <CartItemWrapper>
      <div>
        <h2>{item.meal.name}</h2>
        <div className="summary">
          <span className="price">
            $
            {item.meal.price.toFixed(2)}
          </span>
          <span className="amount">
            x
            {' '}
            {item.amount}
          </span>
        </div>
      </div>
      <div className="actions">
        <button type="button" onClick={onRemoveHandler}>−</button>
        <button type="button" onClick={onAddHandler}>+</button>
      </div>
    </CartItemWrapper>
  );
}

export default SingleCartItem;
