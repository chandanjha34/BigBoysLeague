import React, { useState, useEffect } from 'react'
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import TeamsPreview from '../Teams/TeamsPreview';
import NewsPreview from '../News/NewsPreview';
import imagesData from "./galleryImages.json"; // Import the JSON file directly


function MomentsSection({ marginTop }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white py-12 px-6 md:px-20 lg:px-40" style={{ marginTop: `${marginTop}px` }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Moments That Defined the Match
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Dive into the heart-pounding action of the cricket field, captured
          through vibrant images that showcase the passion, perseverance, and
          teamwork of every player.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
          Explore
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imagesData.map((imageData, index) => (
          <div key={index} className="relative">
            {/* Image with Zoom */}
            <Zoom
              overlayBgColorEnd="rgba(0, 0, 0, 0.9)"
              zoomMargin={20}
              onZoom={() => setSelectedImage(imageData)}
              onUnzoom={() => setSelectedImage(null)}
            >
              <img
                src={imageData.image}
                alt={imageData.description || ""}
                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md cursor-pointer"
              />
            </Zoom>
          </div>
        ))}
      </div>

      {/* Modal Description */}
      {selectedImage && selectedImage.description && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center p-4 z-50">
          <p className="text-sm">{selectedImage.description}</p>
        </div>
      )}
    </div>
  );
}


function Gallery() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Toggle scrolled state based on a threshold
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const MAX_HEADER_HEIGHT = scrolled ? 200 : 600;

    return (
        <div className="flex flex-col h-full">
            <Navbar version={3} />


            <MomentsSection marginTop={MAX_HEADER_HEIGHT} />


            {/* Teams Section */}
            <TeamsPreview />


            {/* News Section */}
            <NewsPreview />

            <Footer />
        </div>


    );
}
export default Gallery;





