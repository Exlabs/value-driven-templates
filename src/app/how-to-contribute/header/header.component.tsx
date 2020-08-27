import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Highlight } from '../../../ui/highlight/highlight.component';
import { Link } from '../../../ui/link/link.component';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import {
  StyledHeader,
  StyledDescription,
  StyledImage,
  StyledTitle,
  TextContainer,
} from './header.styles';

export const Header = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <StyledHeader>
      {!isMobile && (
        <StyledImage
          alt="How to contribute"
          src={`${process.env.ASSET_PREFIX}/icons/contribute.svg`}
        />
      )}
      <TextContainer>
        <StyledTitle>
          Sharing is <Highlight>caring</Highlight>
        </StyledTitle>
        {isMobile && (
          <StyledImage
            alt="How to contribute"
            src={`${process.env.ASSET_PREFIX}/icons/contribute.svg`}
          />
        )}
        <StyledDescription>
          Want to share your <span>knowledge</span>? You can learn here how.
        </StyledDescription>
        <Link href="#share" type="button">
          <AnchorLink href="#share">I'm ready to share my knowledge!</AnchorLink>
        </Link>
      </TextContainer>
    </StyledHeader>
  );
};
