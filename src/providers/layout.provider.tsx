import React from 'react';
import styled from 'styled-components';
import { useMobileMenu } from '../hooks/use-mobile-menu/use-mobile-menu.hook';
import { theme } from '../theme/theme-config';
import { Navigation } from '../ui/navigation/navigation.component';
import { useStickyNav } from '../hooks/use-sticky-nav/use-sticky-nav.hook';
import { MobileMenu } from '../ui/mobile-menu/mobile-menu.component';
import { Footer } from '../ui/footer/footer.component';

export const AppContainer = styled.div`
  max-width: 1620px;
  margin: 0 auto;
  padding: 10px 20px;

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
    <>
      <style jsx global>
        {`
          html,
          body {
            -webkit-overflow-scrolling: touch;
            margin: 0;
            padding: 0;
            background-color: ${({ theme }) => theme.color.background};
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
          ...(isStickyNavigation && { width: '100%' }),
          ...(!isStickyNavigation && { padding: '20px 20px' }),
          top: 0,
          zIndex: 9999,
          ...(isStickyNavigation && { padding: '10px 0' }),
          background: theme.color.background,
        }}
      >
        {isStickyNavigation ? (
          <AppContainer>
            <Navigation />
          </AppContainer>
        ) : (
          <Navigation />
        )}
      </div>

      {children}
      {isMobileMenuVisible && <MobileMenu />}
      <AppContainer>
        <Footer />
      </AppContainer>
    </>
  );
};
