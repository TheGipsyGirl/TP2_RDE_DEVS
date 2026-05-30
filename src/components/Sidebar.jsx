import { NavLink } from 'react-router-dom'

function Sidebar({ isOpen, onClose }) {
  const closeSidebar = onClose ?? (() => {})

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`} aria-label="Navegación principal">
      <button type="button" className="mobile-close-btn" onClick={closeSidebar} aria-label="Cerrar menú de navegación">
        ×
      </button>
      <div className="sidebar-top">
        <img src="/img/logo.jpg" alt="logo" className="sidebar-logo" />
        <h3>Grupo TP</h3>
      </div>
      <nav className="sidebar-nav" role="navigation" aria-label="Menú lateral">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}>
          Dashboard
        </NavLink>
        {/* <NavLink to="/explorer" onClick={closeSidebar}>Explorador</NavLink>*/}
        {/*<NavLink to="/api" onClick={closeSidebar}>API Remota</NavLink>*/}
        <NavLink to="/galeria" onClick={closeSidebar}>Galería</NavLink>
        {/*<NavLink to="/render-tree" onClick={closeSidebar}>Árbol</NavLink>*/}
        {/*<NavLink to="/bitacora" onClick={closeSidebar}>Bitácora</NavLink>*/}
        <NavLink to="/about" onClick={closeSidebar}>Sobre mí</NavLink>
        <NavLink to="/proyectos" onClick={closeSidebar}>Proyectos</NavLink>
        <NavLink to="/contacto" onClick={closeSidebar}>Contacto</NavLink>
        <a href="https://tp1-grupal-front.vercel.app/index.html" target="_blank" rel="noreferrer noopener" onClick={closeSidebar}>Volver al Grupo</a>
      </nav>
    </aside>
  )
}

export default Sidebar
