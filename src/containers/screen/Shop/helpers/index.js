export const getUsageType = type => {
  if (type === 'weapon') return { name: 'Arma', increase: 'Ataque' }
  if (type === 'head') return { name: 'Cabeça', increase: 'Defesa' }
  if (type === 'arms') return { name: 'Braços', increase: 'Defesa' }
  if (type === 'legs') return { name: 'Pernas', increase: 'Defesa' }
  if (type === 'trunk') return { name: 'Tronco', increase: 'Defesa' }

  return { name: type, increase: 'n/a' }
}
