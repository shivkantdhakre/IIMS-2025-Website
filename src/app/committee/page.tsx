import CommitteeCard from '@/components/ui/CommitteeCard';

const advisoryMembers = [
  { name: 'Prof. Sanjay Kumar Shukla', title: 'Edith Cowan University', location: 'Australia', link: 'https://www.ecu.edu.au/__data/assets/image/0013/1021522/SHUKLA-Sanjay_Photo_February-2023.jpg' },
  { name: 'Prof. M. Parida', title: 'IIT Roorkee', location: 'India', link: 'https://crridom.gov.in/sites/default/files/images/prof-parida-director-crri.jpg' },
  { name: 'Prof. C.S.P. Ojha', title: 'IIT Roorkee', location: 'India', link: 'https://civil.iitr.ac.in/IMG/4-CSOjha.jpg' },
  { name: 'Prof. P.K. Gupta', title: 'IIT Roorkee', location: 'India', link: 'https://civil.iitr.ac.in/IMG/2-PKGupta.jpg' },
  { name: 'Prof. K.K. Shukla', title: 'Director', location: 'MANIT Bhopal, India', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5aSfAwG-NZn6BU19qhRZMuHiux8TpHpp2GV5ZSI25QrjndRGtRD8XTDFL2lNUPEiHho&usqp=CAU' },
  { name: 'Prof. Nitin Tripathi', title: 'AIT, Bangkok', location: 'Thailand', link: 'https://ait.ac.th/wp-content/uploads/2021/12/DSC03087-scaled-e1718705527468.jpg' },
  { name: 'Prof. A.K. Sachan', title: 'MNNIT Allahabad', location: 'Prayagraj, India', link: 'https://mnnit.ac.in/userprofile/uploads/26058-sachanphoto.jpg' },
  { name: 'Prof. K.K. Pathak', title: 'IIT BHU', location: 'India', link: 'https://prev.iitbhu.ac.in/sites/default/files/styles/iitbhu_profile/public/user_pictures/picture-97-1509620043.png?itok=oaGkJiab' },
  { name: 'Dr. Sathish Kumar Palaniappan', title: 'KMUT, North Bangkok', location: 'Thailand', link: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=vmDZpO8AAAAJ&citpid=20' },
  { name: 'Prof. Bhola N.S. Ghimire', title: 'Institute of Engineering, Tribhuvan University', location: 'Kathmandu, Nepal', link: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=JGH-cZAAAAAJ&citpid=4' },
  { name: 'Ex. Prof. S.L. Dhingra', title: 'IIT Bombay', location: 'India', link: 'https://www.civil.iitb.ac.in/~dhingra/local/user/gimage/dhingra_450_338.jpg' },
  { name: 'Prof. Dharamveer Singh', title: 'IIT Bombay', location: 'India', link: 'https://www.civil.iitb.ac.in//resources/images/people_image/33/dce7a8d75ca154bd33e16ae210ee9736.jpeg' },
  { name: 'Prof. Kumar Venkatesh', title: 'MNNIT Allahabad', location: 'Prayagraj, India', link: 'https://mnnit.ac.in/userprofile/uploads/91055-Photo_KV.jpg' },
];

const studentCoordinators = [
  { name: 'Padmsen Shubham', title: 'Ph.D. Scholar', location: 'Civil Engineering Department', link: 'https://media-hosting.imagekit.io/a43851104223416e/Padmsen_Shubham.jpg?Expires=1839095651&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RxDoZbohg6yl9mQ8Mu3exPlVq2GntoeLGGgrWqcjuFiaoKBfuZ4wZ-l4tuEfGxfAAlPzYOa37rsusyQMfkNdoy6ZeE2PYi9O5eX4k641lhd~su5nWwVlPb6pxbW~qA5v3MGIN7YYGr7wlKRkJzLk6m8vTsaHPZYBeWmzgS5MzGJkTa3YnSE8tfAuj2vv~MP06jpmoCwHM~rEs13TKsSg-4V2fx9WhXpUkBZCiMC9jMmewTXBN3mMi8LoxNxWbHH1SJBLq6wHaWBAh3YaxvppZ7zh-4MRltFLmTK4C9r6dK9XPKdekBOgYeMZJ2jtYLDgSNd9F-a36oJv7L8rfsiXmQ__', contact: ' ' },
  { name: 'Ashutosh Kumar Yadav', title: 'Ph.D. Scholar', location: 'Civil Engineering Department', link: 'https://media-hosting.imagekit.io/ef35fcb5a71449b6/Ashutosh_Kumar_Yadav.jpg?Expires=1839095651&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CbkTT-POwWEryD4bmK-JEYbC2GUrsgMH32iP5j04-g9ZeesBIJgkuyKxO83azwvF06Fz7VckT3ivn0hYIzyhbLfI4Mc9mGNYF-rbRJeNPwOu1PHRTqtCUUj3gKBWCnjJAKVmIKsDmi8qtgrLY5gxrNRt1Y0c~WHes1bsApIKI9e9lK1UgGsH3dbG1quWO34TnjnWzeRBKFjaIu-qJEavEmChRkaJffFTcQRa9mBhkPa7XdjOL677GpjB-mDXzIHZYymVbVHmVGAezy5YZvXwHhKBNoFjP5rLkbrmTsjSB958VTp-HzDQ0EVCVIE9hVzE3FqzrmQyGDo7SycvHMyFJA__', contact: ' ' },
  { name: 'Shivansh Shukla', title: 'B.Tech, Final Year', location: 'Civil Engineering Department', link: 'https://media-hosting.imagekit.io//ac757ffd7baa4768/Shivansh_Shukla.png?Expires=1833796500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r9bCkJtP6131VMU8pX5W7LT-VAHdFKFcZsoyKJLnXxGZ~EV7tLudJ1l~8hwd85Eu249g4ckx-2gEx1xSLg2gNW-rScis2mh3bPI1mc960fCv26Bh03Q8s-pAQZ~MF2sZXImiKuvoR8t99JTPg~Ssa0r6Yz82UAZmUecR7R5ZaPDw3y1cvfVverzGozgPPyFKJNgIy5jBNL2UxLBGLT2FiFFTHvkgqRiE~ioO0MtHka-YPZ0phPdT~tAusdgVQM~K68UJmlJqhTW2Rf4sSgMfWrF-H0dnPNU3L8xIXo8-UIoYQGgwteS1SgvPrYd7Kj1verWPrv8pcehymv6ZitRV1A__', contact: '+91 7054471799' },
  { name: 'Shrijal Gupta', title: 'B.Tech, Sophomore Year', location: 'Electronics And Communication Engineering Department', link: 'https://media-hosting.imagekit.io//6e4aa88421ce4e0e/Shrijal_Gupta.jpg?Expires=1833796563&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eUzmeb2fog4wV-KSSQICwQVLRnPPDpAdJQqVnEmSURf0SJusZ97ty5zMbi-YNgmsasjKKeicIRo69ptOd~kLIiZPWVSjVCpIa1C~wxgfexCA9ewKt9rr3XkMPqGzaVzRm~AoeZKB0unaodO~agM0oKHxcAfX67XDMKb6qxYuqkm7lO62G4YDYkx6hWFsCLfbMsq1MnHCDU8rpa7z31CqeI6UUS34lMAEqr9k-U4S4g2ILLboWnw~t-wpSBkANbRPBhFUMA5TuVuetyKerpiiF3TpewEYpVCvWOnQ~AR-q09~HdJDLxB7EBC1xb2KJRaMrCzf6bsfEsxZq8Ha~gYdZg__', contact: '+91 8840384771' },
  { name: 'Shiv Kant Dhakre', title: 'B.Tech, Sophomore Year', location: 'Computer Science And Engineering Department', link: 'https://media-hosting.imagekit.io//664db0c4abde4789/Shiv_Kant_Dhakre.jpg?Expires=1833796563&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iGc~DAZsXJEMttGXTRwWuEurJqAQ63gabXDAUJN-VKd99eP8n~6MF83gg-33m8KuO0jfOJvmyVqeLDWPIwrdAE4nnKPPiW3gIcum19GdapZr5qAA9UBuhaeibsm20hVqSxPiHAD3V~wdwyg1jbbRzALBDMVJD2lQbQDhUNa518L99x2C-OeUu57Z4tc04TTuLywPgUTQvczxOK54Q17pvXDB7lwFNoJ~IwBOm64l4mpx5Yurbvm6HSlX5xtvXm21k37FYXuBIbBK1Q2vwjyffGVc-eR3mTb~tPH-skV~c2hvLkfkXGN2Ibuvb9h7aMdqwymAClAK43wFkAtOl~awbg__', contact: '+91 6396107509' }
];

export default function Committee() {
  return (
    <>
      <section className="sub-header">
        <h1>Organising Committee</h1>
      </section>

      <section className="committee">
        <h2 className="sub-title">Patron</h2>
        <div className="parent-card">
          <CommitteeCard
            name="Prof. J. P. Saini"
            title="Hon'ble Vice Chancellor"
            location="Madan Mohan Malaviya University of Technology, Gorakhpur"
            imageUrl="https://www.mmmut.ac.in/images/VC2.png"
          />
        </div>

        <h2 className="sub-title">Chairman</h2>
        <div className="parent-card">
          <CommitteeCard
            name="Prof. A.K. Mishra"
            title="Head"
            location="Civil Engineering Department, Madan Mohan Malaviya University of Technology, Gorakhpur"
            imageUrl="https://www.mmmut.ac.in/News_content/IMGFaculty29.jpg?637507973256744939"
          />
        </div>

        <h2 className="sub-title">Coordinators</h2>
        <div className="committee-row">
          <div className="parent-card">
            <CommitteeCard
              name="Dr. Vinay Kumar Singh"
              title="Assistant Professor"
              location="Department of Civil Engineering, Madan Mohan Malaviya University of Technology, Gorakhpur"
              imageUrl="https://www.mmmut.ac.in/News_content/IMGFaculty153.jpg?63750505620939957"
              email="vksce@mmmut.ac.in"
              phone="+91 9235552358"
            />
          </div>
          <div className="parent-card">
            <CommitteeCard
              name="Dr. Sneha Gupta"
              title="Assistant Professor"
              location="Department of Civil Engineering, Madan Mohan Malaviya University of Technology, Gorakhpur"
              imageUrl="https://www.mmmut.ac.in/News_content/IMGFaculty246.jpg"
              email="sgce@mmmut.ac.in"
              phone="+91 9235552354"
            />
          </div>
        </div>
      </section>

      <h2 className="sub-title">Advisory Committee Members</h2>
      <div className="Acommittee-cards-container">
        {advisoryMembers.map((member, index) => (
          <CommitteeCard
            key={index}
            name={member.name}
            title={member.title}
            location={member.location}
            imageUrl={member.link}
          />
        ))}
      </div>

      <section className="committee-1">
        <h2 className="sub-title">Organizing Committee</h2>
        <div className="container-updated">
          {/* Technical and Publication Committee */}
          <div className="committee-updated">
            <div className="committee-title-updated">Technical and Publication Committee</div>
            <br />
            <div className="card-container-updated">
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty29.jpg?637507973256744939" alt="Member" />
                <h3>Prof. A. K. Mishra</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty153.jpg?63750505620939957" alt="Member" />
                <h3>Dr. Vinay Kumar Singh</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty246.jpg" alt="Member" />
                <h3>Dr. Sneha Gupta</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty285.jpg?63752959284513953" alt="Member" />
                <h3>Dr. Pradeep Muley</h3>
                <p>MMMUT</p>
              </div>
            </div>
          </div>

          {/* Academic and Industrial Collaboration Committee */}
          <div className="committee-updated">
            <div className="committee-title-updated">Academic and Industrial Collaboration Committee</div>
            <div className="card-container-updated">
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty67.JPG?637533086151612222" alt="Member" />
                <h3>Prof. Shri Ram</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://www.sirmvit.edu/wp-content/uploads/2024/06/Pavan-Photo-175x175.jpg" alt="Member" />
                <h3>Dr. Pavan Kumar Kummamuru</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty280.jpg?63786875698220601" alt="Member" />
                <h3>Dr. Rohit Kumar</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty275.jpg" alt="Member" />
                <h3>Dr. Vinay Bhushan Chauhan</h3>
                <p>MMMUT</p>
              </div>
            </div>
          </div>

          {/* Sponsorship Committee */}
          <div className="committee-updated">
            <div className="committee-title-updated">Sponsorship Committee</div>
            <br />
            <div className="card-container-updated">
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty67.JPG?637533086151612222" alt="Member" />
                <h3>Prof. Shri Ram</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://www.sirmvit.edu/wp-content/uploads/2024/06/Pavan-Photo-175x175.jpg" alt="Member" />
                <h3>Dr. Pavan Kumar Kummamuru</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty410.JPG" alt="Member" />
                <h3>Dr. R. K. Shukla</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty275.jpg" alt="Member" />
                <h3>Dr. Vinay Bhushan Chauhan</h3>
                <p>MMMUT</p>
              </div>
            </div>
          </div>

          {/* Publicity and Invitation Committee */}
          <div className="committee-updated">
            <div className="committee-title-updated">Publicity and Invitation Committee</div>
            <br />
            <div className="card-container-updated">
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty79.jpg" alt="Member" />
                <h3>Prof. Govind Pandey</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty73.jpg" alt="Member" />
                <h3>Shri R. D. Patel</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty410.JPG" alt="Member" />
                <h3>Dr. R. K. Shukla</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty280.jpg?63786875698220601" alt="Member" />
                <h3>Dr. Rohit Kumar</h3>
                <p>MMMUT</p>
              </div>
            </div>
          </div>

          {/* Accommodation and Hospitality Committee */}
          <div className="committee-updated">
            <div className="committee-title-updated">Accommodation and Hospitality Committee</div>
            <div className="card-container-updated">
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty29.jpg?637507973256744939" alt="Member" />
                <h3>Prof. A. K. Mishra</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty285.jpg?63752959284513953" alt="Member" />
                <h3>Dr. Pradeep Muley</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty275.jpg" alt="Member" />
                <h3>Dr. Vinay Bhushan Chauhan</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty268.jpg?63750368675332120" alt="Member" />
                <h3>Dr. Madan Chandra Maurya</h3>
                <p>MMMUT</p>
              </div>
            </div>
          </div>

          {/* Registration Committee */}
          <div className="committee-updated">
            <div className="committee-title-updated">Registration Committee</div>
            <br />
            <div className="card-container-updated">
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty29.jpg?637507973256744939" alt="Member" />
                <h3>Prof. A. K. Mishra</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty153.jpg?63750505620939957" alt="Member" />
                <h3>Dr. Vinay Kumar Singh</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty246.jpg" alt="Member" />
                <h3>Dr. Sneha Gupta</h3>
                <p>MMMUT</p>
              </div>
              <div className="card-updated">
                <img src="https://mmmut.ac.in/News_content/IMGFaculty268.jpg?63750368675332120" alt="Member" />
                <h3>Dr. Madan Chandra Maurya</h3>
                <p>MMMUT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="committee-1">
        <h2 className="sub-title">Student Coordinators</h2>
        <div className="Acommittee-cards-container">
          {studentCoordinators.map((coordinator, index) => (
            <CommitteeCard
              key={index}
              name={coordinator.name}
              title={coordinator.title}
              location={coordinator.location}
              imageUrl={coordinator.link}
              phone={coordinator.contact}
            />
          ))}
        </div>
      </section>
    </>
  );
}