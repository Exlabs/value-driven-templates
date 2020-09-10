import React from 'react';
import Link from 'next/link';
import { AppRoute, getInternalLink } from '../../router/app-routes';
import { Navigation } from '../navigation/navigation.component';
import { StyledNav, StyledList, StyledListItem, StyledLink } from './mobile-menu.styles';
import { useMobileMenu } from '../../hooks/use-mobile-menu/use-mobile-menu.hook';
import { toggleMobileMenu } from '../../context/mobile-menu/mobile-menu.action-creators';

export const MobileMenu = () => {
  const { dispatch } = useMobileMenu();

  const handleOnClick = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <StyledNav>
      <Navigation />
      <StyledList>
        <StyledListItem onClick={handleOnClick}>
          <Link href={getInternalLink(AppRoute.HOME)}>
            <StyledLink>HOME</StyledLink>
          </Link>
        </StyledListItem>
        <StyledListItem onClick={handleOnClick}>
          <Link href={getInternalLink(AppRoute.ABOUT)}>
            <StyledLink>ABOUT</StyledLink>
          </Link>
        </StyledListItem>
        <StyledListItem onClick={handleOnClick}>
          <Link href={getInternalLink(AppRoute.TEMPLATE)}>
            <StyledLink>TEMPLATE</StyledLink>
          </Link>
        </StyledListItem>
        <StyledListItem onClick={handleOnClick}>
          <Link href={getInternalLink(AppRoute.HOW_TO_CONTRIBUTE)}>
            <StyledLink>HOW TO CONTRIBUTE</StyledLink>
          </Link>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};
