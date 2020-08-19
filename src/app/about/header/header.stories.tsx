import React from 'react';
import { Header } from './header.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'About header',
  components: Header,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => <Header />;
