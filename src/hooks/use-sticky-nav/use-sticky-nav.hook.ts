import React from 'react';

export enum ScrollDirection {
  UP = 'up',
  DOWN = 'down',
}

interface UseStickyNavProps {
  initialDirection?: ScrollDirection;
  thresholdPixels?: number;
  stickyRef: React.RefObject<HTMLElement>;
}

export const useStickyNav = ({
  initialDirection = ScrollDirection.DOWN,
  thresholdPixels,
  stickyRef,
}: UseStickyNavProps) => {
  const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>(
    initialDirection
  );
  const [isSticky, setSticky] = React.useState(false);
  const [bottomReached, setBottomReached] = React.useState(false);

  React.useEffect(() => {
    const threshold = thresholdPixels ?? 0;

    let lastScrollPositon = 0;
    let ticking = false;

    const updateScrollDirection = () => {
      if (Math.abs(window.pageYOffset - lastScrollPositon) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(
        window.pageYOffset > lastScrollPositon ? ScrollDirection.DOWN : ScrollDirection.UP
      );

      setSticky(
        stickyRef.current &&
          window.pageYOffset > stickyRef.current.getBoundingClientRect().top
          ? true
          : false
      );

      lastScrollPositon = window.pageYOffset > 0 ? window.pageYOffset : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }

      const windowHeight =
        'innerHeight' in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      setBottomReached(windowBottom >= docHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialDirection, thresholdPixels, stickyRef]);

  return !bottomReached && scrollDirection === ScrollDirection.UP && isSticky;
};
