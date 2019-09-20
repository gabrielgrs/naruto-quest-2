export const getSkillType = type => {
  const types = [
    { name: 'damager', text: 'Dano' },
    { name: 'healer', text: 'Cura' },
    { name: 'evasion', text: 'Aumento de Defesa' }
  ]
  return types.find(t => t.name === type) || { text: `${type} N/A` }
}

export const getSkillStyle = type => {
  const types = [
    { name: 'taijutsu', text: 'Taijutsu' },
    { name: 'ninjutsu', text: 'Ninjutsu' },
    { name: 'genjutsu', text: 'Genjutsu' }
  ]
  return types.find(t => t.name === type) || { text: `${type} N/A` }
}
