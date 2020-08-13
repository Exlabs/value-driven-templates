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

export const Navigation = () => {
  const { isMobile } = useDeviceDetect();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = React.useState(false);

  const onMobileMenuClick = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <StyledNavigation>
      <Logo>value driven templates</Logo>
      {isMobile ? (
        <Hamburger active={isMobileMenuVisible} onClick={onMobileMenuClick} />
      ) : (
        <ItemList>
          <NavigationItem>
            <Link href="/about">
              <NavigationLink>About</NavigationLink>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/how-to-contribute">
              <NavigationLink>How to contribute</NavigationLink>
            </Link>
          </NavigationItem>
        </ItemList>
      )}
    </StyledNavigation>
  );
};
