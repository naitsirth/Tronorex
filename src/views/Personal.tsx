import { useState } from 'react'
import CabeceraSeccion from '../components/CabeceraSeccion'
import EmployeeCard from '../components/EmployeeCard'
import { Cargando, ErrorCarga, EstadoInicial } from '../components/EstadoCarga'
// import Icono from '../components/Icono'
import { useCargarDatos } from '../lib/useCargarDatos'
import type { Usuario } from '../types'

const URL_PERSONAL = 'https://jsonplaceholder.typicode.com/users'

function Personal() {
  const { datos, cargando, error, cargar } = useCargarDatos<Usuario>(URL_PERSONAL)
  const [busqueda, setBusqueda] = useState<string>('')

  // Filtrado en tiempo real por nombre
  let filtrados: Usuario[] = []
  if (datos) {
    filtrados = datos.filter((empleado) =>
      empleado.name.toLowerCase().includes(busqueda.toLowerCase()),
    )
  }

  return (
    <section className="seccion">
      <CabeceraSeccion titulo="Personal" descripcion="Directorio de la plantilla de TronoRex." />

      {cargando && <Cargando />}
      {!cargando && error && <ErrorCarga mensaje={error} onReintentar={cargar} />}
      {!cargando && !error && !datos && (
        <EstadoInicial mensaje="Aún no hay nadie sentado en el trono." onCargar={cargar} />
      )}

      {!cargando && !error && datos && (
        <>
          <div className="buscador">
            {/* <Icono nombre="buscar" tamano={18} /> */}
            <input
              type="text"
              placeholder="Buscar empleado por nombre…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <span className="buscador__contador">
              {filtrados.length} de {datos.length}
            </span>
          </div>

          {filtrados.length === 0 && (
            <p className="sin-resultados">Ningún empleado coincide con «{busqueda}».</p>
          )}

          <div className="rejilla">
            {filtrados.map((empleado) => (
              <EmployeeCard
                key={empleado.id}
                nombre={empleado.name}
                correo={empleado.email}
                ciudad={empleado.address.city}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Personal
