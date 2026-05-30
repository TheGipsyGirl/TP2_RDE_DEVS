import erasure from "../assets/erasure.jpg";
import sabina from "../assets/joaquinSabina.webp";
import aha from "../assets/aha.jpg";

const musica = [
  {
    titulo: "Erasure",
    anio: "1985",
    descripcion: "Dúo británico de synth-pop que combina melodías pegadizas con letras emotivas. Always es un himno eterno.",
    img: erasure,
  },
  {
    titulo: "Joaquín Sabina",
    anio: "1978",
    descripcion: "El poeta del rock español. Sus letras cuentan historias de vida, amor y melancolía como ningún otro.",
    img: sabina,
  },
  {
    titulo: "A-ha",
    anio: "1982",
    descripcion: "La banda noruega que conquistó el mundo con Take On Me. Pop ochentero con una energía única e inigualable.",
    img: aha,
  },
];

function Musica() {
  return (
    <section id="musica">
      <h2 className="section-title">Mi <span className="accent">música</span> favorita</h2>
      <div className="grid-3">
        {musica.map((m) => (
          <article className="media-card" key={m.titulo}>
            <div className="media-img-wrap">
              <img src={m.img} alt={m.titulo} />
              <span className="media-anio">{m.anio}</span>
            </div>
            <div className="media-info">
              <h3>{m.titulo}</h3>
              <p>{m.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Musica;