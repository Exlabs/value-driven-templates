import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { theme } from '../theme/theme-config';
import { ResetStyles } from '../theme/reset-styles';
import { GlobalStyles } from '../theme/global-styles';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence exitBeforeEnter>
    <StyledThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  </AnimatePresence>
);
