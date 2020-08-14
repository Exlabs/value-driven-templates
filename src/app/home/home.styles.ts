import styled from 'styled-components';

export const LatestHeader = styled.h2`
  font-weight: 700;
  font-size: 50px;
  margin: 70px 0 30px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 23px;
  }

  & > span {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    padding: 0 10px;
  }
`;
