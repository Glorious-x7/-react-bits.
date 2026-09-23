import './ElectricBorder.css'

function ElectricBorder({
  children,
  color = '#5227FF',
  speed = 1,
  chaos = 0.5,
  borderRadius = 16
}) {
  return (
    <div
      className="electric-border"
      style={{
        '--electric-color': color,
        '--electric-speed': `${2 / speed}s`,
        '--electric-chaos': chaos,
        borderRadius: `${borderRadius}px`
      }}
    >
      <div className="electric-border-content">
        {children}
      </div>
    </div>
  )
}

export default ElectricBorder