import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { UserData } from '../../constants/types';
import Input from '../UI/Input';

type Props = {
  onCancel: () => void;
  onConfirm: (userData: UserData) => void
}

const ButtonWrapper = styled.div`
  margin-top: 24px;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  & .button {
    background-color: #8a2b06;
    color: white;
  }

  & .button--alt {
    color: #8a2b06;
  }

  button:hover,
  button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

const isEmpty = (value: string) => value.trim() === '';
const isNotFiveChars = (value: string) => value.trim().length !== 5;

function Checkout({ onCancel, onConfirm }: Props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredName = nameInputRef.current?.value || '';
    const enteredStreet = streetInputRef.current?.value || '';
    const enteredPostal = postalInputRef.current?.value || '';
    const enteredCity = cityInputRef.current?.value || '';

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isNotFiveChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid = enteredNameIsValid
      && enteredStreetIsValid
      && enteredCityIsValid
      && enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
    });
  };

  return (
    <form onSubmit={confirmHandler}>
      <div>
        <Input
          width="20rem"
          ref={nameInputRef}
          input={{
            id: 'name',
            type: 'text',
          }}
        >
          Your Name
        </Input>
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div>
        <Input
          width="20rem"
          ref={streetInputRef}
          input={{
            id: 'street',
            type: 'text',
          }}
        >
          Street
        </Input>
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div>
        <Input
          width="20rem"
          ref={postalInputRef}
          input={{
            id: 'postal',
            type: 'text',
          }}
        >
          Postal Code
        </Input>
        {!formInputsValidity.postal && <p>Please enter a valid postal</p>}
      </div>
      <div>
        <Input
          width="20rem"
          ref={cityInputRef}
          input={{
            id: 'city',
            type: 'text',
          }}
        >
          City
        </Input>
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <ButtonWrapper>
        <button type="button" className="button--alt" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="button">Confirm</button>
      </ButtonWrapper>
    </form>
  );
}

export default Checkout;
