import { useState } from "react";

const proyectos = [
  {
    titulo: "Portafolio Personal",
    descripcion: "Landing page personal con dark mode, Flexbox, Grid y animaciones CSS. Primera práctica formativa del IFTS N°29.",
    tag: "HTML · CSS",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    titulo: "UI Components",
    descripcion: "Biblioteca de componentes reutilizables: cards, botones, formularios y tablas con estilos personalizados.",
    tag: "CSS · Grid",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
  },
  {
    titulo: "Rulos de Estatua",
    descripcion: "Proyecto grupal temática Ghostbusters. Migración de HTML/CSS/JS a React con React Router y diseño dark.",
    tag: "React · Vite",
    img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&q=80",
  },
];

function Proyectos() {
  const [actual, setActual] = useState(0);

  const anterior = () => setActual((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1));
  const siguiente = () => setActual((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1));

  return (
    <section id="proyectos">
      <h2 className="section-title">Proyectos <span className="accent">destacados</span></h2>

      <div className="carrusel">
        <div
          className="carrusel-track"
          style={{ transform: `translateX(-${actual * 100}%)` }}
        >
          {proyectos.map((p) => (
            <div className="carrusel-slide" key={p.titulo}>
              <img src={p.img} alt={p.titulo} className="carrusel-img" />
              <div className="carrusel-body">
                <h3>{p.titulo}</h3>
                <p>{p.descripcion}</p>
                <span className="carrusel-tag">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carrusel-btns">
        <button className="carrusel-btn" onClick={anterior}>← Anterior</button>
        <button className="carrusel-btn" onClick={siguiente}>Siguiente →</button>
      </div>

      <div className="carrusel-dots">
        {proyectos.map((_, i) => (
          <div
            key={i}
            className={`carrusel-dot ${i === actual ? "active" : ""}`}
            onClick={() => setActual(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;