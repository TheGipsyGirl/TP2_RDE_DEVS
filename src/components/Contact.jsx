function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Gracias por tu mensaje. Esta versión no envía datos reales.')
  }

  return (
    <section id="contacto" className="section contact-section">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" placeholder="Tu nombre" />
        </label>
        <label>
          Apellido:
          <input type="text" name="apellido" placeholder="Tu apellido" />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="tu@email.com" />
        </label>
        <label>
          Teléfono:
          <input type="tel" name="telefono" placeholder="(123) 456-7890" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contact
