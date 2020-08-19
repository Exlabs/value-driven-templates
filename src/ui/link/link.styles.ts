import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  cursor: pointer;
`;

export const StyledButtonLink = styled.a`
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.primary};
  padding: 10px 30px;
  border-radius: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};
  cursor: pointer;
  text-decoration: none;
`;

export const StyledPrimaryButtonLink = styled.a`
  background-color: ${({ theme }) => theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.primary};
  padding: 10px 30px;
  border-radius: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  text-decoration: none;
`;
