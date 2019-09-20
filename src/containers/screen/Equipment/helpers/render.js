import React from 'react'

export const renderEquipmentTooltip = equipment => {
  if (!equipment) return null

  const { name, value, usageType } = equipment

  const getUsageType = type => {
    if (type === 'weapon') return { name: 'Arma', increase: 'Ataque' }
    if (type === 'head') return { name: 'Cabeça', increase: 'Defesa' }
    if (type === 'trunk') return { name: 'Corpo', increase: 'Defesa' }
    if (type === 'arms') return { name: 'Braços', increase: 'Defesa' }
    if (type === 'legs') return { name: 'Pernas', increase: 'Defesa' }

    return { name: type, increase: 'n/a' }
  }

  return (
    <div style={{ letterSpacing: '1px' }}>
      <b>{name}</b>
      <div>
        <b>Tipo: </b>
        {getUsageType(usageType).name}
      </div>
      <div>
        <b>Aumenta: </b>
        {value}
        {` de ${getUsageType(usageType).increase}`}
      </div>
    </div>
  )
}
