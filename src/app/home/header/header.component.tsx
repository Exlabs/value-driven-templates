import React from 'react';
import { Highlight } from '../../../ui/highlight/highlight.component';
import { HeaderContainer, GreenHighlight, PoweredByText } from './header.styles';
import { Link } from '../../../ui/link/link.component';

export const Header = () => {
  return (
    <HeaderContainer
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0,
        duration: 1,
      }}
    >
      <p>We provide collection of quality frameworks and templates.</p>
      <h2>
        Decision making <Highlight>templates</Highlight> with
        <GreenHighlight> quality</GreenHighlight> results.
      </h2>
      <Link href="/" type="primaryButton">
        Explore resources
      </Link>
      <PoweredByText>
        Proudly powered by <span>Exlabs Ltd.</span>
      </PoweredByText>
    </HeaderContainer>
  );
};
