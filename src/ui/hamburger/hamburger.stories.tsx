import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Hamburger } from './hamburger.component';
import { ThemeProvider } from '../../providers/theme.provider';

export default {
  title: 'Hamburger',
  component: Hamburger,
  decorators: [withKnobs, (story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => (
  <Hamburger active={boolean('active', false)} onClick={action('onClick')} />
);
