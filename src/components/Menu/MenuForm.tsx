import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Input from '../UI/Input';

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

type MenuFormProps = {
  meal: { id: string; name: string; description: string; price: number; };
  onAddToCart: (num: number) => void;
};

function MenuForm({ meal, onAddToCart }: MenuFormProps) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = useMemo(() => (e: React.FormEvent) => {
    e.preventDefault();
    if (amountInputRef.current !== undefined && amountInputRef.current !== null) {
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
        setAmountIsValid(false);
        return;
      }

      onAddToCart(enteredAmountNumber);
    }
  }, [amountIsValid]);

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        width="3rem"
        input={{
          id: `amount_${meal.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      >
        Amount
      </Input>
      <Button type="submit">+ Add</Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MenuForm;
