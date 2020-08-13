import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHighlight = styled(motion.span)`
  position: relative;
  color: ${({ theme }) => theme.color.white};
  z-index: 1;
  display: inline-block;

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.color.primary};
    top: -2px;
    height: calc(100% + 4px);
    position: absolute;
    z-index: -99;
    animation: shrink 0.9s forwards;
  }

  @keyframes shrink {
    0% {
      width: 0;
      left: 100%;
    }

    100% {
      left: -6px;
      width: calc(100% + 12px);
    }
  }
`;
