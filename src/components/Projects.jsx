const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Proyecto de landing page con HTML y CSS.',
    image: '/img/proyecto1.png',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Aplicación con React para gestión de tareas.',
    image: '/img/proyecto2.jpg',
  },
    {
    id: 3,
    title: 'Proyecto 3',
    description: 'Pagina web Carrito de Compras.',
    image: '/img/proyectoluzvelita.jpg',
  },
]

function Projects() {
  return (
    <section id="proyectos" className="section projects-section">
      <h2>Mis Proyectos</h2>
      <div className="cards-grid">
        {projects.map((project) => (
          <article className="card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
