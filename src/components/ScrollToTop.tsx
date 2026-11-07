import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Efek ini dijalankan setiap kali lokasi berubah

  return null;
};

export default ScrollToTop;

