import { useState, useEffect, useCallback } from "react";
import "../styles/galeria.css";

const IMAGENES = [
  { id: 1,  src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=70", titulo: "Montañas al amanecer",   categoria: "Naturaleza"    },
  { id: 2,  src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80", thumb: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=70", titulo: "Ciudad de noche",        categoria: "Arquitectura"  },
  { id: 3,  src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70", titulo: "Tecnología",             categoria: "Tecnología"    },
  { id: 4,  src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", thumb: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=70", titulo: "Valle verde",            categoria: "Naturaleza"    },
  { id: 5,  src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", thumb: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=70", titulo: "Interior moderno",       categoria: "Arquitectura"  },
  { id: 6,  src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80", thumb: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=70", titulo: "Código",                 categoria: "Tecnología"    },
  { id: 7,  src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80", thumb: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400&q=70", titulo: "Lago al atardecer",      categoria: "Naturaleza"    },
  { id: 8,  src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70", titulo: "Puente urbano",          categoria: "Arquitectura"  },
  { id: 9,  src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", thumb: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=70", titulo: "Laptop y código",        categoria: "Tecnología"    },
  { id: 10, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80", thumb: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=70", titulo: "Bosque en otoño",        categoria: "Naturaleza"    },
  { id: 11, src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", thumb: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=70", titulo: "Londres",                categoria: "Arquitectura"  },
  { id: 12, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80", thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=70", titulo: "Pantalla retro",          categoria: "Tecnología"    },
  { id: 13, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=70", titulo: "Picos nevados",          categoria: "Naturaleza"    },
  { id: 14, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", thumb: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=70", titulo: "Hotel minimalista",      categoria: "Arquitectura"  },
  { id: 15, src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80", thumb: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=70", titulo: "Desarrollo web",          categoria: "Tecnología"    },
];

const CATEGORIAS = ["Todas", "Naturaleza", "Arquitectura", "Tecnología"];

function Lightbox({ imagen, total, onCerrar, onAnterior, onSiguiente }) {
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState(null);

  // Reset zoom al cambiar imagen
  useEffect(() => {
    setZoom(1);
    setPos({ x: 0, y: 0 });
  }, [imagen]);

  // Tecla ESC y flechas
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")     onCerrar();
      if (e.key === "ArrowLeft")  onAnterior();
      if (e.key === "ArrowRight") onSiguiente();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onCerrar, onAnterior, onSiguiente]);

  const handleZoomIn  = () => setZoom((z) => Math.min(z + 0.5, 4));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.5, 1));
  const handleReset   = () => { setZoom(1); setPos({ x: 0, y: 0 }); };

  // Drag para mover imagen zoomada
  const onMouseDown = (e) => {
    if (zoom <= 1) return;
    setDrag({ startX: e.clientX - pos.x, startY: e.clientY - pos.y });
  };
  const onMouseMove = (e) => {
    if (!drag) return;
    setPos({ x: e.clientX - drag.startX, y: e.clientY - drag.startY });
  };
  const onMouseUp = () => setDrag(null);

  return (
    <div className="lightbox-overlay" onClick={onCerrar}>
      <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>

        {/* Barra superior */}
        <div className="lightbox-header">
          <span className="lightbox-titulo">{imagen.titulo}</span>
          <div className="lightbox-controles">
            <button className="lb-btn" onClick={handleZoomOut} disabled={zoom <= 1} title="Alejar">−</button>
            <span className="lb-zoom-pct" onClick={handleReset}>{Math.round(zoom * 100)}%</span>
            <button className="lb-btn" onClick={handleZoomIn}  disabled={zoom >= 4} title="Acercar">+</button>
            <button className="lb-btn lb-cerrar" onClick={onCerrar} title="Cerrar (ESC)">✕</button>
          </div>
        </div>

        {/* Imagen */}
        <div
          className="lightbox-img-wrap"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{ cursor: zoom > 1 ? (drag ? "grabbing" : "grab") : "default" }}
        >
          <img
            src={imagen.src}
            alt={imagen.titulo}
            className="lightbox-img"
            style={{
              transform: `scale(${zoom}) translate(${pos.x / zoom}px, ${pos.y / zoom}px)`,
            }}
            draggable={false}
          />
        </div>

        {/* Navegación */}
        <button className="lb-nav lb-nav-prev" onClick={onAnterior} title="Anterior (←)">‹</button>
        <button className="lb-nav lb-nav-next" onClick={onSiguiente} title="Siguiente (→)">›</button>

        {/* Footer */}
        <div className="lightbox-footer">
          <span className="lb-categoria">{imagen.categoria}</span>
          <span className="lb-contador">{imagen.id} / {total}</span>
          <span className="lb-hint">ESC para cerrar · ← → para navegar · click en % para resetear zoom</span>
        </div>

      </div>
    </div>
  );
}

function Galeria() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [lightboxIdx, setLightboxIdx]         = useState(null);

  const filtradas = categoriaActiva === "Todas"
    ? IMAGENES
    : IMAGENES.filter((img) => img.categoria === categoriaActiva);

  const abrirLightbox  = (idx) => setLightboxIdx(idx);
  const cerrarLightbox = useCallback(() => setLightboxIdx(null), []);

  const anterior = useCallback(() =>
    setLightboxIdx((i) => (i - 1 + filtradas.length) % filtradas.length), [filtradas.length]);

  const siguiente = useCallback(() =>
    setLightboxIdx((i) => (i + 1) % filtradas.length), [filtradas.length]);

  return (
    <div className="galeria-page">

      {/* Header */}
      <div className="galeria-header">
        <p className="galeria-tag">// Galería</p>
        <h1 className="galeria-titulo">Galería de Imágenes</h1>
        <p className="galeria-subtitulo">Hacé click en cualquier imagen para verla en detalle</p>
      </div>

      {/* Filtros por categoría */}
      <div className="galeria-filtros">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn ${categoriaActiva === cat ? "activo" : ""}`}
            onClick={() => { setCategoriaActiva(cat); setLightboxIdx(null); }}
          >
            {cat}
            <span className="filtro-count">
              {cat === "Todas" ? IMAGENES.length : IMAGENES.filter((i) => i.categoria === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="galeria-grid">
        {filtradas.map((img, idx) => (
          <div
            key={img.id}
            className="galeria-item"
            onClick={() => abrirLightbox(idx)}
          >
            <img src={img.thumb} alt={img.titulo} className="galeria-thumb" loading="lazy" />
            <div className="galeria-overlay">
              <span className="galeria-overlay-titulo">{img.titulo}</span>
              <span className="galeria-overlay-cat">{img.categoria}</span>
              <span className="galeria-overlay-zoom">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          imagen={filtradas[lightboxIdx]}
          total={filtradas.length}
          onCerrar={cerrarLightbox}
          onAnterior={anterior}
          onSiguiente={siguiente}
        />
      )}

    </div>
  );
}

export default Galeria;
