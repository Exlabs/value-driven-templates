import styled from 'styled-components';

export const DescriptionContainer = styled.article``;

export const ExpertsHeading = styled.h3`
  font-size: 27px;
  margin-top: 80px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.color.fontPrimary};

  & > span {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    padding: 0 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 21px;
  }
`;

export const FirstSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .numbered-text {
    flex: 1;
    font-size: 21px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 21px;
    max-width: 100%;
    text-align: center;
    flex-direction: column;

    & > .numbered-text {
      font-size: 17px;
    }
  }
`;

export const StyledImage = styled.img`
  width: 45%;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
  }
`;

export const ThirdSection = styled.section`
  display: flex;
  margin-top: 50px;
  position: relative;
  justify-content: flex-end;
  min-height: 300px;

  & > .numbered-text {
    width: 60%;
    font-size: 21px;
  }

  & > img {
    position: absolute;
    top: -160px;
    left: -40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: -70px;

    & > .numbered-text {
      width: 100%;
      font-size: 17px;
    }

    & > img {
      position: initial;
    }
  }
`;

export const FourthSection = styled.section`
  margin-top: 40px;
  display: flex;
  align-items: flex-end;

  & > .numbered-text {
    width: 60%;
    margin-bottom: 40px;
    font-size: 21px;
    font-weight: 700;

    & > .exlabs-team {
      display: block;
      font-weight: 400;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    flex-direction: column-reverse;

    & > .numbered-text {
      width: 100%;
      font-size: 17px;
      margin-top: 20px;
    }
  }
`;
