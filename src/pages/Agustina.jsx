import Hero from "../components/Hero";
import Proyectos from "../components/Proyectos";
import Habilidades from "../components/Habilidades";
import Peliculas from "../components/Peliculas";
import Musica from "../components/Musica";
import Contacto from "../components/Contacto";
import "../styles/agustina.css";
import { Link } from "react-router-dom";

function Agustina() {
  return (
    <>
      <Hero />
      <Proyectos />
      <Habilidades />
      <Peliculas />
      <Musica />
      <Contacto />
      <Link to="/" className="btn-home" title="Volver al inicio">🏠</Link>
      <a href="#sobre-mi" className="btn-scroll-top" title="Volver arriba">↑</a>
    </>
  );
}

export default Agustina;