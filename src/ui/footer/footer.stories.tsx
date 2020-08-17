import React from 'react';
import { Footer } from './footer.component';
import { ThemeProvider } from '../../providers/theme.provider';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => <Footer />;
