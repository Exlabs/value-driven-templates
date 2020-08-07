import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.fontPrimary};
  user-select: none;
  cursor: pointer;
`;

export const Template = styled(motion.article)`
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  padding: 10px 20px 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TemplateHeader = styled.header``;

export const TemplateImage = styled.img`
  height: 200px;
`;

export const TemplateTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 19px;
    text-align: center;
  }
`;

export const TagsContainer = styled.div`
  margin: 5px 0;
  width: 100%;
  & > .tag {
    font-size: 14px;
    padding: 6px 15px;
    margin: 1%;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    display: flex;
    flex-wrap: wrap;

    & > .tag {
      font-size: 11px;
    }
  }
`;

export const TemplateDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.fontSecondary};
  line-height: 23px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 14px;
  }
`;
