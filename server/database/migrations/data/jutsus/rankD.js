const { styles, types, elements, ninjaRanks } = require('./helpers')

module.exports = [
  // TODO: atualizar os jutsus abaixo
  // {
  //   name: 'Kawarimi',
  //   style: styles.NINJUTSU,
  //   type: types.EVASION,
  //   value: 5,
  //   cost: 10,
  //   delay: 2,
  //   ranking: 'E',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 3,
  //   requiredNinjaRank: ninjaRanks.STUDENT,
  //   image:
  //     'https://vignette.wikia.nocookie.net/naruto/images/e/eb/Body_Replacement.PNG/revision/latest/scale-to-width-down/350?cb=20150504131249',
  //   conditionToUse: [],
  //   skillsRequireds: []
  // },
  // // TODO
  // {
  //   name: 'Capa da Invisibilidade',
  //   style: styles.NINJUTSU,
  //   type: types.EVASION,
  //   value: 5,
  //   cost: 5,
  //   delay: 1,
  //   ranking: 'E',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 3,
  //   requiredNinjaRank: ninjaRanks.STUDENT,
  //   image:
  //     'https://vignette.wikia.nocookie.net/naruto/images/0/07/Cloak_of_Invisibility1.png/revision/latest/scale-to-width-down/350?cb=20150528191737',
  //   conditionToUse: [],
  //   skillsRequireds: []
  // },
  // {
  //   name: 'Bushin no Jutsu',
  //   style: styles.NINJUTSU,
  //   type: types.EVASION,
  //   value: 20,
  //   cost: 20,
  //   delay: 3,
  //   ranking: 'E',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 3,
  //   requiredNinjaRank: ninjaRanks.STUDENT,
  //   image:
  //     'https://vignette.wikia.nocookie.net/naruto/images/f/fc/Clone_technique.png/revision/latest/scale-to-width-down/350?cb=20150504141733',
  //   conditionToUse: [],
  //   skillsRequireds: []
  // },
  // {
  //   name: 'Mil Anos de Dor',
  //   style: styles.TAIJUTSU,
  //   type: types.DAMAGER,
  //   value: 30,
  //   cost: 10,
  //   delay: 3,
  //   ranking: 'E',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 4,
  //   requiredNinjaRank: ninjaRanks.STUDENT,
  //   image:
  //     'https://res.cloudinary.com/dbmnsavja/image/upload/v1567883920/Naruto%20Game/Jutsus/Rank%20D/one_thousand_years_of_death.png'
  // },
  // {
  //   name: 'Henge',
  //   style: styles.NINJUTSU,
  //   type: types.EVASION,
  //   value: 10,
  //   cost: 10,
  //   delay: 2,
  //   ranking: 'E',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 3,
  //   requiredNinjaRank: ninjaRanks.STUDENT,
  //   image:
  //     'https://vignette.wikia.nocookie.net/naruto/images/d/db/Transformation_Technique_part_1.png/revision/latest/scale-to-width-down/350?cb=20150504124845'
  // },
  // ======= STUDENT
  {
    name: 'Visão Infernal',
    style: styles.GENJUTSU,
    type: types.DAMAGER,
    value: 20,
    cost: 20,
    delay: 1,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 3,
    requiredNinjaRank: ninjaRanks.STUDENT,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223281/Naruto%20Game/Jutsus/Rank%20D/Hell_Viewing.png'
  },
  {
    name: 'Técnica de Paralisia',
    style: styles.NINJUTSU,
    type: types.DAMAGER,
    value: 10,
    cost: 10,
    delay: 2,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 3,
    requiredNinjaRank: ninjaRanks.STUDENT,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223282/Naruto%20Game/Jutsus/Rank%20D/Paralysis_Technique.png'
  },
  {
    name: 'Mil Anos de Dor',
    style: styles.TAIJUTSU,
    type: types.DAMAGER,
    value: 30,
    cost: 10,
    delay: 2,
    ranking: 'E',
    element: elements.NEUTRAL,
    requiredLevel: 3,
    requiredNinjaRank: ninjaRanks.STUDENT,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567883920/Naruto%20Game/Jutsus/Rank%20D/one_thousand_years_of_death.png'
  },
  // ======= GENIN
  {
    name: 'Decomposição Corporal',
    style: styles.GENJUTSU,
    type: types.DAMAGER,
    value: 20,
    cost: 20,
    delay: 1,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1568748076/Naruto%20Game/Jutsus/Rank%20D/Genjutsu_Decomposicao_Corporal.png'
  },
  {
    name: 'Kokoni Arazu no Jutsu',
    style: styles.GENJUTSU,
    type: types.DAMAGER,
    value: 20,
    cost: 20,
    delay: 1,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1568748081/Naruto%20Game/Jutsus/Rank%20D/Kokoni_Arazu_no_Jutsu.png'
  },
  {
    name: 'Shiawase ne Kemuri',
    style: styles.GENJUTSU,
    type: types.DAMAGER,
    value: 20,
    cost: 20,
    delay: 1,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1568748086/Naruto%20Game/Jutsus/Rank%20D/Shiawase_na_Kemuri.png'
  },
  //
  {
    name: 'Intenção Assassina',
    style: styles.GENJUTSU,
    type: types.DAMAGER,
    value: 20,
    cost: 20,
    delay: 1,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1568823380/Naruto%20Game/Jutsus/Rank%20D/Inten%C3%A7%C3%A3o_Assassina.png'
  },
  {
    name: 'Quatro Patas',
    style: styles.NINJUTSU,
    type: types.DAMAGER,
    value: 20,
    cost: 20,
    delay: 2,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223280/Naruto%20Game/Jutsus/Rank%20D/Four_Legs.png'
  },
  {
    name: 'Clone da Neblina',
    style: styles.NINJUTSU,
    type: types.EVASION,
    value: 20,
    cost: 20,
    delay: 2,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223281/Naruto%20Game/Jutsus/Rank%20D/Haze_Clone.png'
  },
  {
    name: 'Esconderijo da Névoa',
    style: styles.NINJUTSU,
    type: types.EVASION,
    value: 30,
    cost: 10,
    delay: 3,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223281/Naruto%20Game/Jutsus/Rank%20D/Hidding_In_Mist.png'
  },
  // {
  //   name: 'Servo da Névoa',
  //   style: styles.NINJUTSU,
  //   type: types.DAMAGER,
  //   value: 10,
  //   cost: 5,
  //   delay: 1,
  //   ranking: 'D',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 10,
  //   requiredNinjaRank: ninjaRanks.GENIN,
  //   image:
  //     'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223281/Naruto%20Game/Jutsus/Rank%20D/Mist_Servant_Technique.png'
  // },
  {
    name: 'Shuriken das Sombras',
    style: styles.NINJUTSU,
    type: types.DAMAGER,
    value: 10,
    cost: 20,
    delay: 1,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223282/Naruto%20Game/Jutsus/Rank%20D/Shadow_Shuriken.png'
  },
  // {
  //   name: 'Shuriken de Papel',
  //   style: styles.NINJUTSU,
  //   type: types.DAMAGER,
  //   value: 50,
  //   cost: 60,
  //   delay: 4,
  //   ranking: 'D',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 10,
  //   requiredNinjaRank: ninjaRanks.GENIN,
  //   image:
  //     'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223282/Naruto%20Game/Jutsus/Rank%20D/Paper_Shuriken.png'
  // },
  // {
  //   name: 'Clone da Besta',
  //   style: styles.NINJUTSU,
  //   type: types.DAMAGER,
  //   value: 50,
  //   cost: 50,
  //   delay: 1,
  //   ranking: 'D',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 10,
  //   requiredNinjaRank: ninjaRanks.GENIN,
  //   image:
  //     'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223281/Naruto%20Game/Jutsus/Rank%20D/Man_Beast_Clone.png'
  // },
  {
    name: 'Manipulação de Shuriken',
    style: styles.TAIJUTSU,
    type: types.DAMAGER,
    value: 30,
    cost: 15,
    delay: 1,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223281/Naruto%20Game/Jutsus/Rank%20D/Manipulated_Shuriken.png'
  },
  {
    name: 'Entrada Dinâmica',
    style: styles.TAIJUTSU,
    type: types.DAMAGER,
    value: 40,
    cost: 30,
    delay: 4,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223280/Naruto%20Game/Jutsus/Rank%20D/Dynamic_Entry.png'
  },
  {
    name: 'Vendaval da Folha',
    style: styles.TAIJUTSU,
    type: types.DAMAGER,
    value: 30,
    cost: 15,
    delay: 3,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223281/Naruto%20Game/Jutsus/Rank%20D/Leaf_Gale.png'
  },
  // {
  //   name: 'Túnel de Vento Corporal',
  //   style: styles.TAIJUTSU,
  //   type: types.DAMAGER,
  //   value: 35,
  //   cost: 25,
  //   delay: 3,
  //   ranking: 'D',
  //   element: elements.NEUTRAL,
  //   requiredLevel: 10,
  //   requiredNinjaRank: ninjaRanks.GENIN,
  //   image:
  //     'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223282/Naruto%20Game/Jutsus/Rank%20D/Passing_Fang.png'
  // },
  {
    name: 'Furacão da Folha',
    style: styles.TAIJUTSU,
    type: types.DAMAGER,
    value: 50,
    cost: 50,
    delay: 2,
    ranking: 'D',
    element: elements.NEUTRAL,
    requiredLevel: 7,
    requiredNinjaRank: ninjaRanks.GENIN,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566223282/Naruto%20Game/Jutsus/Rank%20D/Whirlwind.png'
  }
]
