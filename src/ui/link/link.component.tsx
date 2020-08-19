import React from 'react';
import NextLink from 'next/link';
import { StyledLink, StyledButtonLink, StyledPrimaryButtonLink } from './link.styles';

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
        <NextLink href={href}>{linkType(children)}</NextLink>
      )}
    </>
  );
};
