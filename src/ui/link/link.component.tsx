import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  cursor: pointer;
`;

const StyledButtonLink = styled.a`
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.primary};
  padding: 10px 30px;
  border-radius: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};
  cursor: pointer;
`;

const StyledPrimaryButtonLink = styled.a`
  background-color: ${({ theme }) => theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.primary};
  padding: 10px 30px;
  border-radius: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  type?: 'default' | 'button' | 'primaryButton';
  external?: boolean;
}

export const Link = ({
  children,
  href,
  type = 'default',
  external = false,
  ...linkProps
}: LinkProps) => {
  const linkType = (children: React.ReactNode) => {
    switch (type) {
      default:
      case 'default':
        return (
          <StyledLink href={href} {...linkProps}>
            {children}
          </StyledLink>
        );

      case 'button':
        return (
          <StyledButtonLink href={href} {...linkProps}>
            {children}
          </StyledButtonLink>
        );

      case 'primaryButton':
        return (
          <StyledPrimaryButtonLink href={href} {...linkProps}>
            {children}
          </StyledPrimaryButtonLink>
        );
    }
  };

  return (
    <>
      {external ? (
        linkType(children)
      ) : (
        <NextLink href={href}>
          <StyledLink>{linkType(children)}</StyledLink>
        </NextLink>
      )}
    </>
  );
};
