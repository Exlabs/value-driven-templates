import React from 'react';
import Tag from './tag.component';
import { ThemeProvider } from '../../providers/theme.provider';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Tag',
  component: Tag,
  decorators: [
    withKnobs,
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

export const Default = () => <Tag active>{text('text', '#Decision making')}</Tag>;

export const Checkable = () => (
  <Tag.Checkable active onClick={action('onClick')}>
    {text('text', '#Decision making')}
  </Tag.Checkable>
);
