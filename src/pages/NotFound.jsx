import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section notfound-section" aria-label="Página no encontrada">
      <div className="notfound-card">
        <h2>404 - Página no encontrada</h2>
        <p>La ruta que buscas no existe. Usa la navegación lateral o vuelve al inicio.</p>
        <Link to="/" className="button-link">Volver al Dashboard</Link>
      </div>
    </section>
  )
}

export default NotFound
