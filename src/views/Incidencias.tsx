import CabeceraSeccion from '../components/CabeceraSeccion'
import { Cargando, ErrorCarga, EstadoInicial } from '../components/EstadoCarga'
import IncidentCard from '../components/IncidentCard'
import { useCargarDatos } from '../lib/useCargarDatos'
import type { Tarea } from '../types'

const URL_INCIDENCIAS = 'https://jsonplaceholder.typicode.com/todos?_limit=8'

function Incidencias() {
  const { datos, cargando, error, cargar } = useCargarDatos<Tarea>(URL_INCIDENCIAS)

  // Cuántas incidencias quedan sin resolver
  let pendientes = 0
  if (datos) {
    pendientes = datos.filter((incidencia) => !incidencia.completed).length
  }

  return (
    <section className="seccion">
      {/* Lo que va entre las etiquetas llega a CabeceraSeccion como children (apartado 2.1.4) */}
      <CabeceraSeccion
        titulo="Incidencias"
        descripcion="Registro de tareas e incidencias de los departamentos."
      >
        {datos && !cargando && (
          <span className="resumen">
            <strong>{pendientes}</strong> pendientes · <strong>{datos.length - pendientes}</strong> resueltas
          </span>
        )}
      </CabeceraSeccion>

      {cargando && <Cargando />}
      {!cargando && error && <ErrorCarga mensaje={error} onReintentar={cargar} />}
      {!cargando && !error && !datos && (
        <EstadoInicial mensaje="Ni una gota fuera de sitio. ¿Comprobamos?" onCargar={cargar} />
      )}

      {!cargando && !error && datos && (
        <div className="lista">
          {datos.map((incidencia) => (
            <IncidentCard
              key={incidencia.id}
              id={incidencia.id}
              titulo={incidencia.title}
              departamento={incidencia.userId}
              resuelta={incidencia.completed}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Incidencias
