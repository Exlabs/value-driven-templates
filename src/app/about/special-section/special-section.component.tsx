import React from 'react';
import { NumberedText } from '../numbered-text/numbered-text.component';
import { AppContainer } from '../../../providers/layout.provider';
import { SectionContainer, SectionImage } from './special-section.styles';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

export const SpecialSection = () => {
  const { isMobile } = useDeviceDetect();
  return (
    <div style={{ position: 'relative' }}>
      <SectionContainer>
        <AppContainer>
          <NumberedText number="02">
            <p className="exlabs-believe">
              At Exlabs, we believe that the true alignment between management and
              engineers can only be achieved by helping both sides speak the same
              language.
              {isMobile && (
                <SectionImage
                  alt="Exlabs goal"
                  src={`${process.env.ASSET_PREFIX}/icons/data.svg`}
                />
              )}
            </p>
            <p style={{ marginTop: '15px' }}>
              That’s why we’ve came up with a concept of Value Driven Engineering which
              manifests a need to focus on results rather than actions. In days of
              ubiquitous dependency on software, results are more multi-dimensional than
              ever before. It’s not longer possible to measure business benefit simply by
              direct ROI from implemented change.
            </p>
          </NumberedText>
          {!isMobile && (
            <SectionImage
              alt="Exlabs goal"
              src={`${process.env.ASSET_PREFIX}/icons/data.svg`}
            />
          )}
        </AppContainer>
      </SectionContainer>
    </div>
  );
};
