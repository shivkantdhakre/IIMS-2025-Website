import Image from 'next/image';
import CommitteeCard from '@/components/ui/CommitteeCard';

const igsMembers = [
  { name: 'Dr. Anil Joseph', title: 'President, IGS', location: 'India', link: 'https://www.igs.org.in/storage/users/11791/user1-060623065333.jpg' },
  { name: 'Dr. A.P. Singh', title: 'Secretary, IGS', location: 'India', link: 'https://www.igs.org.in/storage/users/12902/AP-SINGH-150924062055.jpg' },
  { name: 'Prof. N. K. Samadhiya', title: 'Ex President and Executive Committee Member, IGS', location: 'IIT Roorkee, India', link: 'https://channeli.in/media/kernel/display_pictures/3266b869-38b3-48f7-a6fa-9479f688c31f.jpg' },
  { name: 'Prof. Kumar Venkatesh', title: 'Chairman, IGS Allahabad Chapter', location: 'MNNIT Allahabad, Prayagraj, India', link: 'https://mnnit.ac.in/userprofile/uploads/91055-Photo_KV.jpg' },
  { name: 'Dr. V. P. Singh', title: 'Member, IGS Allahabad Chapter', location: 'MNNIT Allahabad, Prayagraj, India', link: 'https://mnnit.ac.in/userprofile/uploads/33351-VP%20SIR%20IMAGE.jpeg' },
  { name: 'Dr. Vijay Kumar', title: 'Member, IGS Allahabad Chapter', location: 'MNNIT Allahabad, Prayagraj, India', link: 'https://mnnit.ac.in/userprofile/uploads/94761-DSC_6539.JPG' },
];

export default function Publication() {
  return (
    <>
      <section className="sub-header">
        <h1>Conference Publications</h1>
      </section>

      <section className="abstract-info">
        <div className="about-section">
          <h2 className="sub-title">Abstract</h2>
          <p className="description">
            Prospective authors are hereby invited to submit a 1-page abstract on the conference website. Full contact
            information (name, affiliation, e-mail ID and contact number) of the corresponding author must be provided.
            Abstracts will be reviewed by the technical committee, and the acceptance of abstracts will be notified on the
            conference website. Template for the preparation of abstract and full length paper will be made available on the
            conference website as well as Google form.
          </p>
          <h2 className="sub-title">Full-Length Paper</h2>
          <p className="description">
            A maximum of 10 page manuscript soft copy (in the form of an MS word document) in provided template should be
            uploaded on the conference website. The paper should be strictly well within 10 pages fully inclusive of text,
            illustrations and references. The manuscript would be peer-reviewed and authors would then be informed of the
            comments/review/suggestions through the review process for the subsequent submission of the revised manuscript.
            Conference participants will be provided with e-proceedings.
          </p>
          <h2 className="sub-title">Publications</h2>
          <p className="description">
            It may be noted that all accepted papers will be published in e-proceedings. Post conference, selected papers
            from e-proceedings will be considered as book chapters for Lecture <strong>Notes in Civil Engineering, Springer
              Nature Singapore</strong> and the same will be notified accordingly.
          </p>
          <ul>
            <li>
              <p className="description" style={{ color: 'red' }}>
                <strong>Selected papers from the conference will be published by Springer
                  as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers
                  that pass these checks will be published.</strong>
              </p>
            </li>
            <li>
              <p className="description" style={{ color: 'red' }}>
                <strong>Springer Nature does not charge any money for publication of
                  Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not
                  considered for publication.</strong>
              </p>
            </li>
          </ul>
          <div className="sponser">
            <Image 
              src="https://cdn-images-1.medium.com/max/800/1*H7Pq3wD3b7gHKQQwXZlSRg.jpeg" 
              alt="Springer Nature"
              width={200}
              height={100}
            />
          </div>
          <br />
          <h2 className="sub-title">Associations</h2>
          <p className="description">
            In association with the <strong>Indian Geotechnical Society, Allahabad Chapter</strong>, it is highlighted that
            all collaborative activities will be aimed at promoting advancements in geotechnical engineering. Post-event,
            selected outcomes from these activities may be featured as technical contributions in reputed publications,
            furthering the dissemination of knowledge and fostering academic excellence.
          </p>
          <div className="sponser">
            <Image 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICv2df1h6PQOCMsGeJ70JzcV7K_G14o6uIQ&s" 
              alt="Indian Geotechnical Society"
              width={200}
              height={100}
            />
          </div>
        </div>
      </section>

      <h2 className="sub-title">IGS Committee Members</h2>
      <div className="Acommittee-cards-container">
        {igsMembers.map((member, index) => (
          <CommitteeCard
            key={index}
            name={member.name}
            title={member.title}
            location={member.location}
            imageUrl={member.link}
          />
        ))}
      </div>
    </>
  );
}