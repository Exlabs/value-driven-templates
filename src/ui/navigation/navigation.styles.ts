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
    display: flex;
    align-items: center;
  }
`;

export const LogoImage = styled.img`
  width: 30px;
  margin-right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 35px;
  }
`;

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 23px;
  color: ${({ theme }) => theme.color.fontPrimary};

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
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.color.fontPrimary};
`;
