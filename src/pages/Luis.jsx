import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/luis.css";

// ── Datos ────────────────────────────────────────────────────────

const SECCIONES = [
  { id: "sobre-mi",   label: "Sobre mí",    icono: "👤" },
  { id: "stack",      label: "Tech Stack",  icono: "⚙️" },
  { id: "habilidades",label: "Habilidades", icono: "📊" },
  { id: "proyectos",  label: "Proyectos",   icono: "🛠️" },
];

const HABILIDADES = [
  { nombre: "HTML5",        nivel: 80, color: "#e34c26" },
  { nombre: "CSS3",         nivel: 60, color: "#264de4" },
  { nombre: "Git & GitHub", nivel: 60, color: "#f05032" },
  { nombre: "JavaScript",   nivel: 40, color: "#f7df1e" },
  { nombre: "React",        nivel: 20, color: "#61dafb" },
];

const TECH_STACK = [
  { nombre: "HTML5",      color: "#e34c26", icono: "🌐" },
  { nombre: "CSS3",       color: "#264de4", icono: "🎨" },
  { nombre: "JavaScript", color: "#f7df1e", icono: "⚡" },
  { nombre: "Git",        color: "#f05032", icono: "🔀" },
  { nombre: "React",      color: "#61dafb", icono: "⚛️" },
  { nombre: "GitHub",     color: "#aaa",    icono: "🐙" },
];

const PROYECTOS = [
  {
    titulo: "To-Do App",
    tag: "HTML · CSS · JS",
    desc: "Aplicación de lista de tareas con filtros por estado y diseño responsivo. Datos guardados en localStorage.",
    detalle: "Gestión de tareas con filtros por estado (pendiente / completada). Datos guardados en localStorage para no perderlos al recargar.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  },
  {
    titulo: "Portafolio Personal",
    tag: "HTML · CSS",
    desc: "Landing page semántica, responsiva y accesible construida como práctica formativa en el IFTS N°29.",
    detalle: "Este mismo sitio. Diseño responsivo, semántica HTML correcta, y ahora con JavaScript interactivo agregado.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
  {
    titulo: "Próximo Proyecto",
    tag: "En progreso",
    desc: "Explorando JavaScript y sus posibilidades. ¡Pronto habrá novedades por acá!",
    detalle: "En exploración. Explorando posibilidades con JavaScript y sus APIs. ¡Pronto habrá novedades!",
    tecnologias: ["JavaScript", "???"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
];

const SOCIAL = [
  { nombre: "GitHub",   href: "https://github.com/",   color: "#333",    icono: "🐙" },
  { nombre: "LinkedIn", href: "https://linkedin.com/", color: "#0077b5", icono: "💼" },
  { nombre: "Twitter",  href: "https://twitter.com/",  color: "#1da1f2", icono: "🐦" },
];

const HOBBIES = [
  { icono: "💻", texto: "Programación" },
  { icono: "📚", texto: "Leer sobre tecnología" },
  { icono: "🎵", texto: "Escuchar música" },
  { icono: "🌱", texto: "Huerta Sustentable" },
];

const QUIERO_APRENDER = ["React.js", "Node.js", "SQL / NoSQL", "TypeScript", "Testing automatizado"];

// ── Sub-componentes ──────────────────────────────────────────────

function BarraHabilidad({ nombre, nivel, color, delay }) {
  const [ancho, setAncho] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAncho(nivel); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [nivel]);

  return (
    <div className="barra-wrap" ref={ref} style={{ animationDelay: `${delay}ms` }}>
      <div className="barra-header">
        <span className="barra-nombre">{nombre}</span>
        <span className="barra-pct" style={{ color }}>{nivel}%</span>
      </div>
      <div className="barra-track">
        <div
          className="barra-fill"
          style={{ width: `${ancho}%`, background: color, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function Carrusel() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const prev = () => { setFlipped(false); setIdx((i) => (i - 1 + PROYECTOS.length) % PROYECTOS.length); };
  const next = () => { setFlipped(false); setIdx((i) => (i + 1) % PROYECTOS.length); };
  const p = PROYECTOS[idx];

  return (
    <div className="carrusel">
      <div className={`carrusel-card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        <div className="carrusel-frente">
          <img src={p.img} alt={p.titulo} className="carrusel-img" />
          <div className="carrusel-body">
            <span className="carrusel-tag">{p.tag}</span>
            <h3 className="carrusel-titulo">{p.titulo}</h3>
            <p className="carrusel-desc">{p.desc}</p>
            <span className="carrusel-hint">Click para ver más →</span>
          </div>
        </div>
        <div className="carrusel-reverso">
          <h3 className="carrusel-rev-titulo">{p.titulo}</h3>
          <p className="carrusel-rev-detalle">{p.detalle}</p>
          <div className="carrusel-rev-tags">
            {p.tecnologias.map((t) => <span key={t} className="carrusel-rev-tag">{t}</span>)}
          </div>
          <a href="#" className="carrusel-rev-btn" onClick={(e) => e.stopPropagation()}>Ver proyecto →</a>
        </div>
      </div>

      <div className="carrusel-controles">
        <button className="carrusel-btn" onClick={prev}>← Anterior</button>
        <div className="carrusel-dots">
          {PROYECTOS.map((_, i) => (
            <button
              key={i}
              className={`carrusel-dot ${i === idx ? "activo" : ""}`}
              onClick={() => { setFlipped(false); setIdx(i); }}
            />
          ))}
        </div>
        <button className="carrusel-btn" onClick={next}>Siguiente →</button>
      </div>
      <p className="carrusel-contador">{idx + 1} / {PROYECTOS.length}</p>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────

function Luis() {
  const [seccionActiva, setSeccionActiva] = useState("sobre-mi");

  const scrollA = (id) => {
    setSeccionActiva(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Detecta sección visible al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSeccionActiva(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    SECCIONES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="luis-layout">

      {/* ── SIDEBAR INTERNO ── */}
      <aside className="luis-aside">
        <div className="luis-aside-perfil">
          <img
            src="img/img_luis/FOTO_PERFIL.jpg"
            alt="Luis"
            className="luis-aside-avatar"
            onError={(e) => {
              e.target.src = "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Luis29&backgroundColor=1a1a1a";
            }}
          />
          <p className="luis-aside-nombre">Luis O.</p>
          <p className="luis-aside-rol">Dev_IFTS29</p>
        </div>

        <nav className="luis-aside-nav">
          <ul>
            {SECCIONES.map((s) => (
              <li key={s.id}>
                <button
                  className={`luis-nav-link ${seccionActiva === s.id ? "activo" : ""}`}
                  onClick={() => scrollA(s.id)}
                >
                  <span className="luis-nav-icono">{s.icono}</span>
                  <span>{s.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="luis-aside-footer">
          <Link to="/" className="luis-volver-btn">
            ← Volver al inicio
          </Link>
        </div>
      </aside>

      {/* ── CONTENIDO ── */}
      <div className="luis-content">

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="luis-section luis-hero">
          <div className="luis-hero-img-wrap">
            <img
              src="img/img_luis/FOTO_PERFIL.jpg"
              alt="Foto de perfil de Luis"
              className="luis-hero-img"
              onError={(e) => {
                e.target.src = "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Luis29&backgroundColor=151515";
              }}
            />
          </div>
          <div className="luis-hero-text">
            <p className="luis-tag">// Hola, mundo</p>
            <h1 className="luis-nombre">
              Soy <span className="luis-highlight">SPECTERMAN<br />LUIS OMAR</span>
            </h1>
            <p className="luis-datos">📍 San Andrés, Buenos Aires · 64 años</p>
            <p className="luis-bio">
              Estudiante apasionado en programación, en gran parte autodidacta, en proceso de
              convertirme en un desarrollador más técnico y profesional. Me gustaría construir
              interfaces limpias, accesibles y funcionales que resuelvan problemas reales.
            </p>
            <div className="luis-social">
              {SOCIAL.map((s) => (
                <a
                  key={s.nombre}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  style={{ "--hover-color": s.color }}
                  aria-label={s.nombre}
                >
                  <span className="social-icono">{s.icono}</span>
                  <span className="social-nombre">{s.nombre}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="stack" className="luis-section">
          <p className="luis-section-tag">// Stack</p>
          <h2 className="luis-section-title">Tech Stack</h2>
          <div className="tech-grid">
            {TECH_STACK.map((t) => (
              <div key={t.nombre} className="tech-icon" style={{ "--tech-color": t.color }}>
                <span className="tech-emoji">{t.icono}</span>
                <span className="tech-nombre">{t.nombre}</span>
              </div>
            ))}
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="luis-section">
          <p className="luis-section-tag">// Habilidades</p>
          <h2 className="luis-section-title">Habilidades & Tecnologías</h2>
          <div className="barras-col">
            {HABILIDADES.map((h, i) => (
              <BarraHabilidad key={h.nombre} {...h} delay={i * 120} />
            ))}
          </div>
          <div className="skills-extra">
            <div className="skills-box">
              <h3 className="skills-box-titulo">📖 Quiero aprender</h3>
              <ul className="skills-lista">
                {QUIERO_APRENDER.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="skills-box">
              <h3 className="skills-box-titulo">🎯 Hobbies</h3>
              <ul className="skills-lista">
                {HOBBIES.map((h) => <li key={h.texto}><span>{h.icono}</span> {h.texto}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="luis-section">
          <p className="luis-section-tag">// Proyectos</p>
          <h2 className="luis-section-title">Lo que estoy construyendo</h2>
          <Carrusel />
        </section>

      </div>
    </div>
  );
}

export default Luis;