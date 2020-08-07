import React from 'react';
import { TemplateThumbnail } from './template-thumbnail.component';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../../providers/theme.provider';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  & > .template-thumbnail {
    width: 33%;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    & > .template-thumbnail {
      width: 90%;
    }
  }
`;

export default {
  title: 'Template Thumbnail',
  component: TemplateThumbnail,
  decorators: [
    withKnobs,
    (story) => (
      <ThemeProvider>
        <StyledContainer>{story()}</StyledContainer>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => (
  <TemplateThumbnail
    tags={array('tags', ['#Decison Making', '#Problem Solving'])}
    title={text('title', 'Thumbnail Title')}
    description={text(
      'description',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet fringilla dolor a auctor. Morbi rutrum id mi quis accumsan. Vestibulum ut nisi porta, vestibulum leo at, vehicula neque. Nullam odio felis, venenatis vel urna ac, euismod pulvinar felis. Morbi suscipit odio vel gravida dignissim. Nullam cursus non neque id ultricies.'
    )}
    icon="adr"
    templateUrl="/"
  />
);
