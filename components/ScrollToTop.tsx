import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when pathname changes
    if (hash) { requestAnimationFrame(() => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()); } else { window.scrollTo(0, 0); }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;