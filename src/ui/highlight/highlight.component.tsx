import React from 'react';
import { StyledHighlight } from './highlight.styles';

interface HighlightProps {
  children: React.ReactNode;
}

export const Highlight = ({ children }: HighlightProps) => (
  <StyledHighlight>{children}</StyledHighlight>
);
