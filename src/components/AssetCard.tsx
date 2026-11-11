interface AssetCardProps {
  titulo: string
  precio: number
  categoria: string
  imagen: string
}

function AssetCard({ titulo, precio, categoria, imagen }: AssetCardProps) {
  const esAltoValor = precio > 50

  return (
    <article className={`tarjeta tarjeta--activo ${esAltoValor ? 'tarjeta--alto-valor' : ''}`}>
      <div className="activo__imagen">
        <img src={imagen} alt={titulo} />
        {/* Renderizado condicional: etiqueta solo si supera los 50 $ */}
        {esAltoValor && <span className="etiqueta etiqueta--alto-valor">Activo de Alto Valor</span>}
      </div>
      <div className="tarjeta__cuerpo">
        <p className="tarjeta__categoria">{categoria}</p>
        <h3 className="tarjeta__titulo tarjeta__titulo--recortado">{titulo}</h3>
        <p className="activo__precio">{precio.toFixed(2)} $</p>
      </div>
    </article>
  )
}

export default AssetCard
