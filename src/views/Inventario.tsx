import AssetCard from '../components/AssetCard'
import CabeceraSeccion from '../components/CabeceraSeccion'
import { Cargando, ErrorCarga, EstadoInicial } from '../components/EstadoCarga'
import { useCargarDatos } from '../lib/useCargarDatos'
import type { Producto } from '../types'

const URL_INVENTARIO = 'https://fakestoreapi.com/products?limit=6'

function Inventario() {
  const { datos, cargando, error, cargar } = useCargarDatos<Producto>(URL_INVENTARIO)

  return (
    <section className="seccion">
      <CabeceraSeccion titulo="Inventario" descripcion="Activos y material de la oficina." />

      {cargando && <Cargando />}
      {!cargando && error && <ErrorCarga mensaje={error} onReintentar={cargar} />}
      {!cargando && !error && !datos && (
        <EstadoInicial mensaje="El almacén está vacío… de momento." onCargar={cargar} />
      )}

      {!cargando && !error && datos && (
        <div className="rejilla">
          {datos.map((activo) => (
            <AssetCard
              key={activo.id}
              titulo={activo.title}
              precio={activo.price}
              categoria={activo.category}
              imagen={activo.image}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Inventario
