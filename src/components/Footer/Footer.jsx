import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <nav className="footer__nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="mailto:nyabera@example.com" aria-label="Email"><FaEnvelope /></a>
      </div>
      <span className="footer__copyright">&copy; {new Date().getFullYear()} Md. Nyabera. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
