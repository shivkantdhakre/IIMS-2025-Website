import Image from 'next/image';

interface CommitteeCardProps {
  name: string;
  title: string;
  location?: string;
  imageUrl: string;
  email?: string;
  phone?: string;
}

const CommitteeCard = ({ name, title, location, imageUrl, email, phone }: CommitteeCardProps) => {
  return (
    <div className="card">
      <div className="card-border-top"></div>
      <div className="img">
        <Image 
          src={imageUrl} 
          alt={`${name} Profile`}
          width={80}
          height={80}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
      <div className="card-text">
        <span>{name}</span>
        <p className="job">{title}</p>
        {location && <p className="location">{location}</p>}
        {email && <p className="job" style={{ fontSize: '12px' }}>{email}</p>}
        {phone && <p className="job" style={{ fontSize: '12px' }}>{phone}</p>}
      </div>
    </div>
  );
};

export default CommitteeCard;