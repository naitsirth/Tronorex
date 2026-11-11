import type { Seccion } from '../types'
// import Icono from './Icono'

interface SidebarProps {
  seccionActiva: Seccion
  onCambiarSeccion: (seccion: Seccion) => void
}

const secciones: Seccion[] = ['Personal', 'Inventario', 'Incidencias']

function Sidebar({ seccionActiva, onCambiarSeccion }: SidebarProps) {
  return (
    <aside className="sidebar">
      <p className="sidebar__titulo">Menú</p>
      <nav className="sidebar__menu">
        {secciones.map((seccion) => (
          <button
            key={seccion}
            className={`sidebar__boton ${seccionActiva === seccion ? 'sidebar__boton--activo' : ''}`}
            onClick={() => onCambiarSeccion(seccion)}
          >
            {/* <Icono nombre={...} /> */}
            {seccion}
          </button>
        ))}
      </nav>
      <p className="sidebar__pie">Desde el Jurásico, sentando cátedra.</p>
    </aside>
  )
}

export default Sidebar
