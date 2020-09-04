import styled from 'styled-components';

export const HeadingContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin-top: 30px;
  }
`;

export const TextContainer = styled.section`
  width: 50%;

  .number-text__number {
    font-size: 90px;
    top: -40px;
  }

  & > a {
    display: inline-block;
    margin-top: 20px;
    padding: 20px;
    font-size: 17px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .number-text__number {
      font-size: 45px;
      top: -10px;
    }

    & > a {
      font-size: 15px;
      padding: 15px;
    }
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 37px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 25px;
    text-align: center;
  }
`;

export const HeaderText = styled.p`
  font-size: 23px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 18px;
    text-align: center;
  }
`;

export const HeaderImage = styled.img`
  flex: 1;
`;
