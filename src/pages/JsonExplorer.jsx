import { useMemo, useState } from "react";
import "../styles/jsonExplorer.css";

const estudiantes = [
  { id: 1, nombre: "Valeria Natucci", rol: "Frontend Developer", tecnologia: "React", nivel: "Intermedio", ciudad: "Tucumán" },
  { id: 2, nombre: "Luis Specterman", rol: "API Developer", tecnologia: "JavaScript", nivel: "Intermedio", ciudad: "Buenos Aires" },
  { id: 3, nombre: "Agustina Brandemann", rol: "UI Developer", tecnologia: "CSS", nivel: "Inicial", ciudad: "Mar del Plata" },
  { id: 4, nombre: "Matías González", rol: "Data Explorer", tecnologia: "JSON", nivel: "Inicial", ciudad: "Buenos Aires" },
  { id: 5, nombre: "Proyecto TP1", rol: "Sitio estático", tecnologia: "HTML", nivel: "Base", ciudad: "Web" },
  { id: 6, nombre: "Proyecto TP2", rol: "SPA React", tecnologia: "React", nivel: "Intermedio", ciudad: "Web" },
  { id: 7, nombre: "Home Dashboard", rol: "Pantalla principal", tecnologia: "React Router", nivel: "Intermedio", ciudad: "App" },
  { id: 8, nombre: "Sidebar", rol: "Navegación", tecnologia: "CSS", nivel: "Base", ciudad: "App" },
  { id: 9, nombre: "API Películas", rol: "Consumo externo", tecnologia: "Fetch", nivel: "Intermedio", ciudad: "App" },
  { id: 10, nombre: "Galería", rol: "Lightbox", tecnologia: "JavaScript", nivel: "Intermedio", ciudad: "App" },
  { id: 11, nombre: "Bitácora", rol: "Documentación", tecnologia: "React", nivel: "Base", ciudad: "App" },
  { id: 12, nombre: "Arquitectura", rol: "Render Tree", tecnologia: "React", nivel: "Base", ciudad: "App" },
  { id: 13, nombre: "GitHub", rol: "Control de versiones", tecnologia: "Git", nivel: "Intermedio", ciudad: "DevOps" },
  { id: 14, nombre: "Vercel", rol: "Deploy", tecnologia: "Deploy", nivel: "Base", ciudad: "DevOps" },
  { id: 15, nombre: "HTML5", rol: "Estructura", tecnologia: "HTML", nivel: "Base", ciudad: "Frontend" },
  { id: 16, nombre: "CSS3", rol: "Estilos", tecnologia: "CSS", nivel: "Base", ciudad: "Frontend" },
  { id: 17, nombre: "JavaScript", rol: "Lógica", tecnologia: "JavaScript", nivel: "Intermedio", ciudad: "Frontend" },
  { id: 18, nombre: "React Hooks", rol: "Estado", tecnologia: "React", nivel: "Intermedio", ciudad: "Frontend" },
  { id: 19, nombre: "React Router", rol: "Rutas", tecnologia: "React Router", nivel: "Intermedio", ciudad: "Frontend" },
  { id: 20, nombre: "Componentes", rol: "Reutilización", tecnologia: "React", nivel: "Intermedio", ciudad: "Frontend" },
];

function JsonExplorer() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroTecnologia, setFiltroTecnologia] = useState("Todas");
  const [filtroNivel, setFiltroNivel] = useState("Todos");

  const tecnologias = ["Todas", ...new Set(estudiantes.map((item) => item.tecnologia))];
  const niveles = ["Todos", ...new Set(estudiantes.map((item) => item.nivel))];

  const resultados = useMemo(() => {
    return estudiantes.filter((item) => {
      const texto = `${item.nombre} ${item.rol} ${item.tecnologia} ${item.nivel} ${item.ciudad}`.toLowerCase();

      const coincideBusqueda = texto.includes(busqueda.toLowerCase());
      const coincideTecnologia =
        filtroTecnologia === "Todas" || item.tecnologia === filtroTecnologia;
      const coincideNivel =
        filtroNivel === "Todos" || item.nivel === filtroNivel;

      return coincideBusqueda && coincideTecnologia && coincideNivel;
    });
  }, [busqueda, filtroTecnologia, filtroNivel]);

  return (
    <section className="json-page">
      <div className="json-hero">
        <p>Explorador de datos locales</p>
        <h1>JSON Explorer</h1>
        <span>
          Renderización dinámica de 20 objetos con búsqueda y filtros en tiempo real.
        </span>
      </div>

      <div className="json-controls">
        <input
          type="text"
          placeholder="Buscar por nombre, rol, tecnología o ciudad..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          value={filtroTecnologia}
          onChange={(e) => setFiltroTecnologia(e.target.value)}
        >
          {tecnologias.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>

        <select
          value={filtroNivel}
          onChange={(e) => setFiltroNivel(e.target.value)}
        >
          {niveles.map((nivel) => (
            <option key={nivel} value={nivel}>
              {nivel}
            </option>
          ))}
        </select>
      </div>

      <div className="json-summary">
        <strong>{resultados.length}</strong> resultados encontrados
      </div>

      <div className="json-grid">
        {resultados.map((item) => (
          <article className="json-card" key={item.id}>
            <span className="json-id">#{item.id}</span>
            <h2>{item.nombre}</h2>
            <p>{item.rol}</p>

            <div className="json-tags">
              <span>{item.tecnologia}</span>
              <span>{item.nivel}</span>
              <span>{item.ciudad}</span>
            </div>
          </article>
        ))}
      </div>

      {resultados.length === 0 && (
        <p className="json-empty">
          No se encontraron resultados con esos filtros.
        </p>
      )}
    </section>
  );
}

export default JsonExplorer;