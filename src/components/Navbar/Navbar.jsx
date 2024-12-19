import React, { useState } from "react";
import logo from "../../assets/LandingPage_assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "" },
    { name: "About", path: "about" },
    { name: "Teams", path: "teams" },
    { name: "Points Table", path: "points-table" },
    { name: "Matches", path: "matches" },
    { name: "Gallery", path: "gallery" },
    { name: "News", path: "news" },
  ];

  return (
    <header className="relative top-3 z-50 w-full bg-transparent h-[2vh]">
      <nav className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}

        {/* Hamburger Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menu Items */}
        <ul
          className={`fixed inset-y-0 right-0 bg-black bg-opacity-75 text-white w-3/4 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:relative text-black md:bg-transparent md:bg-opacity-0 md:flex md:transform-none md:items-center md:justify-end`} // Added justify-end for right alignment
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-lg font-medium hover:text-yellow-400 p-4 md:p-0 md:ml-6"
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              <Link to={`/${item.path}`} className="text-black">{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;