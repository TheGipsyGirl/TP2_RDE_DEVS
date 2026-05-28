import "../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (

    <section className="home">

      <div className="home-header">

        <h1>
          Bienvenidos a <span>Rulos de Estatua Developers</span>
        </h1>

        <p>
          GRUPO 1.
          Un dashboard desarrollado en React donde cada integrante
          representa una identidad visual única dentro del ecosistema digital.
        </p>

      </div>

      <div className="cards-grid">

        <article className="member-card">

          <img
            src="public/valeria/perfil.jpg"
            alt="Valeria"
          />

          <div className="card-content">

            <h2>Valeria Natucci</h2>

            <p>
              Frontend developer creativa enfocada en diseño web,
              experiencias visuales modernas y branding digital.
            </p>

            <Link className="card-btn" to="/valeria">
              Ver perfil
            </Link>

          </div>

        </article>

        <article className="member-card">

          <img
            src="/agustina.jpg"
            alt="Agustina"
          />

          <div className="card-content">

            <h2>Agustina Brandemann</h2>

            <p>
              Desarrolladora orientada a interfaces modernas,
              organización visual y experiencia de usuario.
            </p>

            <Link className="card-btn" to="/agustina">
              Ver perfil
            </Link>

          </div>

        </article>

        <article className="member-card">

          <img
            src="/matias.jpg"
            alt="Matias"
          />

          <div className="card-content">

            <h2>Matías Gonzalez</h2>

            <p>
              Desarrollador apasionado por la lógica,
              APIs y funcionalidades dinámicas en React.
            </p>

            <Link className="card-btn" to="/matias">
              Ver perfil
            </Link>

          </div>

        </article>

        <article className="member-card">

          <img
            src="/luis.jpg"
            alt="Luis"
          />

          <div className="card-content">

            <h2>Luis Specterman</h2>

            <p>
              Developer enfocado en soluciones digitales,
              optimización y arquitectura frontend.
            </p>

            <Link className="card-btn" to="/luis">
              Ver perfil
            </Link>

          </div>

        </article>

      </div>

    </section>

  );
}

export default Home;