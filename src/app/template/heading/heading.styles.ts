import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.section`
  width: 60%;

  .number-text__number {
    font-size: 100px;
    left: 0;
    top: -40px;
  }

  & > a {
    display: inline-block;
    margin-top: 20px;
    font-size: 17px;
    padding: 15px 30px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .number-text__number {
      font-size: 43px;
      top: -10px;
      text-align: center;
    }
  }
`;

export const Header = styled.h2`
  font-size: 41px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 24px;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 27px;
  margin: 10px 0;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 19px;
    text-align: center;
  }
`;

export const HeaderImg = styled.img`
  flex: 1;
`;
