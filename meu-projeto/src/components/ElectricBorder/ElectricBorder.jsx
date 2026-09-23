import './ElectricBorder.css'

function ElectricBorder({
  children,
  color = '#8b5cf6',
  speed = 1,
  borderRadius = 20
}) {
  return (
    <div
      className="electric-border"
      style={{
        '--electric-color': color,
        '--electric-speed': `${3 / speed}s`,
        '--electric-radius': `${borderRadius}px`
      }}
    >
      <div className="electric-glow"></div>

      <div className="electric-content">
        {children}
      </div>
    </div>
  )
}

export default ElectricBorder