import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from '../../../ui/link/link.component';
import {
  StyledHeader,
  TextSection,
  HeaderDescription,
  HeaderImage,
  HeaderTitle,
} from './header.styles';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

export const Header = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <StyledHeader>
      <TextSection>
        <HeaderTitle>
          We are <span>Exlabs</span>
        </HeaderTitle>
        {isMobile && (
          <HeaderImage
            alt="About page"
            src={`${process.env.ASSET_PREFIX}/icons/about-header.svg`}
          />
        )}
        <HeaderDescription>
          We deliver high-level consultancy & flexible, complex data-driven{' '}
          <span>software solutions</span> for the companies of the future.
        </HeaderDescription>
        <Link href="#experts" type="button">
          <AnchorLink href="#experts">Read about VDT</AnchorLink>
        </Link>
      </TextSection>
      {!isMobile && (
        <HeaderImage
          alt="About page"
          src={`${process.env.ASSET_PREFIX}/icons/about-header.svg`}
        />
      )}
    </StyledHeader>
  );
};
