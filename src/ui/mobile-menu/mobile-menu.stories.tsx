import React from 'react';
import { MobileMenu } from './mobile-menu.component';
import { ThemeProvider } from '../../providers/theme.provider';

export default {
  title: 'Mobile Menu',
  component: MobileMenu,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => <MobileMenu />;
