import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Link } from './link.component';
import { ThemeProvider } from '../../providers/theme.provider';

export default {
  title: 'Link',
  component: Link,
  decorators: [
    withKnobs,
    (story) => (
      <ThemeProvider>
        <div
          style={{
            marginTop: '20px',
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => (
  <Link href="/" type={select('type', ['default', 'button', 'primaryButton'], 'default')}>
    Test link
  </Link>
);

export const External = () => (
  <Link
    href="http://www.google.com"
    external
    type={select('type', ['default', 'button', 'primaryButton'], 'default')}
  >
    Go to google
  </Link>
);
