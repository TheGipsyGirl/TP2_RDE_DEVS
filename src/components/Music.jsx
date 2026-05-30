import { useState } from 'react'

const discs = [
  {
    id: 1,
    title: 'Despedazados por mil partes',
    artist: 'La Renga',
    image: '/img/despedazados.jpg',
  },
  {
    id: 2,
    title: 'Oktubre',
    artist: 'Patricio Rey y sus Redonditos de Ricota',
    image: '/img/oktubre.jpg',
  },
  {
    id: 3,
    title: 'After Chabón',
    artist: 'Sumo',
    image: '/img/sumo.jpg',
  },
]

function Music() {
  const [showDiscs, setShowDiscs] = useState(false)

  return (
    <section id="musica" className="section music-section">
      <h2>Mis Discos Favoritos</h2>
      <button type="button" className="toggle-music-btn" onClick={() => setShowDiscs((prev) => !prev)}>
        {showDiscs ? 'Ocultar Discos' : 'Mostrar Discos'}
      </button>
      {showDiscs && (
        <div className="discos-container">
          {discs.map((disco) => (
            <article className="disco" key={disco.id}>
              <img src={disco.image} alt={disco.title} />
              <h3>{disco.title}</h3>
              <p>{disco.artist}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Music
