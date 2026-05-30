function TechStack({ items = [] }) {
  return (
    <div className="techstack">
      {items.map((it) => (
        <div className="tech-item" key={it} title={it}>
          <div className="tech-icon">{getIcon(it)}</div>
          <div className="tech-name">{it}</div>
        </div>
      ))}
    </div>
  )
}

function getIcon(name) {
  // Simple emoji-based icons as placeholders
  const map = {
    HTML: '📄',
    CSS: '🎨',
    JavaScript: '🟨',
    React: '⚛️',
    Git: '🔧',
    'Node.js': '🟩',
    Express: '🚂',
    MongoDB: '🍃',
    SQL: '🗄️',
  }
  return map[name] || '🔹'
}

export default TechStack
