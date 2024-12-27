import React from "react";
import MainImage from '../../assets/LandingPage_assets/MainImage.png';
import logo1 from '../../assets/LandingPage_assets/logo1.png';
import logo2 from '../../assets/LandingPage_assets/logo2.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

import './LandingPage.css';

function LandingPage() {
  return (
    <div className="relative bg-[#ffffff]">
      {/* Navbar */}
      <Navbar version={3} />

      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src={MainImage}
          alt="Winning Team"
          className="w-full h-screen md:h-full object-cover" // Use h-screen for full viewport height
        />

        {/* Logos and Link */}
        <div className="absolute top-1/2 md:top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-3/2 md:-translate-y-1/2 flex flex-col md:flex-row items-center"> 
          <img
            src={logo1}
            alt="Big Boys League Logo"
            className="h-auto w-[10rem] md:w-[12rem] lg:w-[16rem] rounded-full mb-4 md:mb-0 md:mr-4" 
          />
          <img
            src={logo2}
            alt="One7 Sports Logo"
            className="h-auto w-[10rem] md:w-[12rem] lg:w-[16rem] rounded-full"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-8 py-4 md:mt-[20vh]">
        <div className="flex flex-col items-center">
          {/* Link */}
          <Link to="/home" className="text-blue-500 hover:underline">
            Go to Home Page
          </Link>
        </div>
      </footer>

      <Footer />
    </div>
  );
}

export default LandingPage;