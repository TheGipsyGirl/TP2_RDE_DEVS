import ProfileCard from "../components/ProfileCard";
import "../styles/home.css";

const integrantes = [
  {
    nombre: "Agustina Brandemann",
    rol: "Cazafantasmas #1",
    ciudad: "Mar del Plata",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Agustina",
    ruta: "/agustina",
  },
  {
    nombre: "Valeria Natucci",
    rol: "Cazafantasmas #2",
    ciudad: "Tucumán",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Valeria",
    ruta: "/valeria",
  },
  {
    nombre: "Matías González",
    rol: "Cazafantasmas #3",
    ciudad: "Buenos Aires",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Matias",
    ruta: "/matias",
  },
  {
    nombre: "Luis Specterman",
    rol: "Cazafantasmas #4",
    ciudad: "Buenos Aires",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Luis",
    ruta: "/luis",
  },
];

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <span className="ghost-icon">👻</span>
        <h1 className="home-title">Rulos de Estatua</h1>
        <p className="home-subtitle">¿A quién vas a llamar?</p>
        <p className="home-desc">Cuatro estilos, cuatro miradas, un mismo proyecto.</p>
      </div>

      <h2 className="section-title">Los Cazadores</h2>
      <p className="section-sub">Hacé clic en un integrante para ver su ficha</p>

      <div className="cards-grid">
        {integrantes.map((integrante, index) => (
          <ProfileCard
            key={integrante.nombre}
            {...integrante}
            delay={index * 0.15}
          />
        ))}
      </div>

      <div className="ghost-float ghost-1">👻</div>
      <div className="ghost-float ghost-2">👻</div>
      <div className="ghost-float ghost-3">👻</div>
    </div>
  );
}

export default Home;