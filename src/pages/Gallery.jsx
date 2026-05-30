import { useEffect, useState } from 'react'

const galleryItems = [
  {
    src: '/img/despedazados.jpg',
    title: 'Despedazados',
    description: 'Cartel de película sobre el equipo creativo.',
  },
  {
    src: '/img/inception.jpg',
    title: 'Inception',
    description: 'Composición inspirada en la ciencia ficción y la creatividad.',
  },
  {
    src: '/img/interestellar.jpg',
    title: 'Interestellar',
    description: 'Imagen de paisaje espacial y diseño visual moderno.',
  },
  {
    src: '/img/matrix.jpg',
    title: 'Matrix',
    description: 'Estética futurista en una tarjeta de presentación visual.',
  },
  {
    src: '/img/oktubre.jpg',
    title: 'Oktubre',
    description: 'Resolución de gráficos con contraste y estilo editorial.',
  },
  {
    src: '/img/sumo.jpg',
    title: 'Sumo',
    description: 'Imagen vibrante que funciona como pieza de galería interactiva.',
  },
]

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxOpen(false)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % galleryItems.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  const openLightbox = (index) => {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const showPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const activeImage = galleryItems[activeIndex]

  return (
    <section className="section gallery-section" aria-label="Galería de imágenes con Lightbox">
      <div className="gallery-header">
        <div>
          <h2>Galería Lightbox</h2>
          <p>Explora la colección de imágenes y ábrela en modo Lightbox con soporte para ESC y flechas.</p>
        </div>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="gallery-card"
            onClick={() => openLightbox(index)}
            aria-label={`Abrir imagen ${item.title}`}
          >
            <img src={item.src} alt={item.title} className="gallery-thumb" />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Visor de imagen">
          <div className="lightbox-backdrop" data-lightbox="overlay" onClick={closeLightbox} />
          <div className="lightbox-content">
            <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="Cerrar galería">
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{activeImage.title}</h3>
              <p>{activeImage.description}</p>
            </div>
            <div className="lightbox-nav">
              <button type="button" onClick={showPrevious} aria-label="Imagen anterior">Anterior</button>
              <button type="button" onClick={showNext} aria-label="Siguiente imagen">Siguiente</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
