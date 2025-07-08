export default function Contact() {
  return (
    <>
      <section className="sub-header">
        <h1>Contact Us</h1>
      </section>

      <section>
        <div className="contact-section">
          <h2>For any further query, you may contact:</h2>

          <div className="contact-card">
            <h3>Dr. Vinay Kumar Singh</h3>
            <p>Assistant Professor, CED, MMMUT</p>
            <p>Email: <a href="mailto:vksce@mmmut.ac.in">vksce@mmmut.ac.in</a></p>
            <p>Phone: <a href="tel:+919235552358">+91 9235552358</a></p>
          </div>

          <div className="contact-card">
            <h3>Dr. Sneha Gupta</h3>
            <p>Assistant Professor, CED, MMMUT</p>
            <p>Email: <a href="mailto:sgce@mmmut.ac.in">sgce@mmmut.ac.in</a></p>
            <p>Phone: <a href="tel:+919235552354">+91 9235552354</a></p>
          </div>

          <div className="conference-email">
            <p>For general queries, email us at:</p>
            <a href="mailto:iims2025@mmmut.ac.in">iims2025@mmmut.ac.in</a>
          </div>
        </div>
      </section>
    </>
  );
}