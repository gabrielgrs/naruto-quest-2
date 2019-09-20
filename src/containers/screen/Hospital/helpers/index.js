const recoveryTypes = {
  SOFT: 'soft',
  MEDIUM: 'medium',
  TOTAL: 'total'
}

export const recoveries = [
  {
    name: 'Recuperação Leve',
    cost: 30,
    type: recoveryTypes.SOFT
  },
  {
    name: 'Recuperação Média',
    cost: 50,
    type: recoveryTypes.MEDIUM
  },
  {
    name: 'Recuperação Total',
    cost: 200,
    type: recoveryTypes.TOTAL
  }
]
