import { Link } from "react-router-dom";
import "../styles/home.css";

function ProfileCard({ nombre, rol, ciudad, avatar, ruta, delay }) {
  return (
    <Link to={ruta} className="profile-card" style={{ animationDelay: `${delay}s` }}>
      <div className="card-avatar">
        <img src={avatar} alt={nombre} />
      </div>
      <h3>{nombre}</h3>
      <span className="card-rol">{rol}</span>
      <span className="card-ciudad">📍 {ciudad}</span>
      <button className="card-btn">Ver ficha →</button>
    </Link>
  );
}

export default ProfileCard;