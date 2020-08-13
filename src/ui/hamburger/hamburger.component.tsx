import React from 'react';
import { StyledButton } from './hamburger.styles';

interface HamburgerProps {
  active?: boolean;
  onClick: () => void;
}

export const Hamburger = ({ active = false, onClick }: HamburgerProps) => (
  <StyledButton name="menu-button" open={active} onClick={onClick}>
    <div />
    <div />
    <div />
  </StyledButton>
);
