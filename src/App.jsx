import { useEffect, useState } from 'react'
import { getModulos } from './services/modulos'

function App() {
  const [modulos, setModulos] = useState([])

  useEffect(() => {
    getModulos().then(setModulos).catch(console.error)
  }, [])

  return (
    <div>
      <h1>Lista de Módulos</h1>
      <ul>
        {modulos.map(m => <li key={m.id}>{m.nombre}</li>)}
      </ul>
    </div>
  )
}

export default App
