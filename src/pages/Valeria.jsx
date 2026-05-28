import "../styles/valeria.css";

import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

function Valeria() {
  return (

    <section className="valeria-page">

      <div className="valeria-hero">

        <img
          src="/integrantes/valeria/perfil.jpg"
          alt="Valeria Natucci"
        />

        <div className="hero-info">

          <h1>
            Valeria Natucci
          </h1>

          <span className="nickname">
            @TheGypsyGirl
          </span>

          <p>
            Frontend developer creativa enfocada en diseño web,
            branding digital y experiencias visuales modernas.
            Estudiante de Desarrollo de Software y Profesorado de Inglés.
          </p>

          <div className="socials">

            <a
              href="https://github.com/TheGipsyGirl"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/paula-valeria-natucci"
              target="_blank"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <div className="skills-section">

        <h2>Habilidades</h2>

        <div className="skill">

          <p>HTML</p>

          <div className="bar">
            <div className="progress html"></div>
          </div>

        </div>

        <div className="skill">

          <p>CSS</p>

          <div className="bar">
            <div className="progress css"></div>
          </div>

        </div>

        <div className="skill">

          <p>JavaScript</p>

          <div className="bar">
            <div className="progress js"></div>
          </div>

        </div>

        <div className="skill">

          <p>React</p>

          <div className="bar">
            <div className="progress react"></div>
          </div>

        </div>

      </div>

      <div className="tech-stack">

        <h2>Tech Stack</h2>

        <div className="icons">

          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaGitAlt />

        </div>

      </div>

      <div className="projects-section">

        <h2>Proyectos</h2>

        <div className="projects-grid">

          <article className="project-card">

            <img
              src="/integrantes/valeria/proyectos/synergy.png"
              alt="Synergy"
            />

            <h3>Synergy Sport Club</h3>

            <p>
              Aplicación móvil para gestión de socios y actividades deportivas.
            </p>

          </article>

          <article className="project-card">

            <img
              src="/integrantes/valeria/proyectos/portfolio.png"
              alt="Portfolio"
            />

            <h3>Portfolio Personal</h3>

            <p>
              Portfolio creativo desarrollado con HTML, CSS y JavaScript.
            </p>

          </article>

          <article className="project-card">

            <img
              src="/integrantes/valeria/proyectos/dashboard.png"
              alt="Dashboard"
            />

            <h3>React Dashboard</h3>

            <p>
              Dashboard moderno realizado en React para RDE Devs.
            </p>

          </article>

        </div>

      </div>

    </section>

  );
}

export default Valeria;