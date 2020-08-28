import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../ui/link/link.component';

const StyledContainer = styled.section`
  width: 100%;
  height: calc(100vh - 85px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > a {
    font-size: 19px;
    margin-top: 20px;
    padding: 15px 50px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    border: 1px solid red;

    & > a {
      font-size: 17px;
      margin-top: 20px;
      padding: 15px 30px;
    }
  }
`;

const Text = styled.h2`
  margin-top: -100px;
  color: ${({ theme }) => theme.color.fontPrimary};
  font-size: 31px;
  font-weight: 700;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 23px;
    margin-top: -50px;
  }
`;

const NotFoundIcon = styled.img`
  width: 60%;
`;

export const TemplateNotFound = () => (
  <StyledContainer>
    <NotFoundIcon alt="Not Found" src={`${process.env.ASSET_PREFIX}/icons/404.svg`} />
    <Text>It looks like template does not exist...</Text>
    <Link href={`${process.env.ASSET_PREFIX}/`} type="primaryButton">
      Go back home
    </Link>
  </StyledContainer>
);
