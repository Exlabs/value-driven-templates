import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    height: auto;
  }

  p {
    color: ${({ theme }) => theme.color.fontSecondary};
    font-size: 23px;
    margin-bottom: 25px;
    animation: moveDown 1s forwards;
    opacity: 0;

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      font-size: 11px;
      margin-bottom: 10px;
    }
  }

  h2 {
    max-width: 80%;
    font-size: 60px;

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.tablet}) {
      font-size: 31px;
    }

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      max-width: 90%;
      font-size: 25px;
    }
  }

  a {
    font-size: 23px;
    margin-top: 35px;
    animation: showButton 0.5s forwards;
    animation-delay: 1s;
    opacity: 0;

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      font-size: 14px;
    }
  }

  @keyframes showButton {
    0% {
      transform: translateY(30px);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes moveDown {
    0% {
      transform: translateY(-50px);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const PoweredByText = styled.h3`
  font-size: 40px;
  opacity: 0.5;
  position: absolute;
  bottom: 10px;
  right: 10px;

  & > span {
    color: ${({ theme }) => theme.color.primary};
  }

  @keyframes showText {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 16px;
    position: initial;
    margin-top: 60px;
    opacity: 0;

    animation: showText 1s forwards;
    animation-delay: 1.5s;
  }
`;

export const GreenHighlight = styled.span`
  color: ${({ theme }) => theme.color.secondary};
`;
