import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    padding-top: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextSection = styled.section`
  max-width: 50%;
  display: flex;
  flex-direction: column;

  & > a {
    margin-top: 20px;
    padding: 20px 40px;
    width: fit-content;
    display: inline-block;
    color: ${({ theme }) => theme.color.primary};
    font-size: 17px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    max-width: 100%;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 80px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};

  & > span {
    color: ${({ theme }) => theme.color.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 37px;
  }
`;

export const HeaderDescription = styled.p`
  max-width: 70%;
  font-size: 27px;
  padding-left: 5px;
  color: ${({ theme }) => theme.color.fontSecondary};

  & > span {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 21px;
    max-width: 100%;
    text-align: center;
  }
`;

export const HeaderImage = styled.img`
  width: 60%;
  animation: floating 6s ease-in-out infinite;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 70%;
    margin: 20px 0;
  }
`;
