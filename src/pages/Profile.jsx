import { useParams } from 'react-router-dom'
import team from '../data/team'
import ProgressBar from '../components/ProgressBar'
import Carousel from '../components/Carousel'
import TechStack from '../components/TechStack'
import SocialButtons from '../components/SocialButtons'

function Profile() {
  const { id } = useParams()
  const member = team.find((m) => m.id === id)

  if (!member) return <section className="section">Miembro no encontrado</section>

  return (
    <section className="section profile-section" role="region" aria-label={`Perfil de ${member.name}`}>
      <div className="profile-header">
        <img src={member.avatar} alt={member.name} className="profile-avatar" />
        <div>
          <h2>{member.name}</h2>
          <p>Rol: {member.role}</p>
          <SocialButtons links={member.socials} />
        </div>
      </div>

      <div className="profile-columns">
        <div className="profile-left">
          <h3>Habilidades</h3>
          {member.skills.map((s) => (
            <ProgressBar key={s.name} label={s.name} percent={s.level} />
          ))}

          <h3 style={{ marginTop: 20 }}>Tech Stack</h3>
          <TechStack items={member.skills.map((s) => s.name)} />
        </div>

        <div className="profile-right">
          <h3>Proyectos</h3>
          <Carousel items={member.projects} />
        </div>
      </div>
    </section>
  )
}

export default Profile
