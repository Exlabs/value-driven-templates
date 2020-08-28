import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Highlight } from '../../../ui/highlight/highlight.component';
import {
  HeaderContainer,
  GreenHighlight,
  PoweredByText,
  ProvideText,
} from './header.styles';
import { Link } from '../../../ui/link/link.component';

export const Header = () => {
  return (
    <HeaderContainer
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <ProvideText
        initial={{
          y: -50,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.7,
          easings: true,
        }}
      >
        We provide collection of quality frameworks and templates.
      </ProvideText>
      <h2>
        Decision making <Highlight>templates</Highlight> with
        <GreenHighlight> quality</GreenHighlight> results.
      </h2>
      <Link href="#resources" type="primaryButton">
        <AnchorLink href="#resources">Explore resources</AnchorLink>
      </Link>
      <PoweredByText>
        Proudly powered by <span>Exlabs Ltd.</span>
      </PoweredByText>
    </HeaderContainer>
  );
};
