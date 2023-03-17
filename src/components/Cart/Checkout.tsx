import React, { useRef } from 'react';
import styled from 'styled-components';
import Input from '../UI/Input';

type Props = {
  onCancel: () => void;
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

function Checkout({ onCancel }: Props) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredPostal = postalInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;
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
