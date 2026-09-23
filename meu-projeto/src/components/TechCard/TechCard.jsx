import './TechCard.css'

function TechCard({ title, description, icon }) {
  return (
    <div className="tech-card">
      <div className="tech-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  )
}

export default TechCard