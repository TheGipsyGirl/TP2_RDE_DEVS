import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import "../styles/agustina.css";

const habilidades = [
  { nombre: "HTML5", nivel: 75 },
  { nombre: "CSS3", nivel: 70 },
  { nombre: "Flexbox / Grid", nivel: 60 },
  { nombre: "JavaScript", nivel: 40 },
  { nombre: "React", nivel: 30 },
  { nombre: "Git & GitHub", nivel: 45 },
];

const proyectos = [
  {
    titulo: "TP1 Frontend Grupal",
    descripcion:
      "Proyecto grupal desarrollado originalmente con HTML, CSS y JavaScript.",
    tag: "HTML · CSS · JS",
  },
  {
    titulo: "RDE Devs React",
    descripcion:
      "Migración del TP1 hacia una arquitectura React con rutas y componentes.",
    tag: "React · Router",
  },
  {
    titulo: "UI Components",
    descripcion:
      "Práctica de componentes visuales reutilizables como cards, botones y formularios.",
    tag: "CSS · Componentes",
  },
];

const peliculas = [
  {
    titulo: "The Shawshank Redemption",
    anio: "1994",
    descripcion:
      "Una historia sobre esperanza, amistad y libertad.",
    img: "/img/agustina/ShawshankRedemption.jpg",
  },
  {
    titulo: "Dirty Dancing",
    anio: "1987",
    descripcion:
      "Música, baile y una historia clásica sobre autenticidad.",
    img: "/img/agustina/dirtyDancing.jpg",
  },
  {
    titulo: "El Origen",
    anio: "2010",
    descripcion:
      "Una película que juega con la mente, los sueños y la realidad.",
    img: "/img/agustina/elorigen.jpg",
  },
];

const musica = [
  {
    titulo: "Erasure",
    anio: "1985",
    descripcion:
      "Synth-pop con melodías pegadizas y mucha identidad sonora.",
    img: "/img/agustina/erasure.jpg",
  },
  {
    titulo: "Joaquín Sabina",
    anio: "1978",
    descripcion:
      "Letras con historias, melancolía y una mirada muy personal.",
    img: "/img/agustina/joaquinSabina.jpg",
  },
  {
    titulo: "A-ha",
    anio: "1982",
    descripcion:
      "Pop ochentero con energía, estilo y canciones memorables.",
    img: "/img/agustina/aha.jpg",
  },
];

function BarraHabilidad({ nombre, nivel }) {
  const [animar, setAnimar] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimar(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="agus-barra-item" ref={ref}>
      <div className="agus-barra-label">
        <span>{nombre}</span>
        <span>{nivel}%</span>
      </div>

      <div className="agus-barra-track">
        <div
          className="agus-barra-fill"
          style={{ width: animar ? `${nivel}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function Agustina() {
  const [actual, setActual] = useState(0);

  const anterior = () => {
    setActual((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setActual((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1));
  };

  const proyecto = proyectos[actual];

  return (
    <section className="agustina-page">
      <div className="agustina-hero">
        <div className="agustina-texto">
          <p className="agus-label"></p>
            
          <h1>
            Agustina <span>Brandemann</span>
          </h1>

          <p>
            Estudiante de desarrollo web interesada en crear interfaces modernas,
            funcionales y visualmente atractivas. En esta migración a React,
            su perfil conserva la idea del TP1 pero organizada como componentes.
          </p>

          <div className="agus-socials">
            <a href="https://github.com/AgustinaBran" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="agustina-avatar">
          <img src="/img/agustina/AguAvatar.jpg" alt="Avatar de Agustina Brandemann" />
        </div>
      </div>

      <article className="agus-card">
        <h2>Sobre mí</h2>
        <p>
          Me interesa el diseño centrado en el usuario, las animaciones CSS y la
          construcción de experiencias web que combinen creatividad y estructura.
          En el TP2, mi perfil se adapta a una arquitectura React dentro del
          dashboard grupal RDE Devs.
        </p>
      </article>

      <section className="agus-section">
        <h2>Tech Stack</h2>

        <div className="agus-icons">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaGitAlt />
        </div>
      </section>

      <section className="agus-section">
        <h2>Habilidades</h2>

        <div className="agus-barras">
          {habilidades.map((habilidad) => (
            <BarraHabilidad
              key={habilidad.nombre}
              nombre={habilidad.nombre}
              nivel={habilidad.nivel}
            />
          ))}
        </div>
      </section>

      <section className="agus-section">
        <h2>Proyectos</h2>

        <div className="agus-carrusel">
          <button onClick={anterior}>←</button>

          <article>
            <span>{proyecto.tag}</span>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
          </article>

          <button onClick={siguiente}>→</button>
        </div>

        <p className="agus-contador">
          Proyecto {actual + 1} de {proyectos.length}
        </p>
      </section>

      <section className="agus-section">
        <h2>Películas favoritas</h2>

        <div className="agus-grid">
          {peliculas.map((peli) => (
            <article className="agus-media" key={peli.titulo}>
              <img src={peli.img} alt={peli.titulo} />
              <div>
                <span>{peli.anio}</span>
                <h3>{peli.titulo}</h3>
                <p>{peli.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="agus-section">
        <h2>Música favorita</h2>

        <div className="agus-grid">
          {musica.map((item) => (
            <article className="agus-media" key={item.titulo}>
              <img src={item.img} alt={item.titulo} />
              <div>
                <span>{item.anio}</span>
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="agus-contacto">
        <h2>Contacto</h2>

        <p>
          Si querés conocer más sobre mi trabajo o compartir una idea, podés
          contactarme a través de mis redes.
        </p>

        <div className="agus-socials">
          <a href="https://github.com/AgustinaBran" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
}

export default Agustina;