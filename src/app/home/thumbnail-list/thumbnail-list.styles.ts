import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledListItem = styled.li`
  width: 31%;
  margin: 1%;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.tablet}) {
    width: 48%;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
  }
`;
