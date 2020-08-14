import React from 'react';
import {
  MobileMenuContext,
  MobileMenuApi,
} from '../../context/mobile-menu/mobile-menu.context';

export const useMobileMenu = () => {
  const context = React.useContext(MobileMenuContext) as MobileMenuApi;

  if (!context) {
    throw new Error('useMobieMenu should be used within MobileMenuProvider');
  }

  return context;
};
