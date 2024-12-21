import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import batterImage from '../../assets/Home_assets/sideImage.png'
import bblLogo from '../../assets/Home_assets/bbl_logo_no_bg.png'
import './Navbar.css';



// For Landing page (without logo black text no bg)
function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Teams", path: "teams" },
    { name: "Points Table", path: "points-table" },
    { name: "Matches", path: "matches" },
    { name: "Gallery", path: "gallery" },
    { name: "News", path: "news" },
    { name: "Stats", path: "stats" }
  ];

  return (
    <header className="relative z-50 w-full bg-transparent h-0">
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
          className={`fixed inset-y-0 right-0 bg-black bg-opacity-75 text-white w-3/4 transform h-10 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 md:relative text-black md:bg-transparent md:bg-opacity-0 md:flex md:transform-none md:items-center md:justify-end`} // Added justify-end for right alignment
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex text-lg font-medium p-4 md:p-0 md:ml-6 h-full items-center ${item.name === "Stats" ? "bg-violet-900 text-white rounded-lg hover:bg-violet-700" : ""
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to={`/${item.path}`} className={`${item.name === "Stats" ? `px-4 text-white ${window.location.pathname.trim().endsWith(item.path) ? "underline" : ""}` : "text-black"}`}>
                {item.name}
              </Link>
            </li>

          ))}
        </ul>
      </nav>
    </header>
  );
}


function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ---------------------
  //     CONFIGURABLE
  // ---------------------
  const HEADER_START_HEIGHT = 600;  // total header (nav + hero) at top
  const HEADER_MIN_HEIGHT = 75;    // never shrink below this
  const NAV_START_HEIGHT = 120;     // nav height at top
  const NAV_MIN_HEIGHT = 70;        // nav height after scroll
  const HERO_FADE_OUT_SCROLL = 200; // how quickly hero fades out
  const LOGO_SCALE_START = 1;       // logo scale at top
  const LOGO_SCALE_MIN = 0.7;       // minimum logo scale

  // ---------------------
  //     HEADER HEIGHT
  // ---------------------
  // The entire header (nav + hero) shrinks until it hits HEADER_MIN_HEIGHT
  const headerHeight = Math.max(HEADER_START_HEIGHT - scrollY, HEADER_MIN_HEIGHT);

  // ---------------------
  //     NAV HEIGHT
  // ---------------------
  // For a smoother approach, let’s have the nav shrink over the first 100px of scroll
  const navShrinkThreshold = 100;
  const navHeight =
    scrollY < navShrinkThreshold
      ? NAV_START_HEIGHT - (scrollY / navShrinkThreshold) * (NAV_START_HEIGHT - NAV_MIN_HEIGHT)
      : NAV_MIN_HEIGHT;

  // ---------------------
  //     LOGO SCALE
  // ---------------------
  // Scale logo from 1.0 down to 0.7 over first 300px of scroll
  const logoScale = Math.max(LOGO_SCALE_START - scrollY / 300, LOGO_SCALE_MIN);

  // ---------------------
  //     HERO OPACITY
  // ---------------------
  // Fade the hero out from scrollY = 0 to scrollY = HERO_FADE_OUT_SCROLL
  const heroOpacity = Math.max(1 - scrollY / HERO_FADE_OUT_SCROLL, 0);

  // Example menu items
  const menuItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Teams", path: "teams" },
    { name: "Points Table", path: "points-table" },
    { name: "Matches", path: "matches" },
    { name: "Gallery", path: "gallery" },
    { name: "News", path: "news" },
    { name: "Stats", path: "stats" },
  ];

  return (
    <>
      {/* 
        1) Fixed header so it stays pinned
        2) Overflow hidden so the hero can shrink inside 
      */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-custom-gradient overflow-hidden transition-all duration-300"
        style={{
          height: `${headerHeight}px`,
        }}
      >
        {/* Navbar */}
        <nav
          className="flex items-center justify-between px-4 md:px-8 transition-all duration-300"
          style={{
            height: `${navHeight}px`,
            // Add a background if you wish:
            // backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          {/* Logo */}
          <div
            className="flex items-center"
            style={{
              transform: `scale(${logoScale})`,
              transition: "transform 0.3s ease",
            }}
          >
            <img
              className="w-40 h-auto"
              src={bblLogo}
              alt="Big Boys League Logo"
            />
          </div>

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
            className={`fixed inset-y-0 right-0 bg-black bg-opacity-75 text-white w-3/4 transform h-[40px] ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 md:relative md:bg-transparent md:flex md:transform-none md:items-center md:justify-end`}
          >
            {menuItems.map((item, index) => {
              const isActive = window.location.pathname.trim().endsWith(item.path);
              return (
                <li
                  key={index}
                  className={`flex text-lg font-medium p-4 md:p-0 md:ml-6 h-full items-center ${
                    item.name === "Stats"
                      ? "bg-violet-900 rounded-lg hover:bg-violet-700"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    to={`/${item.path}`}
                    className={`${
                      item.name === "Stats" ? "px-4 text-white" : "text-white"
                    } ${isActive ? "underline underline-offset-8 decoration-1" : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hero Section */}
        {/* 
            This portion (title + batter) will shrink and fade as the user scrolls.
            It's inside the same fixed header container. 
        */}
        <div
          className="flex flex-row justify-around items-center w-full transition-all duration-300"
          style={{
            height: `calc(100% - ${navHeight}px)`, // occupy remaining space beneath the nav
            opacity: heroOpacity,
            overflow: "hidden",
          }}
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
    </>
  );
}


function Navbar3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Toggle scrolled state based on a threshold
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
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-custom-gradient overflow-hidden transition-all duration-300 ${
        scrolled ? "h-20" : "h-[600px]"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${
          scrolled ? "h-[70px]" : "h-[120px]"
        }`}
      >
        {/* Logo */}
        <div
          className={`flex items-center transition-transform duration-300 ${
            scrolled ? "scale-[0.7]" : "scale-100"
          }`}
        >
          <img className="w-40 h-auto" src={bblLogo} alt="Big Boys League Logo" />
        </div>

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
          className={`fixed inset-y-0 right-0 bg-black bg-opacity-75 text-white w-3/4 transform h-[40px] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:relative md:bg-transparent md:flex md:transform-none md:items-center md:justify-end`}
        >
          {menuItems.map((item, index) => {
            const isActive = window.location.pathname.trim().endsWith(item.path);
            return (
              <li
                key={index}
                className={`flex text-lg font-medium p-4 md:p-0 md:ml-6 h-full items-center ${
                  item.name === "Stats"
                    ? "bg-violet-900 rounded-lg hover:bg-violet-700"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  to={`/${item.path}`}
                  className={`${
                    item.name === "Stats" ? "px-4 text-white" : "text-white"
                  } ${isActive ? "underline underline-offset-8 decoration-1" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Hero Section */}
      <div
        className={`flex flex-row justify-around items-center w-full transition-all duration-300 ${
          scrolled ? "opacity-0 h-0" : "opacity-100 h-[calc(100%-120px)]"
        }`}
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


function Navbar({ version }) {
  if (version === 1) {
    console.log(`Navbar ${version} called`)
    return Navbar1();
  } else if (version === 2) {
    console.log(`Navbar ${version} called`)
    return Navbar2();
  } else if (version === 3) {
    console.log(`Navbar ${version} called`)
    return Navbar3();
  }
}


export default Navbar;