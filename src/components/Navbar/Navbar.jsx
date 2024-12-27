import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import bblLogo from '../../assets/Home_assets/bbl_logo_no_bg.png';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
    <header className="top-0 left-0 w-full z-30 bg-custom-gradient">
      <nav className="flex items-center justify-between px-4 md:px-8 h-[70px]">
        <div className="flex items-center">
          <img className="w-40 h-auto" src={bblLogo} alt="Big Boys League Logo" />
        </div>

        <button className="text-white md:hidden z-50" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className={`fixed inset-y-0 right-0 bg-black bg-opacity-75 h-full text-white w-3/4 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:relative md:bg-transparent md:flex md:transform-none md:items-center md:justify-end`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex text-lg font-medium p-4 md:p-0 md:ml-6 h-full items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link
                to={`/${item.path}`}
                className="text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
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
                    className="block text-white text-lg p-2 rounded transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;