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
    <StyledNav
      initial={{
        height: 0,
      }}
      animate={{
        height: '100vh',
        transition: {
          duration: 0.3,
          easings: true,
        },
      }}
    >
      <Navigation />
      <StyledList>
        <StyledListItem
          onClick={handleOnClick}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, easings: true, delay: 0.2 },
          }}
        >
          <Link href={getInternalLink(AppRoute.HOME)}>
            <StyledLink>HOME</StyledLink>
          </Link>
        </StyledListItem>
        <StyledListItem
          onClick={handleOnClick}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, easings: true, delay: 0.3 },
          }}
        >
          <Link href={getInternalLink(AppRoute.ABOUT)}>
            <StyledLink>ABOUT</StyledLink>
          </Link>
        </StyledListItem>
        <StyledListItem
          onClick={handleOnClick}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, easings: true, delay: 0.4 },
          }}
        >
          <Link href={getInternalLink(AppRoute.HOW_TO_CONTRIBUTE)}>
            <StyledLink>HOW TO CONTRIBUTE</StyledLink>
          </Link>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};
