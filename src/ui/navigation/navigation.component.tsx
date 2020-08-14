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
} from './navigation.styles';
import { AppRoute } from '../../router/app-routes';
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
    <StyledNavigation>
      <Link href={AppRoute.HOME}>
        <a>
          <Logo>value driven templates</Logo>
        </a>
      </Link>
      {isMobile ? (
        <Hamburger active={isMobileMenuVisible} onClick={handleHamburgerClick} />
      ) : (
        <ItemList>
          <NavigationItem>
            <Link href={AppRoute.ABOUT}>
              <NavigationLink>About</NavigationLink>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href={AppRoute.HOW_TO_CONTRIBUTE}>
              <NavigationLink>How to contribute</NavigationLink>
            </Link>
          </NavigationItem>
        </ItemList>
      )}
    </StyledNavigation>
  );
};
