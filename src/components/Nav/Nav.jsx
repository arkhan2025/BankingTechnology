import React, { useState } from 'react';
import logo from '../../assets/Logo.png';
import '../../App.css';
import './Nav.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="hero">
        <img src={logo} alt="logo" className="logo" />
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <div
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#">Products ▾</a>
            {openDropdown === "products" && (
              <ul className="dropdown-menu">
                <li><a href="#">Core Banking</a></li>
                <li><a href="#">Digital Wallet</a></li>
                <li><a href="#">Loan Management</a></li>
              </ul>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#">Resources ▾</a>
            {openDropdown === "resources" && (
              <ul className="dropdown-menu">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Whitepapers</a></li>
              </ul>
            )}
          </div>
          <a href="/contact">Pricing</a>
          <a href="#">Log in</a>
          <button>SignUp</button>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
