import { Link } from 'react-router-dom'
import team from '../data/team'

function Dashboard() {
  return (
    <section className="section dashboard">
      <h2>Home</h2>
      <div className="cards-grid">
        {team.map((member) => (
          <Link to={`/profile/${member.id}`} className="card member-card" key={member.id}>
            <img src={member.avatar} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Dashboard
