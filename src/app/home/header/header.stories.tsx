import React from 'react';
import { Header } from './header.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Header',
  component: Header,
  decorators: [
    (story) => (
      <ThemeProvider>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <Header />;
