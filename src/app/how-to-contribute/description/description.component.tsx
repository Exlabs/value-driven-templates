import React from 'react';
import {
  DescriptionContainer,
  DescriptionTitle,
  Section,
  SectionImage,
  SectionImageContainer,
  SectionText,
  SectionTextContainer,
  SectionTitle,
} from './description.styles';
import { NumberedText } from '../../about/numbered-text/numbered-text.component';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

export const Description = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <DescriptionContainer>
      <DescriptionTitle id="share">
        How to share your <span>knowledge</span>
      </DescriptionTitle>
      <Section>
        <SectionTextContainer>
          <NumberedText number="01" rightPosition={false}>
            <SectionTitle>Create the content</SectionTitle>
            <SectionText>
              Inside src/content/articles directory create a new markdown file with the
              selected filename. Inside markdown file, You can write the content of Your
              article, remember article title, description, and image, will be added in
              the next step.
            </SectionText>
          </NumberedText>
        </SectionTextContainer>
        <SectionImageContainer backgroundImage="floating-cogs">
          <SectionImage
            alt="content section"
            src={`${process.env.ASSET_PREFIX}/icons/contribute/content.svg`}
          />
        </SectionImageContainer>
      </Section>
      <Section
        style={{
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <SectionImageContainer backgroundImage="circuit-board">
          <SectionImage
            alt="content section"
            src={`${process.env.ASSET_PREFIX}/icons/contribute/metadata.svg`}
          />
        </SectionImageContainer>
        <SectionTextContainer>
          <NumberedText number="02">
            <SectionTitle>Add template metadata</SectionTitle>
            <SectionText>
              Go to src/content/templates.json and add a new object with proper metadata
              for Your article, where fileName is just a plain name without extension of
              Your article content markdown file, imageUrl is a static file taken from the
              public directory or dynamic URL. Lastly, add Your nickname in the author
              field.
            </SectionText>
          </NumberedText>
        </SectionTextContainer>
      </Section>
      <Section>
        <SectionTextContainer>
          <NumberedText number="03" rightPosition={false}>
            <SectionTitle>Pull Request</SectionTitle>
            <SectionText>
              That’s it! Well done, now You can create a new Pull Request and wait for
              approval!
            </SectionText>
          </NumberedText>
        </SectionTextContainer>
        <SectionImageContainer backgroundImage="glamorous">
          <SectionImage
            alt="content section"
            src={`${process.env.ASSET_PREFIX}/icons/contribute/pr.svg`}
          />
        </SectionImageContainer>
      </Section>
    </DescriptionContainer>
  );
};
