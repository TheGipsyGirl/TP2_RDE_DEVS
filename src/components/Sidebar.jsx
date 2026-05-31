import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <img src="/img/logo.png" alt="RDE DEVS" />
        <h2></h2>
        <span></span>
      </div>

      <nav>
        <ul>

          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/valeria">Valeria</Link>
          </li>

          <li>
            <Link to="/agustina">Agustina</Link>
          </li>

          <li>
            <Link to="/matias">Matías</Link>
          </li>

          <li>
            <Link to="/luis">Luis</Link>
          </li>

          <li>
            <Link to="/json">JSON Explorer</Link>
          </li>

          <li>
            <Link to="/api">API</Link>
          </li>

          <li>
            <Link to="/galeria">Galería</Link>
          </li>

          <li>
            <Link to="/bitacora">Bitácora</Link>
          </li>

          <li>
            <Link to="/arquitectura">Arquitectura</Link>
          </li>

        </ul>
      </nav>

    </aside>
  );
}

export default Sidebar;