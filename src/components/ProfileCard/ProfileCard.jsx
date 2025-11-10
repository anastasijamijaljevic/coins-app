import './ProfileCard.css';



export default function ProfileCard({ image, name, location, description, github }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <p className="card-location">{location}</p>
      <p className="card-description">{description}</p>
      <a href={github} className="card-icon" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
}
