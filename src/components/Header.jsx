function Header({ onToggleSidebar }) {
  return (
    <header className="site-header">
      <button type="button" className="mobile-menu-btn" onClick={onToggleSidebar} aria-label="Abrir menú de navegación">
        ☰
      </button>
      <img src="/img/logo.jpg" alt="Logo" id="logo" />
      <h1>Portfolio Personal Marcelo Matias Gonzalez</h1>
    </header>
  )
}

export default Header
