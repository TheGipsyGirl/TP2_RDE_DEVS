import { Link, NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="sidebar-ghost">👻</span>
        <h2>Rulos de Estatua</h2>
        <span>¿A quién vas a llamar?</span>
      </div>

      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li className="nav-section">— Cazadores —</li>
          <li><NavLink to="/agustina">Agustina</NavLink></li>
          <li><NavLink to="/valeria">Valeria</NavLink></li>
          <li><NavLink to="/matias">Matías</NavLink></li>
          <li><NavLink to="/luis">Luis</NavLink></li>
          <li className="nav-section">— Secciones —</li>
          <li><NavLink to="/json">JSON Explorer</NavLink></li>
          <li><NavLink to="/api">API</NavLink></li>
          <li><NavLink to="/galeria">Galería</NavLink></li>
          <li><NavLink to="/bitacora">Bitácora</NavLink></li>
          <li><NavLink to="/arquitectura">Arquitectura</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;