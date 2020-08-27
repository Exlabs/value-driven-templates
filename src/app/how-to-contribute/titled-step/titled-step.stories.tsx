import React from 'react';
import { TitledStep } from './titled-step.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Titled Step',
  component: TitledStep,
  decorators: [
    (story) => (
      <ThemeProvider>
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <TitledStep title="Step 1" />;
