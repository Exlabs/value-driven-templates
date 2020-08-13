import React from 'react';
import { Highlight } from './highlight.component';
import { ThemeProvider } from '../../providers/theme.provider';

export default {
  title: 'Highlight',
  component: Highlight,
  decorators: [
    (story) => (
      <ThemeProvider>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <Highlight>Template</Highlight>;
