import React from 'react';
import { Step } from '../step/step.component';
import { NumberedPoint } from '../numbered-point/numbered-point.component';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import { TitledStep } from '../titled-step/titled-step.component';
import {
  DescriptionContainer,
  DescriptionTitle,
  FirstSection,
  SecondSection,
  ThirdSection,
} from './description.styles';

export const Description = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <DescriptionContainer>
      <DescriptionTitle id="share">
        How to share your <span>knowledge</span>
      </DescriptionTitle>
      <FirstSection>
        {isMobile && <TitledStep title="Step 1" />}
        <Step
          title="Create the content"
          imageUrl={`${process.env.ASSET_PREFIX}/icons/contribute/content.svg`}
        >
          Inside src/content/articles directory create a new markdown file with the
          selected filename. Inside markdown file, You can write the content of Your
          article, remember article title, description, and image, will be added in the
          next step.
        </Step>
        {!isMobile && <NumberedPoint value={1} />}
      </FirstSection>
      <SecondSection>
        {isMobile && <TitledStep title="Step 2" />}
        <Step
          title="Add template metadata"
          imageUrl={`${process.env.ASSET_PREFIX}/icons/contribute/metadata.svg`}
        >
          Go to src/content/templates.json and add a new object with proper metadata for
          Your article, where fileName is just a plain name without extension of Your
          article content markdown file, imageUrl is a static file taken from the public
          directory or dynamic URL. Lastly, add Your nickname in the author field.
        </Step>
        {!isMobile && <NumberedPoint value={2} />}
      </SecondSection>
      <ThirdSection>
        {isMobile && <TitledStep title="Step 3" />}
        <Step
          title="Pull Request"
          imageUrl={`${process.env.ASSET_PREFIX}/icons/contribute/pr.svg`}
        >
          That’s it! Well done, now You can create a new Pull Request and wait for
          approval!
        </Step>
        {!isMobile && <NumberedPoint value={3} />}
      </ThirdSection>
    </DescriptionContainer>
  );
};
