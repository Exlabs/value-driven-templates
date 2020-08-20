import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const StyledImage = styled.img`
  width: 50%;
  animation: floating 6s ease-in-out infinite;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
    margin: 20px 0;
  }
`;

export const TextContainer = styled.section`
  padding-left: 20px;
  display: flex;
  flex-direction: column;

  & > a {
    display: block;
    margin-top: 30px;
    width: fit-content;
    padding: 20px 25px;
    color: ${({ theme }) => theme.color.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    padding-left: 0;
    align-items: center;

    & > a {
      text-align: center;
      padding: 10px 20px;
    }
  }
`;

export const StyledTitle = styled.h2`
  font-size: 70px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 31px;
    text-align: center;
  }
`;

export const StyledDescription = styled.p`
  margin-top: 20px;
  max-width: 70%;
  font-size: 30px;

  & > span {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin-top: 0;
    font-size: 21px;
    max-width: 100%;
    text-align: center;
  }
`;
