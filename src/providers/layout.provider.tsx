import React from 'react';
import styled from 'styled-components';
import { useMobileMenu } from '../hooks/use-mobile-menu/use-mobile-menu.hook';
import { theme } from '../theme/theme-config';
import { Navigation } from '../ui/navigation/navigation.component';
import { useStickyNav } from '../hooks/use-sticky-nav/use-sticky-nav.hook';
import { MobileMenu } from '../ui/mobile-menu/mobile-menu.component';
import { Footer } from '../ui/footer/footer.component';

const AppContainer = styled.div`
  max-width: 1620px;
  margin: 0 auto;
  padding: 10px 20px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
  -webkit-overflow-scrolling: touch;

  & .footer {
    margin-top: 30px;
  }
`;

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const stickyRef = React.useRef(null);

  const isStickyNavigation = useStickyNav({ stickyRef });

  const {
    state: { isVisible: isMobileMenuVisible },
  } = useMobileMenu();

  return (
    <AppContainer>
      <style jsx global>
        {`
          html,
          body {
            -webkit-overflow-scrolling: touch;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      {isStickyNavigation && (
        <div
          style={{
            height: '54px',
          }}
        />
      )}
      <div
        ref={stickyRef}
        style={{
          ...(isStickyNavigation && { position: 'fixed' }),
          ...(isStickyNavigation && { width: 'calc(100% - 40px)' }),
          maxWidth: '1580px',
          top: 0,
          zIndex: 9999,
          ...(isStickyNavigation && { padding: '10px 0' }),
          background: theme.color.background,
        }}
      >
        <Navigation />
      </div>
      {children}
      {isMobileMenuVisible && <MobileMenu />}
      <Footer />
    </AppContainer>
  );
};
