import React from 'react';
import { NumberedText } from '../numbered-text/numbered-text.component';
import { SpecialSection } from '../special-section/special-section.component';
import { AppContainer } from '../../../providers/layout.provider';
import {
  DescriptionContainer,
  ExpertsHeading,
  FirstSection,
  FourthSection,
  StyledImage,
  ThirdSection,
} from './description.styles';

export const Description = () => {
  return (
    <DescriptionContainer>
      <AppContainer>
        <ExpertsHeading id="experts">
          Built by experts for <span>experts</span>
        </ExpertsHeading>
        <FirstSection>
          <StyledImage
            alt="Introduction"
            src={`${process.env.ASSET_PREFIX}/icons/rocket.svg`}
          />
          <NumberedText number="01">
            In digital-first world, effectiveness in delivering software initiatives is
            what makes or brakes organisations. Yet many IT teams suffer from lack of true
            alignment with business goals, which results in software becoming a cost
            generator instead of an assets. There’s now a handful number of resources and
            tools helping engineers improve software delivery performance, though most of
            them don’t fill the gap when it comes to match IT strategy with delivery.
          </NumberedText>
        </FirstSection>
      </AppContainer>
      <SpecialSection />
      <AppContainer>
        <ThirdSection>
          <StyledImage
            alt="navigation"
            src={`${process.env.ASSET_PREFIX}/icons/navigation.svg`}
          />
          <NumberedText number="03">
            Your enterprise’s software ecosystem is most likely very complex and you need
            a great roadmap to navigate it. In order to help organisations reduce waste
            and guess work, we’ve created a curated list of resources and frameworks we
            use in our day-to-day practice.
          </NumberedText>
        </ThirdSection>
        <FourthSection>
          <NumberedText number="04">
            “We believe the knowledge we share here will help IT groups improve their
            planning, delivery and maintenance processes, which would result in delivering
            software assets better suited for unique business needs.”
            <span className="exlabs-team">- Exlabs Team</span>
          </NumberedText>
          <StyledImage
            alt="sharing"
            src={`${process.env.ASSET_PREFIX}/icons/sharing.svg`}
          />
        </FourthSection>
      </AppContainer>
    </DescriptionContainer>
  );
};
