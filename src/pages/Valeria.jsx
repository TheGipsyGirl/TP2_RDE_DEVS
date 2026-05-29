import { useState } from "react";
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

import { SiKotlin, SiMysql } from "react-icons/si";

const proyectos = [
  {
    titulo: "Synergy Sport Club",
    descripcion: "Aplicación móvil para gestión de socios, actividades deportivas y estados de pago.",
    tech: "Kotlin · SQLite · Android Studio",
    imagen: "/public/img/valeria/synergy.jpg",
    link: "https://github.com/MarcosMartinProgram/synergySportsClub",
  },
  {
    titulo: "Portfolio Personal",
    descripcion: "Sitio web personal con diseño creativo, responsive e identidad visual propia.",
    tech: "HTML · CSS · JavaScript",
    imagen: "/public/img/valeria/logovale.png",
    link: "https://github.com/TheGipsyGirl/PortafolioPersonal",
  },
  {
    titulo: "RDE Devs Dashboard",
    descripcion: "Dashboard grupal desarrollado en React con rutas, perfiles y componentes dinámicos.",
    tech: "React · Router · CSS",
    imagen: "/public/logo.png",
    link: "https://github.com/TheGipsyGirl/TP2_RDE_DEVS",
  },
];

function Valeria() {
  const [proyectoActual, setProyectoActual] = useState(0);

  const siguienteProyecto = () => {
    setProyectoActual((prev) => (prev + 1) % proyectos.length);
  };

  const anteriorProyecto = () => {
    setProyectoActual((prev) => (prev - 1 + proyectos.length) % proyectos.length);
  };

  const proyecto = proyectos[proyectoActual];

  return (
    <section className="valeria-page">
      <div className="valeria-hero fade-up">
        <div className="hero-avatar">
          <span className="blob"></span>
          <img src="/public/img/valeria/perfil.jpg" alt="Valeria Natucci" />
          <div className="sticker">Creativa, curiosa y con alma viajera ✨</div>
        </div>

        <div className="hero-info">
          <p className="eyebrow">Perfil profesional</p>
          <h1>Valeria Natucci</h1>
          <span className="nickname">@TheGypsyGirl</span>

          <p>
            Técnica desarrolladora de software, apasionada por el diseño web,
            la creatividad y las soluciones digitales con personalidad. También
            soy estudiante del Profesorado de Inglés y me interesa unir tecnología
            con educación.
          </p>

          <div className="socials">
            <a href="https://github.com/TheGipsyGirl" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/paula-valeria-natucci" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="valeria-grid">
        <article className="profile-card fade-up">
          <h2>Sobre mí</h2>
          <p>
            Soy una persona extrovertida, curiosa y creativa. Me interesa el
            desarrollo web porque combina lógica, diseño y comunicación visual.
            Mi objetivo es liderar una empresa de servicios digitales que cree
            soluciones útiles, modernas y con identidad.
          </p>

          <div className="datos">
            <p><strong>Ubicación:</strong> Tafí Viejo, Tucumán</p>
            <p><strong>Edad:</strong> 30 años</p>
            <p><strong>Enfoque:</strong> Frontend · Diseño Web · Educación tecnológica</p>
          </div>
        </article>

        <article className="postit fade-up">
          <h3>Mi mantra 💗</h3>
          <p>No se trata de tener todas las respuestas, sino de nunca dejar de hacer preguntas.</p>
        </article>
      </div>

      <section className="skills-section fade-up">
        <h2>Habilidades</h2>

        <div className="skill">
          <p>HTML</p>
          <div className="bar"><div className="progress html"></div></div>
        </div>

        <div className="skill">
          <p>CSS</p>
          <div className="bar"><div className="progress css"></div></div>
        </div>

        <div className="skill">
          <p>JavaScript</p>
          <div className="bar"><div className="progress js"></div></div>
        </div>

        <div className="skill">
          <p>React</p>
          <div className="bar"><div className="progress react"></div></div>
        </div>
      </section>

      <section className="tech-stack fade-up">
        <h2>Tech Stack</h2>

        <div className="icons">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaGitAlt />
          <SiKotlin />
          <SiMysql />
        </div>
      </section>

      <section className="projects-section fade-up">
        <h2>Proyectos</h2>

        <div className="carousel">
          <button onClick={anteriorProyecto}>‹</button>

          <article className="project-card">
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <div>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <span>{proyecto.tech}</span>
              <a href={proyecto.link} target="_blank" rel="noreferrer">
                Ver GitHub
              </a>
            </div>
          </article>

          <button onClick={siguienteProyecto}>›</button>
        </div>

        <p className="contador">
          Proyecto {proyectoActual + 1} de {proyectos.length}
        </p>
      </section>

      <section className="gustos-section fade-up">
        <h2>Películas favoritas</h2>

        <div className="movies-grid">
          <article>
            <img src="public/img/valeria/peliculas/unamentebrillante.jpg" alt="Interstellar" />
            <h3>Una mente brillante</h3>
            <p>Me gusta porque mezcla ciencia, salud y emoción.</p>
          </article>

          <article>
            <img src="public/img/valeria/peliculas/coco.jpg" alt="Coco" />
            <h3>Coco</h3>
            <p>Valora la vida, la memoria y la familia.</p>
          </article>

          <article>
            <img src="public/img/valeria/peliculas/shrek2.jpg" alt="Shrek" />
            <h3>Shrek</h3>
            <p>Un clásico divertido, lleno de humor y memes.</p>
          </article>
        </div>
      </section>

      <section className="music-section fade-up">
        <h2>Discos favoritos</h2>

        <div className="vinyl-grid">
          <article className="vinyl-item">
            <div className="vinyl">
              <span></span>
              <img src="public/img/valeria/discos/futurenostalgia.jpg" alt="Future Nostalgia" />
            </div>
            <h3>Future Nostalgia</h3>
            <p>Dua Lipa</p>
          </article>

          <article className="vinyl-item">
            <div className="vinyl">
              <span></span>
              <img src="public/img/valeria/discos/riot.jpg" alt="Divide" />
            </div>
            <h3>RIOT</h3>
            <p>Paramore</p>
          </article>

          <article className="vinyl-item">
            <div className="vinyl">
              <span></span>
              <img src="public/img/valeria/discos/unveranosinti.jpg" alt="Un Verano Sin Ti" />
            </div>
            <h3>Un Verano Sin Ti</h3>
            <p>Bad Bunny</p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Valeria;