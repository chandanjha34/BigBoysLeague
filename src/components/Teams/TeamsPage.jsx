// Navbar.js (Assume you have this component correctly set up)
// Footer.js (Assume you have this component correctly set up)
// GalleryPreview.js (Assume you have this component correctly set up)
// NewsPreview.js (Assume you have this component correctly set up)

// Teams.js
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import GalleryPreview from '../Gallery/GalleryPreview';
import NewsPreview from '../News/NewsPreview';
import TeamsSection from './TeamsSections';

function Teams() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MAX_HEADER_HEIGHT = scrolled ? 200 : 600;

  return (
    <div className="flex flex-col h-full">
      <Navbar version={3} />
      <TeamsSection marginTop={MAX_HEADER_HEIGHT} />
      <GalleryPreview />
      <NewsPreview />
      <Footer />
    </div>
  );
}

export default Teams;

