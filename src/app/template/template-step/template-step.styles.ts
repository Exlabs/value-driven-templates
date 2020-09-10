import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.color.primary400};
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    padding: 10px;
  }
`;

export const StepIcon = styled.img`
  width: 60%;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 40%;
  }
`;

export const StepTitle = styled.h3`
  font-size: 21px;
  font-weight: 700;
  margin: 10px 0;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 18px;
  }
`;

export const DescriptionContainer = styled(motion.section)`
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.primary400};
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;
`;

export const Description = styled.p`
  font-size: 17px;
  margin-top: 20px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 15px;
  }
`;
