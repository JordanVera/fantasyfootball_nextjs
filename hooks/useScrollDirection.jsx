import { useState, useEffect } from 'react';

export const ScrollDirection = {
  up: 'up',
  down: 'down',
};

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState(ScrollDirection.down); // Assuming starting down is common
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollTop = window.scrollY;
      const diff = currentScrollTop - lastScrollTop;

      if (Math.abs(diff) >= 100) {
        // Only update if the scroll difference is more than 100 pixels
        setScrollDir(diff > 0 ? ScrollDirection.down : ScrollDirection.up);
        setLastScrollTop(currentScrollTop);
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollTop]);

  return scrollDir;
};
