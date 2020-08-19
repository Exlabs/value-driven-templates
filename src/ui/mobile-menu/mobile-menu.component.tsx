import React from 'react';
import Link from 'next/link';
import { AppRoute, getInternalLink } from '../../router/app-routes';
import { Navigation } from '../navigation/navigation.component';
import { StyledNav, StyledList, StyledListItem, StyledLink } from './mobile-menu.styles';

export const MobileMenu = () => {
  return (
    <StyledNav>
      <Navigation />
      <StyledList>
        <StyledListItem>
          <Link href={getInternalLink(AppRoute.HOME)}>
            <StyledLink>HOME</StyledLink>
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href={getInternalLink(AppRoute.ABOUT)}>
            <StyledLink>ABOUT</StyledLink>
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href={getInternalLink(AppRoute.HOW_TO_CONTRIBUTE)}>
            <StyledLink>HOW TO CONTRIBUTE</StyledLink>
          </Link>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};
