import React from 'react';
import { Point } from './numbered-point.styles';

interface NumberedPointProps {
  value: number;
}

export const NumberedPoint = ({ value }: NumberedPointProps) => (
  <Point className="numbered-point">{value}</Point>
);
