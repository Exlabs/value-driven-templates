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

export const EmptyListInfo = styled.h3`
  font-size: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.fontSecondary};

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 16px;
  }
`;
