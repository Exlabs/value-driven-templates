import React from 'react';
import styled from 'styled-components';

const Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary};
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.color.white};
  font-size: 31px;
  font-weight: 700;

  animation: pulse 3s linear infinite;
`;

interface NumberedPointProps {
  value: number;
}

export const NumberedPoint = ({ value }: NumberedPointProps) => (
  <Point className="numbered-point">{value}</Point>
);
