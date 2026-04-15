import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState<string>('…')

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((d: { ok?: boolean }) => setStatus(d.ok ? 'Connected' : 'Unexpected'))
      .catch(() => setStatus('Server offline'))
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default App
