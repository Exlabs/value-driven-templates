import React from 'react';
import { NumberedPoint } from './numbered-point.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Numbered Point',
  component: NumberedPoint,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => <NumberedPoint value={1} />;
