import React from 'react';
import { useDeviceDetect } from '../../hooks/use-device-detect/use-device-detect.hook';
import {
  SocialContainer,
  ActionsContainer,
  ButtonsContainer,
  Copyright,
  PoweredByContainer,
  PoweredByDescription,
  PoweredByTitle,
  SocialIcon,
  SocialLink,
  StyledFooter,
} from './footer.styles';
import { Link } from '../link/link.component';

export const Footer = () => {
  const { isMobile } = useDeviceDetect();

  const socials = (
    <SocialContainer>
      <SocialLink external href="https://www.facebook.com/exlabs/" target="_blank">
        <SocialIcon
          src={`${process.env.ASSET_PREFIX}/icons/social/facebook.svg`}
          alt="Facebook"
        />
      </SocialLink>
      <SocialLink external href="https://www.instagram.com/exlabs/" target="_blank">
        <SocialIcon
          src={`${process.env.ASSET_PREFIX}/icons/social/instagram.svg`}
          alt="Instagram"
        />
      </SocialLink>
      <SocialLink external href="https://www.linkedin.com/company/exlabs" target="_blank">
        <SocialIcon
          src={`${process.env.ASSET_PREFIX}/icons/social/linkedin.svg`}
          alt="LinkedIn"
        />
      </SocialLink>
    </SocialContainer>
  );

  return (
    <StyledFooter className="footer">
      <PoweredByContainer>
        <PoweredByTitle>
          Powered By <span>Exlabs Ltd.</span>
        </PoweredByTitle>
        <PoweredByDescription>
          Custom Data and Software for the Intelligent Connected World.
        </PoweredByDescription>
        {!isMobile && socials}
      </PoweredByContainer>
      <ActionsContainer>
        <ButtonsContainer>
          <Link href="http://exlabs.com/" external target="_blank" type="primaryButton">
            Visit our page!
          </Link>
          <Link
            href="https://exlabs.com/contact-us"
            external
            target="_blank"
            type="button"
          >
            Contact us
          </Link>
        </ButtonsContainer>
        {isMobile && socials}
        <Copyright>Copyright &copy; 2020 Exlabs Ltd.</Copyright>
      </ActionsContainer>
    </StyledFooter>
  );
};
