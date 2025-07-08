import Link from 'next/link';

export default function Registration() {
  return (
    <>
      <section className="sub-header">
        <h1>Registration</h1>
      </section>

      <section>
        <div className="abstract-section">
          <h2 className="sub-title">Submission Link <strong style={{ color: 'red' }}>(Closed)</strong></h2>
          <div className="abstract-container">
            <div className="abstract-card">
              <Link href="https://forms.gle/fWmcezHi5Cr2nMGP9" target="_blank" rel="noopener noreferrer">
                <h3>Link for Abstract Submission:</h3>
                <p className="link">Click here</p>
              </Link>
            </div>

            <div className="abstract-card">
              <Link href="https://docs.google.com/document/d/124jVcw_LIH8iSBz2gsMwA72fTLmiM5ar/edit?usp=sharing&ouid=105037033165098759051&rtpof=true&sd=true"
                target="_blank" rel="noopener noreferrer">
                <h3>Link for Abstract Format:</h3>
                <p className="link">Click here</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="abstract-section">
          <h2 className="sub-title">Full length paper Submission</h2>
          <p className="description">
            The full-length paper submission deadline has been extended to <strong>March 31, 2025.</strong>
          </p>
          <ul>
            <li>
              <p className="description" style={{ color: 'red' }}>
                <strong>Those who could not submit their abstract can also submit their full-length paper directly through the full-length paper submission link.</strong>
              </p>
            </li>
          </ul>
          <div className="abstract-container">
            <div className="abstract-card">
              <Link href="https://forms.gle/Dm9kkxqhqi6c5eiL6" target="_blank" rel="noopener noreferrer">
                <h3>Full Length Paper Submission:</h3>
                <p className="link">Click here</p>
              </Link>
            </div>

            <div className="abstract-card">
              <Link href="https://docs.google.com/document/d/1J7q9cDCFhZaqD4UClJBO_5BFRYPHmViWPkhTzMWfIhY/edit?usp=sharing"
                target="_blank" rel="noopener noreferrer">
                <h3>Full Length Paper Format:</h3>
                <p className="link">Click here</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="abstract-section">
          <h2 className="sub-title">Registration</h2>
          <p className="description">
            The online registration link is now open. The early bird registration period is from <strong>25th March, 2025</strong> to <strong>12th April, 2025.</strong>
          </p>
          <ul>
            <li>
              <p className="description" style={{ color: 'red' }}>
                <strong>Participants who have received acceptance may proceed with early bird registration. Delegates and accompanying persons can also register now. The rest of the participants, please wait for acceptance.</strong>
              </p>
            </li>
          </ul>
          <div className="abstract-container">
            <div className="abstract-card">
              <Link href="https://forms.gle/oSTYgWQ7NNUjn3xp9" target="_blank" rel="noopener noreferrer">
                <h3>Link for Registration:</h3>
                <p className="link">Click here</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="sub-title">Registration Fee</h2>
        <div className="table-container">
          <table className="abstract-table">
            <thead>
              <tr>
                <th>Registration</th>
                <th>Early Bird<br />(March 25, 2025)</th>
                <th>Late Registration<br />(April 13, 2025)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Registration">Delegates from Abroad</td>
                <td data-label="Early Bird (March 25, 2025)">US $150</td>
                <td data-label="Late Registration (April 13, 2025)">US $200</td>
              </tr>
              <tr>
                <td data-label="Registration">Accompanying Person</td>
                <td data-label="Early Bird (March 25, 2025)">US $100</td>
                <td data-label="Late Registration (April 13, 2025)">US $100</td>
              </tr>
              <tr>
                <td data-label="Registration">Delegates from India</td>
                <td data-label="Early Bird (March 25, 2025)">₹5000</td>
                <td data-label="Late Registration (April 13, 2025)">₹6000</td>
              </tr>
              <tr>
                <td data-label="Registration">Accompanying Person</td>
                <td data-label="Early Bird (March 25, 2025)">₹1500</td>
                <td data-label="Late Registration (April 13, 2025)">₹2000</td>
              </tr>
              <tr>
                <td data-label="Registration">Indian Students<br />(UG/PG/Research Scholar)</td>
                <td data-label="Early Bird (March 25, 2025)">₹2500</td>
                <td data-label="Late Registration (April 13, 2025)">₹3000</td>
              </tr>
              <tr>
                <td data-label="Registration">Foreign Students<br />(UG/PG/Research Scholar)</td>
                <td data-label="Early Bird (March 25, 2025)">US $75</td>
                <td data-label="Late Registration (April 13, 2025)">US $80</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="abstract-info">
          <div className="about-section">
            <h2 className="sub-title">Accommodation</h2>
            <p className="description">
              Accommodation will be made available in the University Guest House and Hostels on prior request subject to availability on first come first serve basis on payment basis for the registered participants only.
            </p>
          </div>
        </section>

        <h2 className="sub-title">Bank Details</h2>
        <div className="table-container">
          <table className="abstract-table">
            <tbody>
              <tr>
                <td>Beneficiary Name</td>
                <td>Madan Mohan Malaviya University of Technology</td>
              </tr>
              <tr>
                <td>IFSC Code</td>
                <td>SBIN0002578</td>
              </tr>
              <tr>
                <td>Bank Account No.</td>
                <td>33542824744</td>
              </tr>
              <tr>
                <td>Bank</td>
                <td>State Bank of India MMMUT</td>
              </tr>
              <tr>
                <td>City | Branch</td>
                <td>Gorakhpur | <strong>Branch Code:</strong> 002578</td>
              </tr>
              <tr>
                <td>MICR No.</td>
                <td>273002005</td>
              </tr>
              <tr>
                <td>Swift Code</td>
                <td>SBININBB497</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}