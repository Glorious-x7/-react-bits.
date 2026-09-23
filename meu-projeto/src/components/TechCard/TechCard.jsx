import './TechCard.css'

function TechCard({
  icon,
  number,
  title,
  description,
  tag
}) {
  return (
    <article className="tech-card">
      <div className="tech-card-top">
        <div className="tech-icon">
          {icon}
        </div>

        <span className="tech-number">
          {number}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech-tag">
        {tag}
      </div>
    </article>
  )
}

export default TechCard