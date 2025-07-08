'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-brand">
        <Link href="/">
          <Image src="/resources/logo.jpg" alt="IIMS-2025 Logo" width={150} height={60} />
        </Link>
        <span className="site-title">IIMS-2025</span>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`} id="navLinks">
        <X className="fa fa-times" onClick={closeMenu} />
        <ul>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/committee" onClick={closeMenu}><strong>Conference Committee</strong></Link></li>
          <li><Link href="/publication" onClick={closeMenu}>Conference Publications</Link></li>
          <li><Link href="/registration" onClick={closeMenu}>Registration</Link></li>
          <li><Link href="/sponsorship" onClick={closeMenu}>Sponsorship</Link></li>
          <li><Link href="/dates" onClick={closeMenu}>Important Dates</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>
      <div className="menu-icon">
        <Menu className="fa fa-bars" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navigation;