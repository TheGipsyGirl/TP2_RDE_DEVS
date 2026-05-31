import "../styles/arquitectura.css";

function Arquitectura() {
  return (
    <section className="arquitectura-page">
      <div className="arquitectura-hero">
        <p>Arquitectura</p>
        <h1>Árbol de Renderizado</h1>
        <span>
          Representación de la estructura del proyecto TP2 de RDE Devs.
        </span>
      </div>

      {/* ÁRBOL DE RENDERIZADO */}

      <div className="arquitectura-card">
        <h2>Estructura principal</h2>

        <ul className="tree">
          <li>
            <div className="tree-node root">App.jsx</div>

            <ul>
              <li>
                <div className="tree-node">BrowserRouter</div>

                <ul>
                  <li>
                    <div className="tree-node">Layout.jsx</div>

                    <ul>
                      <li>
                        <div className="tree-node">Sidebar.jsx</div>
                      </li>

                      <li>
                        <div className="tree-node">Outlet</div>

                        <ul>
                          <li><div className="tree-node">Home.jsx</div></li>
                          <li><div className="tree-node">Valeria.jsx</div></li>
                          <li><div className="tree-node">Agustina.jsx</div></li>
                          <li><div className="tree-node">Matias.jsx</div></li>
                          <li><div className="tree-node">Luis.jsx</div></li>
                          <li><div className="tree-node">JsonExplorer.jsx</div></li>
                          <li><div className="tree-node">ApiPage.jsx</div></li>
                          <li><div className="tree-node">Galeria.jsx</div></li>
                          <li><div className="tree-node">Bitacora.jsx</div></li>
                          <li><div className="tree-node">Arquitectura.jsx</div></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* INTRO */}

      <div className="arquitectura-grid">
        <article>
          <h2>Migración TP1 → TP2</h2>

          <p>
            El proyecto original fue desarrollado utilizando HTML, CSS y
            JavaScript. Durante el TP2 se realizó una migración completa hacia
            React, organizando la aplicación mediante componentes reutilizables,
            React Router y una arquitectura SPA.
          </p>
        </article>

        <article>
          <h2>Objetivos de la migración</h2>

          <p>
            La migración permitió mejorar la organización del código,
            reutilización de componentes, navegación interna y escalabilidad del
            proyecto, manteniendo la identidad visual del trabajo original.
          </p>
        </article>
      </div>

      {/* TABLA 1 */}

      <section className="arquitectura-section">
        <h2>🔄 Equivalencias TP1 → TP2</h2>

        <div className="arquitectura-table-wrapper">
          <table className="arquitectura-table">
            <thead>
              <tr>
                <th>TP1 (HTML/CSS/JS)</th>
                <th>TP2 (React)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>index.html</td>
                <td>Home.jsx</td>
              </tr>

              <tr>
                <td>valeria.html</td>
                <td>Valeria.jsx</td>
              </tr>

              <tr>
                <td>agu.html</td>
                <td>Agustina.jsx</td>
              </tr>

              <tr>
                <td>matias.html</td>
                <td>Matias.jsx</td>
              </tr>

              <tr>
                <td>luis.html</td>
                <td>Luis.jsx</td>
              </tr>

              <tr>
                <td>bitacora.html</td>
                <td>Bitacora.jsx</td>
              </tr>

              <tr>
                <td>Navegación HTML</td>
                <td>React Router</td>
              </tr>

              <tr>
                <td>JavaScript tradicional</td>
                <td>Hooks y Componentes React</td>
              </tr>

              <tr>
                <td>CSS global</td>
                <td>CSS modular</td>
              </tr>

              <tr>
                <td>Sitio multipágina</td>
                <td>SPA</td>
              </tr>

              <tr>
                <td>Proyecto estático</td>
                <td>Dashboard interactivo</td>
              </tr>

              <tr>
                <td>Estructura HTML</td>
                <td>Arquitectura basada en componentes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TABLA 2 */}

      <section className="arquitectura-section">
        <h2>🚀 Funcionalidades incorporadas</h2>

        <div className="arquitectura-table-wrapper">
          <table className="arquitectura-table">
            <thead>
              <tr>
                <th>Funcionalidad</th>
                <th>TP1</th>
                <th>TP2</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Página principal</td>
                <td>✅</td>
                <td>✅ Mejorada</td>
              </tr>

              <tr>
                <td>Perfiles individuales</td>
                <td>✅</td>
                <td>✅ React</td>
              </tr>

              <tr>
                <td>Bitácora</td>
                <td>✅</td>
                <td>✅ React</td>
              </tr>

              <tr>
                <td>Diseño responsive</td>
                <td>✅</td>
                <td>✅ Optimizado</td>
              </tr>

              <tr>
                <td>Navegación interna</td>
                <td>Básica</td>
                <td>React Router</td>
              </tr>

              <tr>
                <td>Dashboard principal</td>
                <td>❌</td>
                <td>✅</td>
              </tr>

              <tr>
                <td>Sidebar persistente</td>
                <td>❌</td>
                <td>✅</td>
              </tr>

              <tr>
                <td>Arquitectura de componentes</td>
                <td>❌</td>
                <td>✅</td>
              </tr>

              <tr>
                <td>API externa</td>
                <td>❌</td>
                <td>✅</td>
              </tr>

              <tr>
                <td>Galería interactiva</td>
                <td>❌</td>
                <td>✅</td>
              </tr>

              <tr>
                <td>Explorador JSON</td>
                <td>❌</td>
                <td>✅</td>
              </tr>

              <tr>
                <td>Reutilización de componentes</td>
                <td>❌</td>
                <td>✅</td>
              </tr>

              <tr>
                <td>Gestión de estados</td>
                <td>❌</td>
                <td>✅</td>
              </tr>

              <tr>
                <td>Arquitectura SPA</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      <section className="arquitectura-section">
        <h2>🛠 Tecnologías utilizadas</h2>

        <ul>
        <li>React</li>
        <li>React Router DOM</li>
        <li>JavaScript ES6+</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Git y GitHub</li>
        <li>Vercel (deploy)</li>
        </ul>
      </section>
      <section className="arquitectura-section">
  <h2>🧭 Flujo de navegación</h2>

  <p>
    El usuario accede al Dashboard principal (Home) desde donde puede navegar
    mediante la Sidebar hacia las páginas individuales de los integrantes,
    la Bitácora, Arquitectura, API externa, Galería y Explorador JSON.
  </p>

  <div className="flow-box">
    Home → Sidebar → Secciones → Componentes React
  </div>
</section>

      {/* RESUMEN */}

      <div className="arquitectura-resumen">
        <h2>📌 Conclusión</h2>

        <p>
          El TP2 representa la evolución del proyecto desarrollado durante el
          TP1. La aplicación fue migrada desde una estructura basada en HTML,
          CSS y JavaScript hacia una arquitectura React utilizando componentes
          reutilizables, React Router y navegación SPA.
        </p>

        <p>
          Además, se incorporaron nuevas funcionalidades como Dashboard, API
          externa, Galería interactiva y Explorador JSON, mejorando la
          organización, escalabilidad y experiencia de usuario.
        </p>
      </div>
    </section>
  );
}

export default Arquitectura;