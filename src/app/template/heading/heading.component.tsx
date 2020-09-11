import React from 'react';
import { NumberedText } from '../../about/numbered-text/numbered-text.component';
import { Link } from '../../../ui/link/link.component';
import {
  StyledHeader,
  Description,
  Header,
  HeaderImg,
  TextContainer,
} from './heading.styles';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

export const TemplateHeading = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <StyledHeader>
      <TextContainer>
        <NumberedText number="The template">
          <Header>Contribution Template</Header>
          {isMobile && (
            <HeaderImg
              alt="Template header"
              src={`${process.env.ASSET_PREFIX}/icons/template/heading.svg`}
            />
          )}
          <Description>
            To achieve consistency, we try to stick to the same template as possible.
          </Description>
        </NumberedText>
        <Link href={`${process.env.ASSET_PREFIX}/templates/adr`} type="primaryButton">
          Check out the example
        </Link>
      </TextContainer>
      {!isMobile && (
        <HeaderImg
          alt="Template header"
          src={`${process.env.ASSET_PREFIX}/icons/template/heading.svg`}
        />
      )}
    </StyledHeader>
  );
};
