import { useState, useEffect } from "react";
import "../styles/api.css";

const API_KEY = "1b12aa77bcde6a02a4bc96869e9fd1fd";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE = "https://image.tmdb.org/t/p/w300";

function ApiPage() {
  const [movies, setMovies]       = useState([]);
  const [page, setPage]           = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-AR&page=${page}`
        );
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        const data = await res.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="api-page">

      {/* Header */}
      <div className="api-header">
        <h1 className="api-title">🎬 Películas Populares</h1>
        <p className="api-subtitle">
          Fuente: <span className="api-badge">The Movie Database</span>
        </p>
      </div>

      {/* Estado de carga */}
      {loading && (
        <div className="api-loading">
          <div className="api-spinner" />
          <p>Cargando películas...</p>
        </div>
      )}

      {/* Estado de error */}
      {error && (
        <div className="api-error">
          <span className="api-error-icon">⚠️</span>
          <div>
            <strong>Algo salió mal</strong>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Grilla de películas */}
      {!loading && !error && (
        <div className="api-grid">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <div className="movie-poster-wrap">
                <img
                  className="movie-poster"
                  src={
                    movie.poster_path
                      ? `${IMG_BASE}${movie.poster_path}`
                      : "https://via.placeholder.com/300x450?text=Sin+imagen"
                  }
                  alt={movie.title}
                />
                <div className="movie-overlay">
                  <p className="movie-overview">{movie.overview || "Sin descripción disponible."}</p>
                </div>
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-meta">
                  <span className="movie-rating">⭐ {movie.vote_average.toFixed(1)}</span>
                  <span className="movie-date">{movie.release_date?.slice(0, 4) || "—"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paginación */}
      {!loading && !error && (
        <div className="api-pagination">

          <button
            className="page-btn"
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
          >
            <span className="page-btn-arrow">←</span>
            <span className="page-btn-label">Anterior</span>
          </button>

          <div className="page-indicator">
            <label className="page-label">Página</label>
            <input
              className="page-input"
              type="number"
              min={1}
              max={totalPages}
              value={page}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val >= 1 && val <= totalPages) setPage(val);
              }}
            />
            <span className="page-of">de <strong>{totalPages}</strong></span>
          </div>

          <button
            className="page-btn"
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
          >
            <span className="page-btn-label">Siguiente</span>
            <span className="page-btn-arrow">→</span>
          </button>

        </div>
      )}

    </div>
  );
}

export default ApiPage;