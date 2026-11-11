// import Icono from './Icono'

interface EmployeeCardProps {
  nombre: string
  correo: string
  ciudad: string
}

function EmployeeCard({ nombre, correo, ciudad }: EmployeeCardProps) {
  return (
    <article className="tarjeta tarjeta--empleado">
      {/* Avatar con la primera letra del nombre */}
      <div className="avatar">{nombre.charAt(0)}</div>
      <div className="tarjeta__cuerpo">
        <h3 className="tarjeta__titulo">{nombre}</h3>
        <p className="tarjeta__dato">
          {/* <Icono nombre="correo" tamano={15} /> */}
          {correo.toLowerCase()}
        </p>
        <p className="tarjeta__dato">
          {/* <Icono nombre="ubicacion" tamano={15} /> */}
          {ciudad}
        </p>
      </div>
    </article>
  )
}

export default EmployeeCard
