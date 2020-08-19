import React from 'react';
import { Link } from '../../../ui/link/link.component';
import {
  StyledHeader,
  TextSection,
  HeaderDescription,
  HeaderImage,
  HeaderTitle,
} from './header.styles';

export const Header = () => {
  return (
    <StyledHeader>
      <TextSection>
        <HeaderTitle>
          We are <span>Exlabs</span>
        </HeaderTitle>
        <HeaderDescription>
          We deliver high-level consultancy & flexible, complex data-driven{' '}
          <span>software solutions</span> for the companies of the future.
        </HeaderDescription>
        <Link href="" type="button">
          Read about VDT
        </Link>
      </TextSection>
      <HeaderImage
        alt="About page"
        src={`${process.env.ASSET_PREFIX}/icons/about-header.svg`}
      />
    </StyledHeader>
  );
};
