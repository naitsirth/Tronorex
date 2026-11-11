import { useState } from 'react'

// Hook personalizado (apartado 2.2.4).
// Las tres vistas (Personal, Inventario e Incidencias) cargan datos de la misma forma,
// así que la lógica está aquí una sola vez y cada vista solo le pasa su URL.
// <T> es el tipo de cada elemento de la lista (Usuario, Producto o Tarea).
export function useCargarDatos<T>(url: string) {
  const [datos, setDatos] = useState<T[] | null>(null) // null = todavía no se ha cargado nada
  const [cargando, setCargando] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const cargar = async () => {
    setCargando(true)
    setError('')
    try {
      const respuesta = await fetch(url)
      if (respuesta.ok) {
        setDatos(await respuesta.json())
      } else {
        setError('El servidor respondió con el código ' + respuesta.status)
      }
    } catch {
      setError('No se ha podido conectar con el servidor')
    }
    setCargando(false)
  }

  return { datos, cargando, error, cargar }
}
