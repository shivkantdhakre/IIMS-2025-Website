import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p>Madan Mohan Malaviya University of Technology</p>
          <p>Gorakhpur, Uttar Pradesh - 273010, India</p>
          <p>Mob. No: +91 9235552358, +91 9235552354</p>
          <p>Email: <a href="mailto:iims2025@mmmut.ac.in">iims2025@mmmut.ac.in</a></p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/registration">Registration</Link></li>
            <li><Link href="/dates">Important Dates</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;