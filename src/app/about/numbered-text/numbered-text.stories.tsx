import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { NumberedText } from './numbered-text.component';
import { ThemeProvider } from '../../../providers/theme.provider';

export default {
  title: 'Numbered Text',
  component: NumberedText,
  decorators: [
    withKnobs,
    (story) => (
      <ThemeProvider>
        <div
          style={{
            maxWidth: '600px',
            paddingTop: '80px',
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => (
  <NumberedText
    number={text('number', '01')}
    rightPosition={boolean('rightPosition', true)}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, elit eu dictum
    mattis, erat risus imperdiet ipsum, at sagittis erat lorem id odio. Vestibulum ante
    ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque quis
    mi sit amet tortor pharetra vestibulum a id risus. Vivamus elementum sem ut velit
    volutpat viverra. Donec facilisis dignissim odio, sit amet venenatis nunc ultricies
    ac. Aenean sollicitudin vel ligula fermentum pharetra. In dapibus felis tellus, in
    vestibulum lectus euismod rhoncus. Cras commodo, eros eget tempus tincidunt, neque
    felis pretium orci, rhoncus lacinia augue nulla a justo. Suspendisse vitae velit et
    nisi pharetra auctor. Curabitur et purus ac odio gravida efficitur.
  </NumberedText>
);
