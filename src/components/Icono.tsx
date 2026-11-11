// NO SE USA de momento: todos los <Icono /> del proyecto están comentados.
// Iconos SVG sencillos con trazo grueso, a juego con el contorno del logo
type NombreIcono =
  | 'personal'
  | 'inventario'
  | 'incidencias'
  | 'reloj'
  | 'buscar'
  | 'correo'
  | 'ubicacion'
  | 'check'
  | 'pendiente'
  | 'recargar'

interface IconoProps {
  nombre: NombreIcono
  tamano?: number
}

const trazos: Record<NombreIcono, JSX.Element> = {
  personal: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.4c1.9.8 3 2.9 3 5.6" />
    </>
  ),
  inventario: (
    <>
      <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9" />
    </>
  ),
  incidencias: (
    <>
      <path d="M12 3 2 20h20z" />
      <path d="M12 10v4.5M12 17.5v.01" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  buscar: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </>
  ),
  correo: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  ubicacion: (
    <>
      <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  pendiente: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  recargar: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v5h-5" />
    </>
  ),
}

function Icono({ nombre, tamano = 20 }: IconoProps) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {trazos[nombre]}
    </svg>
  )
}

export default Icono
