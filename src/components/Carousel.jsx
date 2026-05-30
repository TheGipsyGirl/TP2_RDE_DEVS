import { useState, useEffect } from 'react'

function Carousel({ items = [] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length)
  }
  function next() {
    setIndex((i) => (i + 1) % items.length)
  }

  if (!items.length) return null

  const current = items[index]

  return (
    <div className="carousel" role="region" aria-label="Carrusel de proyectos">
      <div className="carousel-inner">
        <img src={current.image} alt={current.title} />
        <div className="carousel-caption">
          <h4>{current.title}</h4>
          <p>{current.desc}</p>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prev} aria-label="Proyecto anterior">◀</button>
        <span aria-live="polite">{index + 1} / {items.length}</span>
        <button onClick={next} aria-label="Próximo proyecto">▶</button>
      </div>
      <div className="carousel-dots" role="tablist" aria-label="Seleccionar proyecto">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={i === index ? 'dot active' : 'dot'}
            aria-label={`Ir al proyecto ${item.title}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
