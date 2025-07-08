import Image from 'next/image';

export default function Sponsorship() {
  return (
    <>
      <section className="sub-header">
        <h1>Sponsorship</h1>
      </section>

      <section>
        <div className="sponsor-table-wrapper">
          <h2 className="sponsor-table-heading">Sponsorship Categories</h2>
          <div className="sponsor-table-container">
            <table className="sponsor-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Sponsorship Amount</th>
                  <th>Entitlement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Platinum Sponsor</td>
                  <td>1,00,000</td>
                  <td>6 free delegates</td>
                </tr>
                <tr>
                  <td>Gold Sponsor</td>
                  <td>50,000</td>
                  <td>4 free delegates</td>
                </tr>
                <tr>
                  <td>Silver Sponsor</td>
                  <td>25,000</td>
                  <td>2 free delegates</td>
                </tr>
                <tr>
                  <td>Other Sponsor</td>
                  <td>15,000</td>
                  <td>1 free delegate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="abstract-section">
          <h2 className="sub-title">Sponsors</h2>
          <section className="investors-section">
            <h2>Platinum Sponsors</h2>
            <div className="investor-grid">
              <div className="investor-card">
                <Image src="https://via.placeholder.com/80" alt="Nil logo" width={80} height={80} />
                <h3>Nil</h3>
              </div>
            </div>
            
            <h2>Gold Sponsors</h2>
            <div className="investor-grid">
              <div className="investor-card">
                <Image src="https://via.placeholder.com/80" alt="Nil logo" width={80} height={80} />
                <h3>Nil</h3>
              </div>
            </div>
            
            <h2>Silver Sponsors</h2>
            <div className="investor-grid">
              <div className="investor-card">
                <Image src="https://via.placeholder.com/80" alt="Arshika Construction logo" width={80} height={80} />
                <h3>Arshika Construction</h3>
              </div>
            </div>
            
            <h2>Other Sponsors</h2>
            <div className="investor-grid">
              <div className="investor-card">
                <Image src="https://via.placeholder.com/80" alt="Shiv Construction logo" width={80} height={80} />
                <h3>Shiv Construction</h3>
              </div>
              <div className="investor-card">
                <Image src="/resources/ke_logo.png" alt="Krishna Enterprises logo" width={80} height={80} />
                <h3>Krishna Enterprises</h3>
              </div>
              <div className="investor-card">
                <Image src="https://via.placeholder.com/80" alt="Gorakhpur Shooting Academy logo" width={80} height={80} />
                <h3>Gorakhpur Shooting Academy</h3>
              </div>
              <div className="investor-card">
                <Image src="/resources/pe_logo.png" alt="Pratap Enterprises logo" width={80} height={80} />
                <h3>Pratap Enterprises</h3>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}