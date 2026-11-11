interface CabeceraSeccionProps {
  titulo: string
  descripcion: string
  children?: React.ReactNode // contenido opcional que se pinta a la derecha (apartado 2.1.4)
}

function CabeceraSeccion({ titulo, descripcion, children }: CabeceraSeccionProps) {
  return (
    <div className="seccion__cabecera">
      <div>
        <h2 className="seccion__titulo">{titulo}</h2>
        <p className="seccion__descripcion">{descripcion}</p>
      </div>
      <div className="seccion__acciones">{children}</div>
    </div>
  )
}

export default CabeceraSeccion
