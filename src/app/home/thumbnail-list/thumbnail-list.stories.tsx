import React from 'react';
import { ThumbnailList } from './thumbnail-list.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Thumbnail list',
  component: ThumbnailList,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => (
  <ThumbnailList
    thumbnails={[
      {
        title: 'Architecture Decision Record',
        description:
          'Learn how to document important architectural decisions in your development team.',
        templateUrl: '/',
        icon: 'adr',
        tags: ['Architecture'],
      },
      {
        title: 'Architecture Decision Record',
        description:
          'Learn how to document important architectural decisions in your development team.',
        templateUrl: '/',
        icon: 'adr',
        tags: ['Architecture'],
      },
      {
        title: 'Architecture Decision Record',
        description:
          'Learn how to document important architectural decisions in your development team.',
        templateUrl: '/',
        icon: 'adr',
        tags: ['Architecture'],
      },
      {
        title: 'Architecture Decision Record',
        description:
          'Learn how to document important architectural decisions in your development team.',
        templateUrl: '/',
        icon: 'adr',
        tags: ['Architecture'],
      },
    ]}
  />
);

export const EmptyList = () => <ThumbnailList thumbnails={[]} />;
