import React from 'react';
import { TemplateStep } from './template-step.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Template Step',
  component: TemplateStep,
  decorators: [(story) => <ThemeProvider>{story()}</ThemeProvider>],
};

export const Default = () => (
  <div
    style={{
      maxWidth: '400px',
    }}
  >
    <TemplateStep
      icon="calculator"
      title="1. Short introduction"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex laoreet,
    tempus libero ut, dapibus sapien. Ut id lacus eu nulla malesuada efficitur.
    Cras ornare semper quam non euismod. Vestibulum dictum diam mi, a vulputate
    tortor pharetra a. Vivamus auctor rhoncus erat. Aenean auctor velit non tellus
    bibendum, sit amet pellentesque purus gravida. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Cras et ex laoreet, tempus libero ut, dapibus
    sapien. Ut id lacus eu nulla malesuada efficitur."
    />
  </div>
);
