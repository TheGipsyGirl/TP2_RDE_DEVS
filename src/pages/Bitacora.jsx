import "../styles/bitacora.css";

const migracion = [
  "Conversión de las páginas HTML en componentes React.",
  "Implementación de React Router para la navegación interna.",
  "Creación de un Dashboard principal como punto de acceso a todas las secciones.",
  "Incorporación de una Sidebar persistente para mejorar la experiencia de usuario.",
  "Reorganización de los estilos CSS para cada componente.",
  "Integración de módulos independientes como API, Galería, Bitácora, Arquitectura y Explorador JSON.",
];

const integrantes = [
  {
    nombre: "Valeria Natucci",
    tarea: "Integración general del proyecto, perfil personal, coordinación de componentes y adaptación visual.",
  },
  {
    nombre: "Luis Specterman",
    tarea: "Desarrollo de la integración con API externa y módulo de galería.",
  },
  {
    nombre: "Agustina Brandemann",
    tarea: "Diseño y desarrollo de componentes visuales para su perfil personal.",
  },
  {
    nombre: "Matías González",
    tarea: "Desarrollo de estructuras de datos, explorador JSON y documentación de arquitectura.",
  },
];

const mejoras = [
  "Arquitectura basada en componentes.",
  "Navegación dinámica mediante React Router.",
  "Dashboard principal interactivo.",
  "Mayor reutilización de código.",
  "Mejor organización del proyecto.",
  "Integración de datos externos mediante API.",
  "Exploración de datos en formato JSON.",
  "Mejor experiencia responsive para dispositivos móviles.",
];

function Bitacora() {
  return (
    <section className="bitacora-page">
      <header className="bitacora-hero">
        <p className="bitacora-eyebrow">TP2 · Migración a React</p>
        <h1>📋 Bitácora de Desarrollo</h1>
        <span>Registro del proceso de evolución del TP1 hacia RDE Devs.</span>
      </header>

      <div className="bitacora-grid">
        <article className="bitacora-card principal">
          <h2>🧠 Evolución del proyecto</h2>
          <p>
            Este Trabajo Práctico representa la continuidad y evolución del TP1
            desarrollado durante la primera etapa de la materia. El objetivo
            principal fue migrar el proyecto original, construido con HTML, CSS
            y JavaScript, hacia una arquitectura basada en React.
          </p>
          <p>
            Durante esta migración se reorganizó la aplicación utilizando
            componentes reutilizables, navegación mediante React Router y una
            estructura tipo SPA, mejorando la mantenibilidad y escalabilidad del
            proyecto.
          </p>
        </article>

        <article className="bitacora-card">
          <h2>⚙️ Decisiones de diseño</h2>
          <p>
            Se mantuvo la identidad visual general inspirada en la estética
            utilizada en el TP1, conservando la paleta basada en tonos oscuros y
            verde como color principal del proyecto.
          </p>
          <p>
            El equipo decidió conservar la personalidad individual de cada
            integrante mediante perfiles propios, pero integrados dentro de una
            interfaz común compuesta por Home Dashboard, Sidebar y sistema de
            navegación unificado.
          </p>
        </article>

        <article className="bitacora-card">
          <h2>🏗️ Migración técnica</h2>
          <ul>
            {migracion.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="bitacora-card">
          <h2>👥 Trabajo colaborativo</h2>
          <div className="integrantes-lista">
            {integrantes.map((integrante) => (
              <div className="integrante-item" key={integrante.nombre}>
                <strong>{integrante.nombre}</strong>
                <p>{integrante.tarea}</p>
              </div>
            ))}
          </div>
          <p>
            El trabajo se realizó utilizando Git y GitHub mediante ramas
            individuales y posterior integración al proyecto principal.
          </p>
        </article>

        <article className="bitacora-card">
          <h2>🧩 Dificultades encontradas</h2>
          <p>
            Uno de los principales desafíos fue adaptar el proyecto original a
            React manteniendo la funcionalidad existente y respetando la
            identidad del TP1.
          </p>
          <p>
            También fue necesario reorganizar la estructura de carpetas,
            componentes y rutas para cumplir con los requisitos de una aplicación
            SPA moderna.
          </p>
          <p>
            La integración de los distintos módulos desarrollados por cada
            integrante requirió tareas de validación, corrección de dependencias
            y unificación visual.
          </p>
        </article>

        <article className="bitacora-card">
          <h2>🚀 Mejoras incorporadas</h2>
          <ul>
            {mejoras.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="bitacora-card conclusion">
          <h2>🎯 Conclusión</h2>
          <p>
            La migración realizada permitió transformar un sitio estático en una
            aplicación React moderna, manteniendo la esencia del proyecto
            original y aplicando conceptos fundamentales de desarrollo frontend
            como componentes, rutas, reutilización de código y organización
            modular.
          </p>
          <p>
            El resultado final representa una evolución significativa respecto al
            TP1 y demuestra la incorporación de nuevas herramientas y
            metodologías de desarrollo web.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Bitacora;