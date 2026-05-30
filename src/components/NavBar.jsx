import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="site-nav" aria-label="Navegación secundaria">
      <ul>
        <li>
          <NavLink end to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink to="/proyectos" className={({ isActive }) => (isActive ? 'active' : '')}>
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/bitacora" className={({ isActive }) => (isActive ? 'active' : '')}>
            Bitácora
          </NavLink>
        </li>
        <li>
          <a href="https://tp1-grupal-front.vercel.app/index.html" target="_blank" rel="noreferrer">
            Volver al Grupo
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
