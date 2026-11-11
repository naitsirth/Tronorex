import { useEffect, useState } from 'react'
// import Icono from './Icono'

// El reloj va en su propio componente para que, al actualizarse cada segundo,
// solo se vuelva a renderizar él y no toda la aplicación.
function Reloj() {
  const [hora, setHora] = useState<string>(new Date().toLocaleTimeString())

  // useEffect con [] (apartado 2.2.2): el intervalo se crea una sola vez, al montar el componente.
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString())
    }, 1000)

    // Limpieza: al desmontar el componente se para el intervalo (apartado 2.3)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="reloj">
      {/* <Icono nombre="reloj" tamano={18} /> */}
      <span className="reloj__hora">{hora}</span>
    </div>
  )
}

export default Reloj
