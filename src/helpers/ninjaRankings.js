export const ninjaRankings = [
  {
    id: 0,
    name: 'Student',
    label: 'Estudante'
  },
  {
    id: 1,
    name: 'Genin',
    label: 'Genin'
  },
  {
    id: 2,
    name: 'Chuunin',
    label: 'Chuunin'
  },
  {
    id: 3,
    name: 'Jounin',
    label: 'Jounin'
  },
  {
    id: 4,
    name: 'ANBU',
    label: 'ANBU'
  },
  {
    id: 5,
    name: 'Sannin',
    label: 'Sannin'
  }
]

export const getNinjaRank = param => {
  if (!Number.isNaN(param)) {
    return ninjaRankings.find(x => x.id === param) || { label: 'N/A' }
  }
  return ninjaRankings.find(x => x.name === param) || { label: 'N/A' }
}
