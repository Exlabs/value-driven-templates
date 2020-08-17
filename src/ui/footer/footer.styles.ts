import styled from 'styled-components';
import { Link } from '../link/link.component';

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 2px dashed ${({ theme }) => theme.color.gray300};
  padding-top: 20px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PoweredByContainer = styled.section`
  flex: 1;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PoweredByTitle = styled.h4`
  font-weight: 700;
  font-size: 31px;
  color: ${({ theme }) => theme.color.fontPrimary};

  & > span {
    color: ${({ theme }) => theme.color.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 21px;
    text-align: center;
  }
`;

export const PoweredByDescription = styled.p`
  color: ${({ theme }) => theme.color.fontSecondary};
  font-size: 23px;
  max-width: 50%;
  margin-top: 5px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 17px;
    text-align: center;
    max-width: 100%;
  }
`;

export const SocialContainer = styled.div`
  margin-top: 30px;

  & a {
    margin: 0 8px;
  }

  & a:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin-top: 20px;
  }
`;

export const SocialLink = styled(Link)``;

export const SocialIcon = styled.img`
  width: 40px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 30px;
  }
`;

export const ActionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  & > a {
    padding: 15px 40px;

    @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
      padding: 10px 20px;
      font-size: 12px;
    }
  }

  & a:first-child {
    margin-right: 10px;
  }
`;

export const Copyright = styled.p`
  font-weight: 500;
  font-size: 17px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin-top: 10px;
    font-size: 13px;
  }
`;
