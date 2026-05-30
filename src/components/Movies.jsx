const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'Una obra maestra de ciencia ficción que explora los sueños.',
    image: '/img/inception.jpg',
  },
  {
    id: 2,
    title: 'Matrix',
    description: 'Revolucionó el cine con su visión del mundo digital.',
    image: '/img/matrix.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'Un viaje épico a través del espacio y el tiempo.',
    image: '/img/interestellar.jpg',
  },
]

function Movies() {
  return (
    <section id="peliculas" className="section movies-section">
      <h2>Mis Películas Favoritas</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <article className="pelicula" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Movies
