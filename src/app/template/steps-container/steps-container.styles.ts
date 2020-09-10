/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const StyledContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 40px 0;


  &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('${process.env.ASSET_PREFIX}/icons/hero-pattern/circuit-board.svg');
        opacity: 0.05;
    }

  & > .template-step {
    max-width: 23%;
    margin: 1%;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.tablet}) {
    & > .template-step {
      max-width: 31%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      & > .template-step {
          max-width: 97%;
      }
  }
`;
