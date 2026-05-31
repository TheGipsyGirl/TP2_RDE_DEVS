import { Link } from "react-router-dom";
import "../styles/home.css";

const integrantes = [
  {
    nombre: "Valeria Natucci",
    rol: "Frontend creativa · Diseño Web",
    descripcion:
      "Desarrolladora enfocada en identidad visual, interfaces modernas y experiencias digitales con personalidad.",
    imagen: "/img/valeria/vale.jpg",
    ruta: "/valeria",
  },
  {
    nombre: "Agustina Brandemann",
    rol: "Frontend Developer",
    descripcion:
      "Desarrolladora enfocada en el desarrollo de interfaces y experiencia de usuario.",
    imagen: "/img/agustina/agus.jpg",
    ruta: "/agustina",
  },
  {
    nombre: "Matías Gonzalez",
    rol: "React Developer",
    descripcion:
      "Programador orientado a lógica, componentes dinámicos y manejo de datos en React.",
    imagen: "/img/matias/matias.jpg",
    ruta: "/matias",
  },
  {
    nombre: "Luis Specterman",
    rol: "Frontend · API Integration",
    descripcion:
      "Programador enfocado en integración de APIs, galería interactiva y funcionalidades dinámicas.",
    imagen: "/img/img_luis/luis.jpg",
    ruta: "/luis",
  },
];

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <p className="home-eyebrow">IFTS N° 29 - 2° AÑO - FRONT END - PROF. MARTINEZ </p>

        <h1>
          Bienvenidos a <span>RDE DEVS</span>
        </h1>

        <p>
          Dashboard desarrollado con React, React Router y componentes
          reutilizables. 
          Este proyecto representa la evolución del TP1 hacia una
          arquitectura moderna basada en componentes.
        </p>
      </div>

      <div className="quick-stats">
        <article>
          <h3>4</h3>
          <p>Integrantes</p>
        </article>

        <article>
          <h3>React</h3>
          <p>Arquitectura SPA</p>
        </article>

        <article>
          <h3>Vercel</h3>
          <p>Deploy final</p>
        </article>
      </div>

      <div className="home-section-title">
        <h2>Integrantes del equipo</h2>
        <p>Te invitamos a conocernos.</p>
      </div>

      <div className="members-grid">
        {integrantes.map((integrante, index) => (
          <article
            className="member-card"
            key={integrante.nombre}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="member-img-box">
              <img src={integrante.imagen} alt={integrante.nombre} />
            </div>

            <div className="member-content">
              <span>{integrante.rol}</span>
              <h3>{integrante.nombre}</h3>
              <p>{integrante.descripcion}</p>

              <Link to={integrante.ruta}>Ver perfil</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;