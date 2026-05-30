function Bitacora() {
  return (
    <section className="section bitacora-section" aria-label="Bitácora de migración">
      <div className="bitacora-header">
        <h2>Bitácora de migración</h2>
        <p>Resumen de decisiones, implementación y mejoras tras migrar el portafolio a una aplicación React.</p>
      </div>

      <article className="bitacora-entry">
        <h3>1. Objetivo del proyecto</h3>
        <p>Transformar un sitio de portafolio estático en una SPA interactiva usando React, conservando el enlace al proyecto grupal original y mejorando la experiencia de usuario.</p>
      </article>

      <article className="bitacora-entry">
        <h3>2. Estructura de la aplicación</h3>
        <ul>
          <li><strong>Sidebar fijo:</strong> navegación principal con acceso a Dashboard, Explorador, API, Galería, Árbol y Bitácora.</li>
          <li><strong>Routing con React Router:</strong> rutas definidas para cada página sin recargar el sitio.</li>
          <li><strong>Componentes reutilizables:</strong> carrusel, progress bars, tech stack y botones sociales.</li>
        </ul>
      </article>

      <article className="bitacora-entry">
        <h3>3. Funcionalidades implementadas</h3>
        <ul>
          <li>Dashboard con tarjetas de integrantes y navegación a perfiles.</li>
          <li>Explorador dinámico de JSON local con búsqueda y filtros.</li>
          <li>Consumo de API externa con paginación usando JSONPlaceholder.</li>
          <li>Galería Lightbox con navegación por teclado y cierre con ESC.</li>
          <li>Diagrama de árbol que muestra la jerarquía de renderizado de la app.</li>
        </ul>
      </article>

      <article className="bitacora-entry">
        <h3>4. Mejoras de accesibilidad</h3>
        <ul>
          <li>Enlaces claros y botones con `aria-label` donde corresponde.</li>
          <li>Modo Lightbox modal con `aria-modal` y soporte de teclado.</li>
          <li>Resumen visual legible con contrastes suaves y estructura semántica.</li>
        </ul>
      </article>

      <article className="bitacora-entry">
        <h3>5. Próximos pasos</h3>
        <p>Continuar con ajustes visuales y validación para dispositivos móviles, además de agregar accesibilidad reforzada y posibles animaciones suaves en el árbol de renderizado.</p>
      </article>
    </section>
  )
}

export default Bitacora
