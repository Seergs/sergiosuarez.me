import { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';

function useLanguage() {
  const [language, setLanguage] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('en')) {
      setLanguage('EN');
    } else if (pathname.includes('es')) {
      setLanguage('ES');
    }
  }, [pathname]);

  return language;
}

export default useLanguage;
