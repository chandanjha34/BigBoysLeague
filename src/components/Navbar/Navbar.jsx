import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import batterImage from '../../assets/Home_assets/sideImage.png';
import bblLogo from '../../assets/Home_assets/bbl_logo_no_bg.png';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "Teams", path: "teams" },
    { name: "Points Table", path: "points-table" },
    { name: "Matches", path: "matches" },
    { name: "Gallery", path: "gallery" },
    { name: "News", path: "news" },
    { name: "Stats", path: "stats" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-30 bg-custom-gradient overflow-hidden transition-all duration-300 ${scrolled ? "h-20" : "h-[600px]"}`}>
      <nav className={`flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${scrolled ? "h-[70px]" : "h-[120px]"}`}>
        <div className={`flex items-center transition-transform duration-300 ${scrolled ? "scale-[0.7]" : "scale-100"}`}>
          <img className="w-40 h-auto" src={bblLogo} alt="Big Boys League Logo" />
        </div>

        <button className="text-white md:hidden z-50" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className={`fixed inset-y-0 right-0 bg-black bg-opacity-75 h-full text-white w-3/4 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:relative md:bg-transparent md:flex md:transform-none md:items-center md:justify-end`}>
          {menuItems.map((item, index) => {
            const isActive = window.location.pathname.trim().endsWith(item.path);
            return (
              <li
                key={index}
                className={`flex text-lg font-medium p-4 md:p-0 md:ml-6 h-full items-center ${item.name === "Stats" ? "bg-violet-900 rounded-lg hover:bg-violet-700" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  to={`/${item.path}`}
                  className={`z-50 ${item.name === "Stats" ? "px-4 text-white" : "text-white"} ${isActive ? "underline underline-offset-8 decoration-1" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar for Mobile */}
      {isMenuOpen && (
  <div className="fixed inset-0 z-50 sidebar-wrapper" onClick={toggleMenu}>
    <div className="sidebar-container" onClick={(e) => e.stopPropagation()}>
      <button
        aria-label="Close Sidebar"
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        &times;
      </button>
      <ul className="sidebar-menu space-y-4 px-6 mt-8">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.path}`}
              onClick={() => setIsMenuOpen(false)}
              className="block z-1000 text-white text-lg p-2 rounded transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

      {/* Hero Section */}
      <div
        className={`flex flex-row justify-around items-center w-full transition-all duration-300 ${scrolled ? "opacity-0 h-0" : "opacity-100 h-[calc(100%-120px)]"}`}
      >
        {/* Hero Text */}
        <div className="flex flex-col text-white w-full h-full justify-center items-center">
          <h4 className="text-4xl font-normal">More Than a Game,</h4>
          <h4 className="text-4xl font-normal">It's an Experience</h4>
        </div>

        {/* Batter Image */}
        <div className="flex w-full h-full items-end justify-center">
          <img
            className="relative scale-[1.1]"
            src={batterImage}
            alt="A batter in his hitting position"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
