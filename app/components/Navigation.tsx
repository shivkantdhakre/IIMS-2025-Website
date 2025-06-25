'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showMenu = () => {
    setIsMenuOpen(true)
  }

  const hideMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav>
      <div className="nav-brand">
        <Link href="/">
          <Image src="/resources/logo.jpg" alt="IIMS-2025 Logo" width={150} height={75} />
        </Link>
        <span className="site-title">IIMS-2025</span>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`} id="navLinks">
        <i className="fa fa-times" onClick={hideMenu}></i>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/committee"><strong>Conference Committee</strong></Link></li>
          <li><Link href="/publication">Conference Publications</Link></li>
          <li><Link href="/registration">Registration</Link></li>
          <li><Link href="/sponsorship">Sponsorship</Link></li>
          <li><Link href="/dates">Important Dates</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="menu-icon">
        <i className="fa fa-bars" onClick={showMenu}></i>
      </div>
    </nav>
  )
}