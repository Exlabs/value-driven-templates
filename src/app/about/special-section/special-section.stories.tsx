import React from 'react';
import { SpecialSection } from './special-section.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Special About Section',
  component: SpecialSection,
  decorators: [
    (story) => (
      <ThemeProvider>
        <div
          style={{
            paddingTop: '100px',
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <SpecialSection />;
