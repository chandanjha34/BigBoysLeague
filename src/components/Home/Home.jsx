import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import GalleryPreview from '../Gallery/GalleryPreview';
import TeamsPreview from '../Teams/TeamsPreview';
import NewsPreview from '../News/NewsPreview';
import image1 from '../../assets/Home_assets/image1.png'

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MAX_HEADER_HEIGHT = scrolled ? 200 : 600;

  return (
    <div className="flex flex-col h-full">
      <Navbar version={3} />
      
      {/* About One7 Section */}
      <div
        className="bg-purple-50 py-12 px-6 md:px-16 lg:px-32"
        
      >
        <div className="text-center">
          <h4 className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-4">
            About One7
          </h4>
          <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Expanding beyond gaming to
          </h2>
          <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
            grow sports and technology
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
            One7 Sports was established with a commitment to transform the local sports ecosystem in India, with a special emphasis on cricket. Our mission is to empower players to create unforgettable sporting experiences and use technology to enhance accessibility to sports infrastructure and performance. Through strategic growth, innovative tournaments, and technological solutions, One7 Sports is changing the landscape for sports enthusiasts nationwide, with a main focus on cricket to start with.
          </p>
        </div>
      </div>

      {/* About Big Boys League Section */}
      <div className="bg-white py-12 px-6 md:px-16 lg:px-32">
        <div className="text-center md:text-left">
          <h4 className="text-purple-600 text-sm font-semibold uppercase tracking-wide mb-4">
            About Big Boys League
          </h4>
          <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Where passion meets profession in a series of thrilling championships!
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-justify">
            One7 presents The One7 BigBoys T20 Cricket League for passionate corporate cricketers. We at One7 Sports are excited to bring to you an experience you would cherish for a lifetime. Our main objective is to encourage participation of working professionals who have the passion and love for this celebrated game of Cricket. This tournament is a platform for cricket enthusiasts who play this game for fun-n-fitness alongside their full-time profession.
            We have successfully concluded season 1 of BBL and now are happy and excited to launch the season 2 for BBL making this tournament a series of championships. Season 1 was widely appreciated and enjoyed by more than 200 corporate cricketers playing from 10 teams owned by corporate individuals as franchisees of One7 BigBoys League. Stay tuned and visit the page of BBL Season 2 here to know more about what's coming.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <img
            src={image1}
            alt="Big Boys League Team"
            className="w-full max-w-4xl rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-6 md:px-16 lg:px-32">
        <GalleryPreview />
      </div>

      {/* Teams Section */}
      <div className="px-6 md:px-16 lg:px-32">
        <TeamsPreview />
      </div>

      {/* News Section */}
      <div className="px-6 md:px-16 lg:px-32">
        <NewsPreview />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
