import { useEffect, useState } from 'react'
import { fetchPosts } from '../services/api'

function RemoteApi() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const loadPosts = async () => {
      setLoading(true)
      setError('')

      try {
        const { data, totalPages: pages } = await fetchPosts(page, 6, {
          signal: controller.signal,
        })
        setPosts(data)
        setTotalPages(pages)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadPosts()

    return () => controller.abort()
  }, [page])

  return (
    <section className="section api-section" aria-label="Consumo de API externa">
      <div className="api-header">
        <div>
          <h2>API externa con paginación</h2>
          <p>Datos obtenidos en vivo desde JSONPlaceholder. Navega entre páginas y visualiza resultados en cards.</p>
        </div>
        <div className="api-controls">
          <button
            type="button"
            disabled={page <= 1 || loading}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Página anterior
          </button>
          <span>Página {page} de {totalPages}</span>
          <button
            type="button"
            disabled={page >= totalPages || loading}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Página siguiente
          </button>
        </div>
      </div>

      {loading && <div className="api-status" role="status" aria-live="polite">Cargando datos...</div>}
      {error && <div className="api-status api-error" role="status" aria-live="polite">{error}</div>}

      <div className="api-grid">
        {!loading && !error && posts.map((post) => (
          <article key={post.id} className="api-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <span className="api-badge">ID: {post.id}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RemoteApi
