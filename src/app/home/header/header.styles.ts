import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 35px);
  position: relative;
  opacity: 0;
  animation: showHeader 1s forwards;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin: 70px 0;
    height: auto;
  }

  p {
    color: ${({ theme }) => theme.color.fontSecondary};
    font-size: 23px;
    margin-bottom: 25px;
    animation: moveDown 1s forwards;
    opacity: 0;

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }

  h2 {
    max-width: 80%;
    font-size: 60px;
    color: ${({ theme }) => theme.color.fontPrimary};

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      max-width: 100%;
      font-size: 27px;
    }
  }

  a {
    font-size: 23px;
    margin-top: 50px;
    animation: moveUp 0.5s forwards;
    animation-delay: 1s;
    opacity: 0;
    color: ${({ theme }) => theme.color.white};
    font-weight: 500;
    padding: 10px 30px;

    &:hover {
      color: #00000d;
    }

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      font-size: 13px;
      font-weight: 700;
      padding: 10px 15px;
    }
  }
`;

export const PoweredByText = styled.h3`
  font-size: 40px;
  opacity: 0.5;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${({ theme }) => theme.color.fontPrimary};

  & > span {
    color: ${({ theme }) => theme.color.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 18px;
    position: initial;
    margin-top: 60px;
    opacity: 0;

    animation: showText 1s forwards;
    animation-delay: 1.3s;
  }
`;

export const GreenHighlight = styled.span`
  color: ${({ theme }) => theme.color.secondary};
`;
