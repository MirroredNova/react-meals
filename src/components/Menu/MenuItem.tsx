import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../store/CartProvider';
import MenuForm from './MenuForm';

const MenuItemWrapper = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }

  .description {
    font-style: italic;
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`;

type MenuItemProps = {
  meal: { id: string; name: string; description: string; price: number; };
};

const MenuItem: React.FC<MenuItemProps> = function MenuItem({ meal }) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = useMemo(() => (amount: number) => {
    cartCtx.addItem({
      meal,
      amount,
    });
  }, []);

  return (
    <MenuItemWrapper>
      <div>
        <h3>{meal.name}</h3>
        <p className="description">{meal.description}</p>
        <p className="price">
          $
          {meal.price}
        </p>
      </div>
      <MenuForm meal={meal} onAddToCart={addToCartHandler} />
    </MenuItemWrapper>
  );
};

export default MenuItem;
