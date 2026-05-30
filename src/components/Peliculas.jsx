import shawshank from "../assets/ShawshankRedemption.jpg";
import dirtyDancing from "../assets/dirtyDancing.webp";
import elOrigen from "../assets/elOrigen.webp";

const peliculas = [
  {
    titulo: "The Shawshank Redemption",
    anio: "1994",
    descripcion: "Una historia sobre esperanza, amistad y libertad que te recuerda que el espíritu humano es indomable.",
    img: shawshank,
  },
  {
    titulo: "Dirty Dancing",
    anio: "1987",
    descripcion: "Música, baile, amor y la valentía de ser auténtica. Un clásico que nunca pasa de moda.",
    img: dirtyDancing,
  },
  {
    titulo: "El Origen (Inception)",
    anio: "2010",
    descripcion: "Nolan en su máxima expresión. Una película que te hace cuestionar la realidad.",
    img: elOrigen,
  },
];

function Peliculas() {
  return (
    <section id="peliculas">
      <h2 className="section-title">Mis <span className="accent">películas</span> favoritas</h2>
      <div className="grid-3">
        {peliculas.map((p) => (
          <article className="media-card" key={p.titulo}>
            <div className="media-img-wrap">
              <img src={p.img} alt={p.titulo} />
              <span className="media-anio">{p.anio}</span>
            </div>
            <div className="media-info">
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Peliculas;