import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.color.primary};
  padding: 200px 0 60px 50px;
  border-top-left-radius: 80% 110%;
  border-top-right-radius: 80% 110%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .numbered-text {
      flex: 1;
      font-size: 21px;
      color: ${({ theme }) => theme.color.white};

      & > span {
        color: ${({ theme }) => theme.color.white100};
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    border-top-left-radius: 200% 50%;
    border-top-right-radius: 200% 50%;
    padding: 100px 0 60px 20px;

    & > div {
      & .numbered-text {
        font-size: 17px;
      }

      & .exlabs-believe {
        display: flex;
        align-items: flex-end;
      }
    }
  }
`;

export const SectionImage = styled.img`
  width: 45%;
`;
