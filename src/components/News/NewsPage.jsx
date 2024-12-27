import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import GalleryPreview from '../Gallery/GalleryPreview';
import TeamsPreview from '../Teams/TeamsPreview';
import newsData from "./news.json";

function NewsSection() {
  return (
    <div className="bg-white py-12 px-6 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                {item.type === "news" ? "News" : "Video"}
              </div>
              <div className="p-4">
                <p className="text-gray-800 text-sm md:text-base font-medium">
                  {item.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


function News() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Toggle scrolled state based on a threshold
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MAX_HEADER_HEIGHT = scrolled?200:600;

  return (
    <div className="flex flex-col h-full">
      <Navbar version={3} />
      
      {/* About One7 Section */}
      {/* News Section Header */}
      <div className="bg-purple-50 py-12 px-6 text-center">
        <h4 className="text-purple-600 text-sm font-semibold uppercase tracking-wide mb-2">
          News
        </h4>
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
          Game Changers: <br /> Top Headlines
        </h2>
      </div>


      <NewsSection />

      {/* Gallery Section */}
      <GalleryPreview />

      {/* Teams Section */}
      <TeamsPreview />

      <Footer />
    </div>


  );
}
export default News;
