import { Condicao } from '../core/types';

export const condicoes: Condicao[] = [
  {
    nome: 'Agarra',
    descricao: 'O personagem fica imóvel, desprevenido e não pode fazer ações de movimento. Sofre -2 em testes de ataque. Pode tentar se soltar com uma ação padrão (teste de manobra).',
    efeito: {
      deslocamento: 'zero',
      defesa: -5,
    }
  },
  {
    nome: 'Alquebrado',
    descricao: 'O custo de PE de habilidades e rituais aumenta em +1.',
  },
  {
    nome: 'Atordoado',
    descricao: 'O personagem fica desprevenido e não pode fazer ações.',
    efeito: {
      defesa: -5,
      acoes: 'nenhuma'
    }
  },
  {
    nome: 'Cego',
    descricao: 'O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre -2 dados em testes de perícias baseadas em Agilidade e Força. Todos os alvos têm camuflagem total contra ele.',
    efeito: {
      defesa: -5,
      deslocamento: 'metade',
      pericias: {
        atributos: ['AGI', 'FOR'],
        penalidadeDados: -2
      }
    }
  },
  {
    nome: 'Debilitado',
    descricao: 'O personagem sofre -2 dados em testes de Agilidade, Força e Vigor.',
    efeito: {
      pericias: {
        atributos: ['AGI', 'FOR', 'VIG'],
        penalidadeDados: -2
      }
    }
  },
  {
    nome: 'Desprevenido',
    descricao: 'O personagem sofre -5 na Defesa e não pode aplicar seu valor de Reflexos na Defesa.',
    efeito: {
      defesa: -5
    }
  },
  {
    nome: 'Doente',
    descricao: 'Sob efeito de uma doença.',
  },
  {
    nome: 'Esmorecido',
    descricao: 'O personagem sofre -2 dados em testes de Intelecto e Presença.',
    efeito: {
      pericias: {
        atributos: ['INT', 'PRE'],
        penalidadeDados: -2
      }
    }
  },
  {
    nome: 'Exausto',
    descricao: 'O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, fica inconsciente.',
    efeito: {
      deslocamento: 'metade',
      defesa: -5,
      pericias: {
        atributos: ['AGI', 'FOR', 'VIG'],
        penalidadeDados: -2 
      }
    }
  },
  {
    nome: 'Fascinado',
    descricao: 'O personagem sofre -2 dados em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou.',
    efeito: {
      acoes: 'nenhuma'
    }
  },
  {
    nome: 'Fatigado',
    descricao: 'O personagem fica fraco e vulnerável. Se ficar fatigado novamente, fica exausto.',
    efeito: {
      defesa: -5,
      pericias: {
        atributos: ['AGI', 'FOR', 'VIG'],
        penalidadeDados: -1
      }
    }
  },
  {
    nome: 'Fraco',
    descricao: 'O personagem sofre -1 dado em testes de Agilidade, Força e Vigor. Se ficar fraco novamente, fica debilitado.',
    efeito: {
      pericias: {
        atributos: ['AGI', 'FOR', 'VIG'],
        penalidadeDados: -1
      }
    }
  },
  {
    nome: 'Frustrado',
    descricao: 'O personagem sofre -1 dado em testes de Intelecto e Presença. Se ficar frustrado novamente, fica esmorecido.',
    efeito: {
      pericias: {
        atributos: ['INT', 'PRE'],
        penalidadeDados: -1
      }
    }
  },
  {
    nome: 'Imóvel',
    descricao: 'Todas as formas de deslocamento do personagem são reduzidas a 0m.',
    efeito: {
      deslocamento: 'zero'
    }
  },
  {
    nome: 'Inconsciente',
    descricao: 'O personagem fica indefeso e não pode fazer ações, incluindo reações.',
    efeito: {
      defesa: -10,
      acoes: 'nenhuma'
    }
  },
  {
    nome: 'Indefeso',
    descricao: 'O personagem é considerado desprevenido, mas sofre -10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.',
    efeito: {
      defesa: -10
    }
  },
  {
    nome: 'Lento',
    descricao: 'Todas as formas de deslocamento do personagem são reduzidas à metade e ele não pode correr ou fazer investidas.',
    efeito: {
      deslocamento: 'metade'
    }
  },
  {
    nome: 'Machucado',
    descricao: 'O personagem tem menos da metade de seus pontos de vida totais.',
  },
  {
    nome: 'Morrendo',
    descricao: 'Com 0 pontos de vida. Fica inconsciente.',
    efeito: {
      defesa: -10,
      acoes: 'nenhuma'
    }
  },
  {
    nome: 'Ofuscado',
    descricao: 'O personagem sofre -1 dado em testes de ataque e de Percepção.',
  },
  {
    nome: 'Paralisado',
    descricao: 'O personagem fica imóvel e indefeso e só pode realizar ações puramente mentais.',
    efeito: {
      deslocamento: 'zero',
      defesa: -10,
      acoes: 'mentais'
    }
  },
  {
    nome: 'Pasmo',
    descricao: 'O personagem não pode fazer ações.',
    efeito: {
      acoes: 'nenhuma'
    }
  },
  {
    nome: 'Petrificado',
    descricao: 'O personagem fica inconsciente e recebe resistência a dano 10.',
    efeito: {
      defesa: -10,
      acoes: 'nenhuma'
    }
  },
  {
    nome: 'Sangrando',
    descricao: 'No início de seus turnos, deve fazer um teste de Vigor (DT 20). Se falhar, perde 1d6 PV e continua sangrando.',
  },
  {
    nome: 'Surdo',
    descricao: 'O personagem não pode fazer testes de Percepção para ouvir e sofre -2 dados em testes de Iniciativa. Condição ruim para lançar rituais.',
  },
  {
    nome: 'Surpreendido',
    descricao: 'O personagem fica desprevenido e não pode fazer ações.',
    efeito: {
      defesa: -5,
      acoes: 'nenhuma'
    }
  },
  {
    nome: 'Vulnerável',
    descricao: 'O personagem sofre -5 na Defesa.',
    efeito: {
      defesa: -5
    }
  }
];
