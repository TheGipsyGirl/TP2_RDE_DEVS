import { useMemo, useState } from 'react'
import items from '../data/items.json'

function DataExplorer() {
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('Todas')
  const [status, setStatus] = useState('Todas')

  const categories = useMemo(() => ['Todas', ...new Set(items.map((item) => item.category))], [])
  const statuses = useMemo(() => ['Todas', ...new Set(items.map((item) => item.status))], [])

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = [item.name, item.description, item.owner, item.category]
        .join(' ')
        .toLowerCase()
        .includes(searchText.toLowerCase())
      const matchesCategory = category === 'Todas' || item.category === category
      const matchesStatus = status === 'Todas' || item.status === status
      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [searchText, category, status])

  return (
    <section className="section explorer-section" aria-label="Explorador de datos locales">
      <h2>Explorador de Datos</h2>
      <p>Resultados dinámicos desde un archivo JSON con búsqueda y filtros en tiempo real.</p>

      <div className="explorer-controls">
        <div className="explorer-field">
          <label htmlFor="searchText">Buscar</label>
          <input
            id="searchText"
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar por nombre, descripción, dueño o categoría"
          />
        </div>

        <div className="explorer-field">
          <label htmlFor="categoryFilter">Categoría</label>
          <select id="categoryFilter" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="explorer-field">
          <label htmlFor="statusFilter">Estado</label>
          <select id="statusFilter" value={status} onChange={(e) => setStatus(e.target.value)}>
            {statuses.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="explorer-summary" aria-live="polite">
        <span>{filteredItems.length} resultados</span>
        <small>Mostrando objetos filtrados en tiempo real.</small>
      </div>

      <div className="explorer-grid">
        {filteredItems.length === 0 && <div className="explorer-empty">No se encontraron elementos.</div>}
        {filteredItems.map((item) => (
          <article key={item.id} className="explorer-card">
            <header>
              <h3>{item.name}</h3>
              <span className={`badge ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span>
            </header>
            <p>{item.description}</p>
            <div className="explorer-meta">
              <span><strong>Categoría:</strong> {item.category}</span>
              <span><strong>Owner:</strong> {item.owner}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DataExplorer
