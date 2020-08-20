import React from 'react';
import Link from 'next/link';
import { useDeviceDetect } from '../../hooks/use-device-detect/use-device-detect.hook';
import { Hamburger } from '../hamburger/hamburger.component';
import {
  StyledNavigation,
  Logo,
  ItemList,
  NavigationItem,
  NavigationLink,
  LogoImage,
} from './navigation.styles';
import { AppRoute, getInternalLink } from '../../router/app-routes';
import { useMobileMenu } from '../../hooks/use-mobile-menu/use-mobile-menu.hook';
import { toggleMobileMenu } from '../../context/mobile-menu/mobile-menu.action-creators';

export const Navigation = () => {
  const { isMobile } = useDeviceDetect();
  const {
    state: { isVisible: isMobileMenuVisible },
    dispatch,
  } = useMobileMenu();

  const handleHamburgerClick = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <StyledNavigation className="navigation">
      <Link href={getInternalLink(AppRoute.HOME)}>
        <a>
          <LogoImage src={`${process.env.ASSET_PREFIX}/icons/logo.svg`} />
          <Logo>value driven templates</Logo>
        </a>
      </Link>
      {isMobile ? (
        <Hamburger active={isMobileMenuVisible} onClick={handleHamburgerClick} />
      ) : (
        <ItemList>
          <NavigationItem>
            <Link href={getInternalLink(AppRoute.ABOUT)}>
              <NavigationLink>About</NavigationLink>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href={getInternalLink(AppRoute.HOW_TO_CONTRIBUTE)}>
              <NavigationLink>How to contribute</NavigationLink>
            </Link>
          </NavigationItem>
        </ItemList>
      )}
    </StyledNavigation>
  );
};
