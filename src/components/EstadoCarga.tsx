import logo from '../assets/logo-tronorex.png'
// import Icono from './Icono'

// Pantallas auxiliares de cada sección: antes de cargar, cargando y error.
// Este archivo usa exportación normal (named), apartado 2.1.1: se importan entre llaves.

interface EstadoInicialProps {
  mensaje: string
  onCargar: () => void
}

export function EstadoInicial({ mensaje, onCargar }: EstadoInicialProps) {
  return (
    <div className="estado">
      <div className="logo-circulo logo-circulo--grande">
        <img src={logo} alt="" />
      </div>
      <p className="estado__texto">{mensaje}</p>
      <button className="boton boton--primario" onClick={onCargar}>
        {/* <Icono nombre="recargar" tamano={18} /> */}
        Cargar datos
      </button>
    </div>
  )
}

export function Cargando() {
  return (
    <div className="estado">
      <div className="spinner" />
      <p className="estado__texto">Cargando datos del servidor…</p>
    </div>
  )
}

interface ErrorCargaProps {
  mensaje: string
  onReintentar: () => void
}

export function ErrorCarga({ mensaje, onReintentar }: ErrorCargaProps) {
  return (
    <div className="estado estado--error">
      <p className="estado__titulo">¡Atasco en las tuberías!</p>
      <p className="estado__texto">{mensaje}</p>
      <button className="boton boton--primario" onClick={onReintentar}>
        {/* <Icono nombre="recargar" tamano={18} /> */}
        Reintentar
      </button>
    </div>
  )
}
