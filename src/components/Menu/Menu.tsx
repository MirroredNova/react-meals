import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Meal } from '../../constants/types';
import Card from '../UI/Card';
import MenuItem from './MenuItem';

const MenuList = styled.ul`
  padding-inline-start: 0;
`;

const Menu = function ProfileList() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiCall = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://react-http-9f8a7-default-rtdb.firebaseio.com/meals.json');

        if (!response.ok) throw new Error('Something went wrong');

        const data = await response.json();
        const loadedMeals = Object.entries<{
          description: string,
          name: string,
          price: number
        }>(data).map((meal) => ({ id: meal[0], ...meal[1] })) as Meal[];
        setMeals(loadedMeals);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    apiCall();
  }, []);

  const menuItems = meals.map((meal) => <MenuItem key={meal.id} meal={meal} />);

  return (
    <Card width="1100px">
      <MenuList>
        {loading && !error && 'Loading Menu...'}
        {!loading && error && `${error}`}
        {!loading && !error && menuItems}
      </MenuList>
    </Card>
  );
};

export default Menu;
