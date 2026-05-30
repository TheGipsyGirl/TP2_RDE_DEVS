function RenderTree() {
  return (
    <section className="section tree-section" aria-label="Árbol de renderizado de la aplicación">
      <div className="tree-heading">
        <h2>Árbol de Renderizado</h2>
        <p>Esta visualización muestra la jerarquía de componentes React que componen la aplicación.</p>
      </div>

      <div className="tree-container">
        <ul className="tree">
          <li>
            <div className="tree-node">App</div>
            <ul>
              <li>
                <div className="tree-node">Sidebar</div>
              </li>
              <li>
                <div className="tree-node">Header</div>
              </li>
              <li>
                <div className="tree-node">NavBar</div>
              </li>
              <li>
                <div className="tree-node">Routes</div>
                <ul>
                  <li><div className="tree-node">Dashboard</div></li>
                  <li><div className="tree-node">Profile</div></li>
                  <li><div className="tree-node">DataExplorer</div></li>
                  <li><div className="tree-node">RemoteApi</div></li>
                  <li><div className="tree-node">Gallery</div></li>
                  <li><div className="tree-node">About</div></li>
                  <li><div className="tree-node">Projects</div></li>
                  <li><div className="tree-node">Contact</div></li>
                  <li><div className="tree-node">Movies</div></li>
                </ul>
              </li>
              <li>
                <div className="tree-node">Music</div>
              </li>
              <li>
                <div className="tree-node">Footer</div>
              </li>
              <li>
                <div className="tree-node">BackToTop</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default RenderTree
