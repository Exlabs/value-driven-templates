import React from 'react';
import { Navigation } from './navigation.component';
import { ThemeProvider } from '../../providers/theme.provider';

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => <Navigation />;
