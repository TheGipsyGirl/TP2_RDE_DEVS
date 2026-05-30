import { useEffect, useState } from 'react'

function ProgressBar({ label, percent }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setWidth(percent), 120)
    return () => clearTimeout(t)
  }, [percent])

  return (
    <div className="progress-row">
      <div className="progress-label">{label}</div>
      <div className="progress-track">
        <div className="progress-bar" style={{ width: `${width}%` }} />
      </div>
      <div className="progress-percent">{percent}%</div>
    </div>
  )
}

export default ProgressBar
