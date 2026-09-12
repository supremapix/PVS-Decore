import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when pathname changes
    if(hash){const element=document.getElementById(decodeURIComponent(hash.slice(1)));const detail=element?.closest('details');if(detail)detail.open=true;element?.scrollIntoView();}else window.scrollTo(0, 0);
  }, [pathname,hash]);

  return null;
};

export default ScrollToTop;