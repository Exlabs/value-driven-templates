import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  padding-top: 20px;
  font-size: 17px;
  color: ${({ theme }) => theme.color.fontSecondary};
`;

const StyledNumber = styled.span.attrs(
  ({ rightPosition = true }: { rightPosition: boolean }) => ({ rightPosition })
)`
  position: absolute;
  ${({ rightPosition }) => (rightPosition ? 'right: 0;' : 'left: 0;')}
  top: -100px;
  color: ${({ theme }) => theme.color.fontPrimary100};
  font-weight: 700;
  font-size: 200px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 100px;
    top: -40px;
  }
`;

interface NumberedTextProps {
  number: string;
  children: React.ReactNode;
  rightPosition?: boolean;
}

export const NumberedText = ({
  number,
  children,
  rightPosition = true,
}: NumberedTextProps) => (
  <StyledContainer className="numbered-text">
    <StyledNumber rightPosition={rightPosition} className="number-text__number">
      {number}
    </StyledNumber>
    {children}
  </StyledContainer>
);
