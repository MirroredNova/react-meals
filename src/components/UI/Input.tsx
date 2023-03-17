/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

type Props = {
  width: string
}

const InputWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-right: 1rem;
  }

  & input {
    width: ${(props) => props.width};
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;

type InputProps = {
  width: string;
  input: object,
  children: React.ReactNode,
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ width, input, children }, ref) => (
  <InputWrapper width={width}>
    <label>{children}</label>
    <input {...input} ref={ref} />
  </InputWrapper>
));

export default Input;
