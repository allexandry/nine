
import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(window.location.pathname);
    };

    const handleLinkClick = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement).closest('a');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href) return;
        
        // Handle external links, downloads, mailto, etc.
        if (anchor.target === '_blank' || anchor.hasAttribute('download') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            return;
        }

        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) {
            return;
        }
        
        e.preventDefault();

        if (window.location.pathname === url.pathname && url.hash) {
            document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' });
        } else if (window.location.pathname !== url.pathname) {
            window.history.pushState({}, '', href);
            handleLocationChange();
            window.scrollTo(0, 0); // Scroll to top on page change
        }
    };

    window.addEventListener('popstate', handleLocationChange);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  let content;
  switch (route) {
    case '/login':
      content = <LoginPage />;
      break;
    case '/register':
      content = <RegisterPage />;
      break;
    default:
      content = <LandingPage />;
  }

  return (
    <div className="bg-white text-gray-800 selection:bg-red-500/30">
        {content}
    </div>
  );
};

export default App;
