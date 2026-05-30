function SocialButtons({ links = {} }) {
  return (
    <div className="social-buttons" role="group" aria-label="Redes sociales">
      <a href={links.github || '#'} className="social-btn github" target="_blank" rel="noreferrer noopener" aria-label="GitHub">GitHub</a>
      <a href={links.twitter || '#'} className="social-btn twitter" target="_blank" rel="noreferrer noopener" aria-label="Twitter">Twitter</a>
      <a href={links.linkedin || '#'} className="social-btn linkedin" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">LinkedIn</a>
    </div>
  )
}

export default SocialButtons
