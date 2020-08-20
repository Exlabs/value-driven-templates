import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Step } from './step.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Contribute Step',
  component: Step,
  decorators: [
    withKnobs,
    (story) => (
      <ThemeProvider>
        <div
          style={{
            padding: '20px',
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => (
  <Step
    title={text('title', 'Contribution Step Title')}
    imageUrl={`${process.env.ASSET_PREFIX}/icons/contribute/content.svg`}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada nibh
    at tristique pharetra. Cras quis sagittis sem. Fusce consectetur arcu at ante blandit
    elementum. Donec vehicula purus semper nisi elementum ultrices. Quisque scelerisque
    sagittis dignissim. Nam accumsan pretium sem vitae tempus. Praesent egestas
    pellentesque nunc a sagittis. Nunc molestie viverra justo, ut convallis augue. Fusce
    id purus tincidunt, dictum metus ut, ultricies nibh. Curabitur consequat aliquam ex,
    sit amet tristique ante feugiat in. Phasellus in dictum nisi. In condimentum mi at
    posuere ullamcorper. Etiam ultrices sem sed accumsan feugiat. Sed et nunc id risus
    scelerisque cursus vitae a urna. Sed tristique fermentum nibh mollis fringilla. Etiam
    suscipit aliquam porta. Nam maximus magna nec diam convallis condimentum. Aliquam
    fermentum arcu et neque volutpat posuere. Vivamus hendrerit diam eu diam semper, non
    fringilla diam consectetur. Interdum et malesuada fames ac ante ipsum primis in
    faucibus. Phasellus cursus dui augue, convallis congue dui blandit posuere. Orci
    varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Fusce nec feugiat diam. Pellentesque pharetra velit nisl, nec fermentum libero
    lobortis vitae. Phasellus vitae turpis et urna vulputate porta.
  </Step>
);
