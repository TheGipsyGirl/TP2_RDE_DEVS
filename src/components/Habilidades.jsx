import { useEffect, useRef, useState } from "react";

const habilidades = [
  { nombre: "HTML5", nivel: 75 },
  { nombre: "CSS3", nivel: 70 },
  { nombre: "Flexbox / Grid", nivel: 60 },
  { nombre: "JavaScript", nivel: 40 },
  { nombre: "React", nivel: 30 },
  { nombre: "Git & GitHub", nivel: 45 },
];

function Habilidades() {
  const [animar, setAnimar] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimar(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="habilidades" ref={ref}>
      <h2 className="section-title">Mis <span className="accent">habilidades</span></h2>

      <div className="habilidades-barras">
        {habilidades.map((h) => (
          <div className="barra-item" key={h.nombre}>
            <div className="barra-label">
              <span>{h.nombre}</span>
              <span>{h.nivel}%</span>
            </div>
            <div className="barra-track">
              <div
                className="barra-fill"
                style={{ width: animar ? `${h.nivel}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ color: "var(--accent)", marginBottom: "1rem", fontFamily: "var(--font-head)" }}>
        Quiero aprender
      </h3>
      <ul className="habilidades-lista" style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
        {["JavaScript avanzado", "Figma & diseño UX/UI", "Node.js", "TypeScript"].map((item) => (
          <li key={item} style={{ padding: "0.6rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", color: "var(--text-muted)" }}>
            ✦ {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;