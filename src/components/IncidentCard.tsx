// import Icono from './Icono'

interface IncidentCardProps {
  id: number
  titulo: string
  departamento: number
  resuelta: boolean
}

function IncidentCard({ id, titulo, departamento, resuelta }: IncidentCardProps) {
  return (
    // Renderizado condicional: la clase cambia el color según "resuelta"
    <article className={`tarjeta tarjeta--incidencia ${resuelta ? 'tarjeta--resuelta' : 'tarjeta--pendiente'}`}>
      {/* <div className="incidencia__icono">
        {resuelta ? <Icono nombre="check" tamano={22} /> : <Icono nombre="pendiente" tamano={22} />}
      </div> */}
      <div className="tarjeta__cuerpo">
        <p className="tarjeta__categoria">
          Incidencia #{id} · Departamento {departamento}
        </p>
        <h3 className="tarjeta__titulo">{titulo}</h3>
      </div>
      <span className={`etiqueta ${resuelta ? 'etiqueta--resuelta' : 'etiqueta--pendiente'}`}>
        {resuelta ? 'Resuelta' : 'Pendiente'}
      </span>
    </article>
  )
}

export default IncidentCard
