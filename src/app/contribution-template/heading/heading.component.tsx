import React from 'react';
import { NumberedText } from '../../about/numbered-text/numbered-text.component';
import {
  HeadingContainer,
  HeaderImage,
  HeaderText,
  HeaderTitle,
  TextContainer,
} from './heading.styles';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import { Link } from '../../../ui/link/link.component';

export const HeadingComponent = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <HeadingContainer>
      <TextContainer>
        <NumberedText number="The template" rightPosition={false}>
          <HeaderTitle>Contribution Template</HeaderTitle>
          {isMobile && (
            <HeaderImage
              alt="Contribution template header"
              src={`${process.env.ASSET_PREFIX}/icons/template/heading.svg`}
            />
          )}
          <HeaderText>
            To achieve consistency, we try to stick to the same template as possible.
          </HeaderText>
        </NumberedText>
        <Link href="" type="primaryButton">
          Check out the example
        </Link>
      </TextContainer>
      {!isMobile && (
        <HeaderImage
          alt="Contribution template header"
          src={`${process.env.ASSET_PREFIX}/icons/template/heading.svg`}
        />
      )}
    </HeadingContainer>
  );
};
