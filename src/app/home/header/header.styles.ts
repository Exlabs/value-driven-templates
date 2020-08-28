import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProvideText = styled(motion.p)`
  color: ${({ theme }) => theme.color.fontSecondary};
  font-size: 23px;
  margin-bottom: 25px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const HeaderContainer = styled(motion.header)`
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 84px);
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin: 70px 0;
    height: auto;
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
    color: ${({ theme }) => theme.color.white};
    font-weight: 500;
    padding: 10px 30px;
    text-decoration: none;

    &:hover {
      color: #00000d;
    }

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      font-size: 14px;
      font-weight: 700;
      padding: 15px;
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
