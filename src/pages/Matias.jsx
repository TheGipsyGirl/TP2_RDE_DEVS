import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import "../styles/matias.css";

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "JavaScript", level: 65 },
  { name: "React", level: 55 },
  { name: "Git & GitHub", level: 70 },
];

const projects = [
  {
    title: "TP1 Frontend Grupal",
    desc: "Sitio grupal realizado con HTML, CSS y JavaScript.",
    tech: "HTML · CSS · JS",
    href: "img/matias/proyecto1.png",
  },
  {
    title: "JSON Explorer",
    desc: "Módulo para visualizar y filtrar datos locales en React.",
    tech: "React · JSON · Search",
    href: "img/matias/proyecto2.jpg",
  },
  {
    title: "RDE Devs Dashboard",
    desc: "Migración del proyecto grupal a una SPA con React Router.",
    tech: "React · Router · Components",
    href: "logo.png",
  },
];
const movies = [
  {
    title: "The Matrix",
    desc: "Ciencia ficción, tecnología y una mirada filosófica sobre la realidad.",
    img: "/img/matias/matrix.jpg",
  },
  {
    title: "Interstellar",
    desc: "Ciencia ficción, viajes espaciales y la conexión humana a través del tiempo.",
    img: "/img/matias/interestellar.jpg",
  },
  {
    title: "Inception",
    desc: "Thriller psicológico que explora los sueños y la mente humana.",
    img: "/img/matias/inception.jpg",
  },
];

const albums = [
  {
    title: "Oktubre",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    img: "/img/matias/oktubre.jpg",
  },
  {
    title: "Sumo",
    artist: "Sumo",
    img: "/img/matias/sumo.jpg",
  },
  {
    title: "Despedazados",
    artist: "Las Pelotas",
    img: "/img/matias/despedazados.jpg",
  },
];

function Matias() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="matias-page">
      <div className="matias-terminal">
        <div className="terminal-top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="terminal-content">
          <p className="terminal-line">
            <span>$</span> npm run profile --matias
          </p>

          <h1>Matías González</h1>

          <p className="terminal-subtitle">
            React Developer · Data Logic · Frontend Systems
          </p>

          <p className="terminal-text">
            Estudiante de desarrollo web orientado a la lógica, la estructura de
            datos y la creación de componentes funcionales. En este TP2, su
            perfil representa la migración del trabajo grupal hacia una
            arquitectura React organizada y escalable.
          </p>

          <div className="matias-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="matias-grid">
        <article className="matias-card">
          <h2>Sobre mí</h2>
          <p>
            Me interesa comprender cómo funcionan las aplicaciones por dentro:
            rutas, datos, componentes, estados y lógica. Busco desarrollar
            soluciones claras, ordenadas y fáciles de mantener.
          </p>
        </article>

        <article className="matias-card">
          <h2>Rol en el proyecto</h2>
          <p>
            Participación en la migración del TP1 a React, organización de datos
            locales, explorador JSON y adaptación de componentes dentro del
            dashboard RDE Devs.
          </p>
        </article>
      </div>

      <section className="matias-section">
        <h2>Stack técnico</h2>

        <div className="matias-tech">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaGitAlt />
          <FaDatabase />
        </div>
      </section>

      <section className="matias-section">
        <h2>Habilidades</h2>

        <div className="matias-skills">
          {skills.map((skill) => (
            <div className="matias-skill" key={skill.name}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="matias-section">
        <h2>Proyectos</h2>

        <div className="matias-project-layout">
          <div className="project-tabs">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={activeProject === index ? "active" : ""}
                onClick={() => setActiveProject(index)}
              >
                {index + 1}. {project.title}
              </button>
            ))}
          </div>

          <article className="project-panel">
            <span>{projects[activeProject].tech}</span>
            <h3>{projects[activeProject].title}</h3>
            <p>{projects[activeProject].desc}</p>
          </article>
        </div>
      </section>
      <section className="matias-section">
  <h2>Películas favoritas</h2>

  <div className="matias-media-grid">
    {movies.map((movie) => (
      <article className="matias-media-card" key={movie.title}>
        <img src={movie.img} alt={movie.title} />
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.desc}</p>
        </div>
      </article>
    ))}
  </div>
</section>

<section className="matias-section">
  <h2>Álbumes favoritos</h2>

  <div className="matias-media-grid">
    {albums.map((album) => (
      <article className="matias-album-card" key={album.title}>
        <div className="album-disc">
          <img src={album.img} alt={album.title} />
        </div>

        <h3>{album.title}</h3>
        <p>{album.artist}</p>
      </article>
    ))}
  </div>
</section>
    </section>
  );
}

export default Matias;