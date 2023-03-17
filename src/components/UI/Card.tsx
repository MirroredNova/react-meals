import React from 'react';
import styled from 'styled-components';

interface Props {
  width: string;
}

const CardWrapper = styled.div<Props>`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  position: relative;
  width: ${(props) => props.width};
`;

type CardProps = {
  children: React.ReactNode,
  width: string,
  className?: string
}

function Card({ width, children, className }: CardProps) {
  return (
    <CardWrapper className={className} width={width}>
      {children}
    </CardWrapper>
  );
}

Card.defaultProps = {
  className: '',
};

export default Card;
