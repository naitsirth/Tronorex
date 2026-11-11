import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Incidencias from './views/Incidencias'
import Inventario from './views/Inventario'
import Personal from './views/Personal'
import type { Seccion } from './types'

function App() {
  const [seccion, setSeccion] = useState<Seccion>('Personal')

  return (
    <div className="app">
      <Header nombreEmpresa="TronoRex" lema="Váteres con historia" />
      <Sidebar seccionActiva={seccion} onCambiarSeccion={setSeccion} />

      {/* Renderizado condicional según la pestaña seleccionada */}
      <main id="panel_central">
        {seccion === 'Personal' && <Personal />}
        {seccion === 'Inventario' && <Inventario />}
        {seccion === 'Incidencias' && <Incidencias />}
      </main>
    </div>
  )
}

export default App
