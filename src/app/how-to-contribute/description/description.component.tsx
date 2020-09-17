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
import { Link } from '../../../ui/link/link.component';
import { AppRoute } from '../../../router/app-routes';

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
              Inside <span>src/content/templates</span> directory create a new markdown
              file with the selected filename. File name will be selected as template id.
              Inside markdown file, You can write the content of the value engineering
              template. Please remember to stick to our template, which can be found
              <Link href={`${process.env.ASSET_PREFIX}/${AppRoute.TEMPLATE}`}>
                {' '}
                here.
              </Link>
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
              for Your template, where id is a content file name without extension. To
              select icon, please enter on{' '}
              <Link
                external
                href="https://www.manypixels.co/gallery/?color=6246ea&page=1&style=twoColor"
              >
                this link
              </Link>
              , select your icon and upload it to <span>public/icons/templates</span>.
            </SectionText>
          </NumberedText>
        </SectionTextContainer>
      </Section>
      <Section>
        <SectionTextContainer>
          <NumberedText number="03" rightPosition={false}>
            <SectionTitle>Pull Request</SectionTitle>
            <SectionText>
              That’s it! Well done, now You can create a new Pull Request and wait for our
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
