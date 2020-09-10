import React from 'react';
import { StepsContainer } from './steps-container.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Steps Container',
  component: StepsContainer,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => <StepsContainer />;
