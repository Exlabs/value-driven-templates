import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    padding: 60px 0 60px 80px;
    & > .contribute-step {
      width: 80%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    display: flex;
    flex-direction: column;

    & > .titled-step {
      margin-bottom: 20px;
    }
  }
`;

export const DescriptionContainer = styled.article`
  margin-top: 50px;
  max-width: 90%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    max-width: 100%;
  }
`;

export const DescriptionTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};

  & > span {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 25px;
  }
`;

export const FirstSection = styled(StyledSection)`
  margin-top: 30px;

  @media screen and (min-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    border-bottom: 3px solid ${({ theme }) => theme.color.gray400};

    & > .numbered-point {
      position: absolute;
      left: -40px;
      top: calc(50% - 40px);
      z-index: 10;
    }

    &::after {
      content: '';
      position: absolute;
      width: 3px;
      height: 50%;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.color.gray400};
    }
  }
`;

export const SecondSection = styled(StyledSection)`
  justify-content: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    margin: 30px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    padding: 60px 80px 60px 0;
    border-right: 3px solid ${({ theme }) => theme.color.gray400};

    & > .numbered-point {
      position: absolute;
      right: -40px;
      top: calc(50% - 40px);
      z-index: 10;
    }
  }
`;

export const ThirdSection = styled(StyledSection)`
  @media screen and (min-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    border-top: 3px solid ${({ theme }) => theme.color.gray400};

    & > .numbered-point {
      position: absolute;
      left: -40px;
      top: calc(50% - 40px);
      z-index: 10;
    }

    &::after {
      content: '';
      position: absolute;
      width: 3px;
      height: 50%;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.color.gray400};
    }
  }
`;
