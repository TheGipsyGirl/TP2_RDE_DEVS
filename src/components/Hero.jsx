import agusAvatar from "../assets/AguAvatar.jpeg";

function Hero() {
  return (
    <section id="sobre-mi" className="hero">
      <div className="hero-inner">
        <div className="hero-texto">
          <p className="label">Frontend Developer</p>
          <h1 className="hero-title">
            Hola, soy<br />
            <span className="nombre-highlight">Agustina.</span>
          </h1>
          <p className="bio">
            Estudiante de desarrollo web apasionada por construir interfaces que combinen
            funcionalidad y estética. Me interesa el diseño centrado en el usuario, las
            animaciones CSS y crear experiencias web que realmente se sientan vivas.
          </p>
          <a href="#contacto" className="btn-primary">Hablemos →</a>

          <div className="techstack">
            <div className="tech-icon"><span>🌐</span>HTML5</div>
            <div className="tech-icon"><span>🎨</span>CSS3</div>
            <div className="tech-icon"><span>⚡</span>JavaScript</div>
            <div className="tech-icon"><span>⚛️</span>React</div>
            <div className="tech-icon"><span>🐙</span>Git</div>
          </div>

          <div className="social-btns">
            <a href="https://github.com/AgustinaBran" target="_blank" rel="noopener" className="social-btn github">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="social-btn linkedin">
              💼 LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="social-btn instagram">
              📸 Instagram
            </a>
          </div>
        </div>

        <div className="hero-imagen">
          <img src={agusAvatar} alt="Avatar de Agustina" className="avatar" />
        </div>
      </div>
    </section>
  );
}

export default Hero;