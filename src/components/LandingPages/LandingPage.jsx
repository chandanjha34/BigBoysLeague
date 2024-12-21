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
      <div className="relative">
        <Navbar version={3} />
      </div>

      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src={MainImage}
          alt="Winning Team"
          className="w-full h-screen object-cover"
        />

        {/* Logos and Link */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center"> 
          <img
            src={logo1}
            alt="Big Boys League Logo"
            className="h-auto w-[12rem] md:w-[16rem] rounded-full mb-4" 
          />
          <img
            src={logo2}
            alt="One7 Sports Logo"
            className="h-auto w-[12rem] md:w-[16rem] rounded-full"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="flex pt-[20vh] flex-col items-center">
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