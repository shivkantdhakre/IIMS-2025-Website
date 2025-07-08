import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import AnnouncementModal from '@/components/ui/AnnouncementModal';
import Countdown from '@/components/ui/Countdown';
import ImageCarousel from '@/components/ui/ImageCarousel';

export default function Home() {
  return (
    <>
      <AnnouncementModal />
      
      <section className="header">
        <div className="text-box">
          <p>International Conference on Innovations in Infrastructure</p>
          <p>Materials & Sustainability</p>
          <p>IIMS-2025</p>
          <p>(18th – 19th April 2025)</p>
          <Link href="https://forms.gle/fWmcezHi5Cr2nMGP9" className="hero-btn" target="_blank">
            Register
          </Link>
          <br />
          <Link 
            href="https://drive.google.com/file/d/1czckAb_9uJ1Zq3ybQWQiqZBcsAaazPGJ/view?usp=sharing" 
            className="hero-btn"
            target="_blank"
          >
            Conference Leaflet
          </Link>
        </div>
        <Countdown />
        <Link href="#about" className="scroll-arrow">
          <ChevronDown size={150} />
        </Link>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h1 className="main-title">About The Conference</h1>
          <div className="row">
            <div className="about-col">
              <div>
                <h2 className="sub-title">ABOUT IIMS - 2025</h2>
                <p className="italic-text" style={{ textAlign: 'center' }}>International Conference on</p>
                <h3 className="highlight-text">Innovations in Infrastructural Materials & Sustainability</h3>
                <h3 className="highlight-text-1">(Hybrid Model - Online/Offline)</h3>
                <p className="description">
                  The Department of Civil Engineering is organizing two days international conference on
                  <b> Innovations in Infrastructural Materials & Sustainability (IIMS-2025)</b> in <b>Hybrid Mode
                    (online/offline).</b> The aim of IIMS-2025 is to bring together the international leading academicians, researchers and engineers,
                  both theoreticians and experimentalists, and to present their original research work of
                  very high quality in different areas of civil engineering. Both oral and poster
                  presentations are included in the conference program. The objective of the programme is to upgrade the
                  knowledge and skill of teachers employed in various disciplines of civil engineering with
                  a special focus on modern technologies aspects.
                </p>
                
                <div className="date-table">
                  <h2 className="sub-title">Important Dates</h2>
                  <div className="table-container">
                    <table>
                      <tbody>
                        <tr>
                          <td>Submission Deadline for Abstracts</td>
                          <td>February 14, 2025</td>
                        </tr>
                        <tr>
                          <td>Full Length Paper Submission</td>
                          <td>March 31, 2025</td>
                        </tr>
                        <tr>
                          <td>Early Bird Registration</td>
                          <td>March 25, 2025</td>
                        </tr>
                        <tr>
                          <td>Late Registration</td>
                          <td>April 13, 2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="fee-table">
                  <h2 className="sub-title">Registration Fee</h2>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Registration</th>
                          <th>Early Bird<br />(March 25, 2025)</th>
                          <th>Late Registration<br />(April 13, 2025)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Delegates from Abroad</td>
                          <td>US $150</td>
                          <td>US $200</td>
                        </tr>
                        <tr>
                          <td>Accompanying Person</td>
                          <td>US $100</td>
                          <td>US $100</td>
                        </tr>
                        <tr>
                          <td>Delegates from India</td>
                          <td>₹5000</td>
                          <td>₹6000</td>
                        </tr>
                        <tr>
                          <td>Accompanying Person</td>
                          <td>₹1500</td>
                          <td>₹2000</td>
                        </tr>
                        <tr>
                          <td>Indian Students</td>
                          <td>₹2500</td>
                          <td>₹3000</td>
                        </tr>
                        <tr>
                          <td>Foreign Students</td>
                          <td>US $75</td>
                          <td>US $80</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-col">
              <div>
                <h2 className="sub-title">Theme of Conference</h2>
                <ul className="theme-list">
                  <p>This conference cover in-depth coverage on possibly of the following areas:</p>
                  <br />
                  <li>Advances in Pavement Materials</li>
                  <li>Air Pollution-Clean Energy & Sustainability</li>
                  <li>Bridge Structures & Materials</li>
                  <li>Composite Materials in Civil Engineering</li>
                  <li>Computational Fluid Dynamics</li>
                  <li>Conservation of Water Bodies</li>
                  <li>Design of Earthquake Resistant Structures</li>
                  <li>Disaster Management</li>
                  <li>Energy and Environment</li>
                  <li>Environmental Modelling</li>
                  <li>Geo-Environmental Engineering</li>
                  <li>Geotechnical Engineering</li>
                  <li>Sustainability of Construction Design & Management</li>
                  <li>Green Building</li>
                  <li>Ground Improvement Techniques for Reduction of Seismic Hazard</li>
                  <li>Impact of Industrialization on Environment</li>
                  <li>Intelligent Transport Systems</li>
                  <li>Land Use Planning and Smart Cities</li>
                  <li>Plastic Pollution</li>
                  <li>Prefabricated Structural Elements</li>
                  <li>Recycled Building Materials</li>
                  <li>Remote Sensing and GIS Applications in Civil Engineering</li>
                  <li>Repair/Rehabilitation of Structures</li>
                  <li>Retrofitting Techniques</li>
                  <li>Seismic Slope Stability and Landslides</li>
                  <li>Significance of Nanotechnology in Construction Engineering</li>
                  <li>Smart Irrigation System</li>
                  <li>Smart Structures and Smart Materials</li>
                  <li>Smart Water Arrangement</li>
                  <li>Soil Dynamics and Earthquake Engineering</li>
                  <li>Soil-Structure Interaction Under Dynamic Loading</li>
                  <li>Structural Engineering</li>
                  <li>Structural Health Monitoring</li>
                  <li>Sustainable Development</li>
                  <li>Sustainable Materials, Processes and Eco-efficient Construction & Technologies</li>
                  <li>Sustainable Renewable Energy Technology for Green Buildings</li>
                  <li>Theory and Advanced Technology of Engineering Structure</li>
                  <li>Traffic Engineering & Modelling</li>
                  <li>Transportation Safety</li>
                  <li>Vibration Problems of High-Speed Railways</li>
                  <li>Waste Management</li>
                  <li>Water Harvesting and Groundwater Recharge</li>
                  <li>Water Resources and Hydropower Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageCarousel />

      <section className="section3">
        <div className="about-section">
          <h2 className="sub-title">About University</h2>
          <p className="description">
            Madan Mohan Malaviya University of Technology, Gorakhpur, has been established in the year 2013 by the
            Government of Uttar Pradesh as a non-affiliating technical university after reconstituting the Madan Mohan
            Malaviya Engineering College, Gorakhpur, which was established in 1962. The university has achieved significant
            recognition, ranking <strong>84th in the Engineering Category, 94th in the University Category, and 40th in the
              State Public University Category</strong> of the <strong>NIRF-2024</strong> rankings.

            In addition to undergraduate programs in Civil Engineering, Chemical Engineering, Computer Science &
            Engineering, Mechanical Engineering, Electrical Engineering, Electronics & Communication Engineering, and
            Information Technology, the university also offers <strong>B. Pharma, BBA, MBA, MCA, M. Tech, M.Sc., and
              Ph.D.</strong> courses in various specializations.

            Gorakhpur is well connected by air, road, and rail to major cities such as Lucknow (270 KM), Varanasi (197 KM),
            and Patna (220 KM). Direct flights are also available from New Delhi to Gorakhpur. The MMM University of
            Technology is situated on Deoria Road, about 9 KM from Gorakhpur Junction and 5 KM from Gorakhpur Airport.
          </p>
          <h2 className="sub-title">About Department of Civil Engineering</h2>
          <p className="description">
            The Civil Engineering Department established in 1962, in Madan Mohan Malaviya University of Technology,
            Gorakhpur, is one of the oldest departments of the University, working since its inception. The department has, over the
            years, established its status as a centre for imparting high quality technical education to undergraduate and
            post-graduate students and extending consultancy services to industries and various government departments
            located in the Eastern U. P. Besides undergraduate course of B. Tech. (Civil Engineering), the department offers three
            regular P. G. courses viz. M. Tech. in Structural Engineering, Seismic Design and Earthquake Engineering and M.
            Tech. in Environmental Engineering. The facilities for doctoral research are also available in the department. <br /><br />

            The department has experienced and highly qualified faculty members. The department capitalizes on its well
            qualified and dedicated faculty, which is clammering for achieving excellence. Further the strength of the
            department also lies in the strong linkages, it has with its alumni and various government/private organizations
            located in the region. The alumni of the department are well placed in various govt. / private organizations and
            are in close contact with the department. The department has been continuously interacting with the various
            government and private organization in the form of consultancy works, expert advice, design projects etc.
            <br /><br />

            With the strength of faculty, the department has the potential to raise the standards of technical education to
            any desired level, if infrastructural facilities are augmented. Needless to mention, the college itself is
            located in the under developed region of eastern U.P., which is both flood and drought prone and lacks in industrial
            development. These special needs of this under-developed region can only be tackled by us, because of our
            understanding of the local conditions.
          </p>
        </div>
        <div className="btn-container">
          <Link 
            href="https://drive.google.com/file/d/1czckAb_9uJ1Zq3ybQWQiqZBcsAaazPGJ/view?usp=sharing" 
            target="_blank"
            className="btn-shine"
          >
            Conference Leaflet
          </Link>
        </div>
      </section>
    </>
  );
}