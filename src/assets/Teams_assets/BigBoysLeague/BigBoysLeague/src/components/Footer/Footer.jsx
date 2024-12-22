import React from 'react';
import './Footer.css'; // External CSS for additional styling

function Footer(){
  const handleContactClick = () => {
    alert('Thank you for your interest! Please email us at contact@one7sports.com for more information.');
  };

  return (
    <footer className="bg-white py-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold text-gray-800">Get in touch</h2>
        <p className="text-gray-600 text-center mx-auto w-[50vw] mt-2">
          If you're interested in becoming a One7 Sports brand franchise holder, would like to discuss
          partnership opportunities or have media queries, we'd love to hear from you.
        </p>
        <button
          onClick={handleContactClick}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        >
          Contact us
        </button>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-gray-500 hover:text-gray-700 text-xl"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-gray-500 hover:text-gray-700 text-xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-gray-500 hover:text-gray-700 text-xl"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube text-gray-500 hover:text-gray-700 text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
