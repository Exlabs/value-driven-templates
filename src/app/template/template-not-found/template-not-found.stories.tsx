import React from 'react';
import { TemplateNotFound } from './template-not-found.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Template Not Found',
  components: TemplateNotFound,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => <TemplateNotFound />;
