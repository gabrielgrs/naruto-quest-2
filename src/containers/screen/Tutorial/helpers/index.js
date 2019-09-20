export const listOfHelpers = ({ isAuthenticated }) => [
  {
    index: 0,
    title: 'Cadastro',
    description: 'Você utiliza para criar uma nova conta',
    canShow: !isAuthenticated
  },
  {
    index: 1,
    title: 'Acesso',
    description: 'Tendo uma conta cadastrada préviamente, você',
    canShow: !isAuthenticated
  },
  {
    index: 2,
    title: 'Vila',
    description: 'Aqui você encontra',
    childs: [
      {
        title: 'Campo de Batalha',
        description: 'Aqui você enfrenta NPCs'
      },
      {
        title: 'Lojas',
        description: 'Local para compra de consumíveis'
      },
      {
        title: 'Hospita',
        description: 'Recupere seus atributos'
      }
    ],
    canShow: !!isAuthenticated
  },
  {
    index: 3.1,
    title: 'Treinamento',
    description: 'Aqui você pode melhorar seus status e atributos!',
    childs: [
      {
        title: 'Atributos',
        description:
          'Você ganha 3 pontos de atributos por level para distribuir entre Taijutsu, Ninjutsu ou Genjutsu'
      },
      {
        title: 'Pontos de Habilidade',
        description:
          'Você ganha um ponto a cada 3 levels para poder aprender um novo justsu'
      }
    ],
    canShow: !!isAuthenticated
  },
  {
    index: 3,
    title: 'Missões',
    description: 'Realize missões para ganhar experiência e dinheiro',
    canShow: !!isAuthenticated
  },
  {
    index: 4,
    title: 'Times',
    description: 'Monte ou participe de times',
    canShow: !!isAuthenticated
  },
  {
    index: 5,
    title: 'Ranking',
    description: 'Veja seu ranking e o ranking dos seus colegas',
    canShow: !!isAuthenticated
  },
  {
    index: 6,
    title: 'Atributos',
    description:
      'Você pode distribuir seus atributos entre Taijutsu, Ninjutsu ou Genjutsu',
    childs: [
      {
        title: 'Taijutsu',
        description:
          'Aumenta o dano dos seus ataques do tipo Taijutsu e aumenta um pouco de Vida'
      },
      {
        title: 'Ninjutsu',
        description:
          'Aumenta o dano dos seus ataques do tipo Ninjutsu e aumenta seu Chakra'
      },
      {
        title: 'Genjutsu',
        description:
          'Aumenta o dano dos seus ataques do tipo Genjutsu e aumenta sua vida'
      }
    ],
    canShow: !!isAuthenticated
  },
  {
    index: 7,
    title: 'Graduação',
    description:
      'A cada 10 níveis, vocẽ pode realizar uma nova missão para se graduar',
    childs: [
      {
        title: 'Estudante',
        description: 'Ao início do jogo, você já será um Estudante'
      },
      {
        title: 'Genin',
        description: 'No nível 10, você poderá realizar a missão de Genin'
      },
      {
        title: 'Chuunin',
        description: 'No nível 20, você poderá realizar a missão de Chuunin'
      }
    ],
    canShow: !!isAuthenticated
  }
]
