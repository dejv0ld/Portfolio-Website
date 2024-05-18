/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import '../global.css'; // Ensure this includes necessary styles like the logo

const navigation = [
  { name: 'Home', href: '/#home', current: true },
  { name: 'About', href: '/#about', current: false },
  { name: 'Skills', href: '/#skills', current: false },
  { name: 'Experience', href: '/#experience', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img
            className="logo-image"
            src="./src/assets/images/Logo.png"
            alt="Your Company"
          />
        </div>
        <div className="menu-button" onClick={handleToggle}>
          <svg
            className="hamburger-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </div>
      <div className={`overlay ${open ? 'open' : ''}`}>
        <button className="close-button" onClick={handleClose}>
          <svg
            className="close-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="overlay-content">
          {navigation.map((item) => (
            <Link
              key={item.name}
              smooth
              to={item.href}
              className={classNames(
                item.current ? 'active' : '',
                'overlay-link'
              )}
              aria-current={item.current ? 'page' : undefined}
              onClick={handleClose} // Close menu on navigation link click
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
