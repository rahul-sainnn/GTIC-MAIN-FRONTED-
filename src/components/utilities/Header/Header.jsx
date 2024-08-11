import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/Images/logo.png";
import "./Header.css";
import { Icon } from "@iconify/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navBgRef = useRef(null);

  // const handleScroll = () => {
  //   navBgRef.current.style.backgroundColor = `rgba(249, 247, 245, ${window.scrollY > 5 ? 1 : 0})`;
  // }
  // window.addEventListener('scroll', handleScroll, true);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    // <nav ref={navBgRef} className="navbar">
    <>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="GTIC Logo" />
        </a>
        <div className="sections">
          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-header links" : "links"
              }
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-header links" : "links"
              }
              to="/about"
            >
              ABOUT EVENT
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-header links" : "links"
              }
              to="/speaker"
            >
              SPEAKERS
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-header links" : "links"
              }
              to="/agenda"
            >
              AGENDA
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-header links" : "links"
              }
              to="/sponsor"
            >
              SPONSORS
            </NavLink>
            <a className="links" href="#c">
              CONTACT US
            </a>
          </nav>
          <div className="head-button-container">
            <NavLink to="/book-seat">
              <button className="register-button">
                Register Your Interest
              </button>
            </NavLink>
            <button className="secure-button">Secure Your Seat</button>
          </div>
        </div>
        <div
          className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <Icon height={40} icon="ci:hamburger-md" />
        </div>
      </nav>
    </>
  );
};

export default Header;
