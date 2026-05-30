function Contacto() {
  return (
    <section id="contacto">
      <h2 className="section-title">¿Hablamos? <span className="accent">Escribime.</span></h2>
      <div className="contacto-wrap">
        <div className="contacto-info">
          <p>Si tenés un proyecto, una idea o simplemente querés saludar, estoy disponible. Respondo rápido 🚀</p>
          <div className="social-btns" style={{ flexDirection: "column" }}>
            <a href="https://github.com/AgustinaBran" target="_blank" rel="noopener" className="social-btn github">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="social-btn linkedin">
              💼 LinkedIn
            </a>
          </div>
        </div>

        <div className="contacto-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label>Apellido</label>
              <input type="text" placeholder="Tu apellido" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input type="tel" placeholder="+54 11..." />
            </div>
          </div>
          <button className="btn-submit">Enviar mensaje →</button>
        </div>
      </div>
    </section>
  );
}

export default Contacto;