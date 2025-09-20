import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="/Jane Nyabera.png" alt="Jane Nyabera Logo" className="navbar__logo-img" />
        </Link>
      </div>
      <button className="navbar__toggle" onClick={handleToggle} aria-label="Toggle navigation">
        {menuOpen ? '✕' : '☰'}
      </button>
      <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><a href="/gallery" onClick={handleLinkClick}>Gallery</a></li>
        <li><a href="/experience" onClick={handleLinkClick}>Experience</a></li>
        <li><a href="/contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
      <div className="navbar__avatar">
        <img src="/Home 5.jpeg" alt="Dr. Amani Avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
