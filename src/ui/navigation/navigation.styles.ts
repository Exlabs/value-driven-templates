import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.fontPrimary};
  }
`;

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 21px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 18px;
    max-width: 70%;
  }
`;

export const ItemList = styled.ul`
  list-style: none;
  display: flex;

  & > li:last-child {
    margin-right: 0;
  }
`;

export const NavigationItem = styled.li`
  margin-right: 15px;
`;

export const NavigationLink = styled.a`
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
`;
