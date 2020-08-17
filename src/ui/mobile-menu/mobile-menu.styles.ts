import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  height: 100vh;
  width: 100%;
  padding: 10px 20px;
  z-index: 9999;
`;

export const StyledList = styled.ul`
  list-style: none;

  & > li:first-child {
    border-top: 1px solid ${({ theme }) => theme.color.gray400};

    margin-top: 30px;
  }
`;

export const StyledListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray400};
  padding: 10px 0;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  font-size: 21px;
  color: ${({ theme }) => theme.color.fontPrimary};
`;
