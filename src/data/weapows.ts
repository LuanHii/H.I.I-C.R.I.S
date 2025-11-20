import { Weapow } from '../core/types';

export const WEAPOWS: Weapow[] = [
  // ===================================================================
  // ARMAS IMPROVISADAS E ATAQUES DESARMADOS
  // Proficiência: Nenhuma (Ataques Desarmados) ou Simples (Armas Improvisadas)
  // ===================================================================
  {
    nome: 'Ataque Desarmado (Padrão)',
    categoria: 0,
    espaco: 0,
    tipo: 'Improvisada',
    proficiencia: 'Nenhuma',
    descricao: 'Soco, chute ou outro golpe. Causam dano não letal.',
    stats: {
      Dano_Base: '1d3',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Arma Improvisada (Padrão)',
    categoria: 0,
    espaco: 1,
    tipo: 'Improvisada',
    proficiencia: 'Simples',
    descricao: 'Objeto comum usado como arma. Considerada de Corpo a Corpo de Uma Mão. Sofre –O no teste de ataque.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Coronhada',
    categoria: 0,
    espaco: 0,
    tipo: 'Simples',
    proficiencia: 'Simples (implícito)',
    descricao: 'Uso de uma arma de fogo como arma corpo a corpo. Dano 1d4 (armas leves/uma mão) ou 1d6 (armas de duas mãos).',
    stats: {
      Dano_Base: '1d4/1d6',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  
  // ===================================================================
  // ARMAS SIMPLES (Proficiência: Armas Simples)
  // Inclui Armas Simples Categoria 0 e I
  // ===================================================================
  {
    nome: 'Baioneta',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Lâmina para ser fixada em arma de fogo de duas mãos (ação de movimento). Fixada, torna-se Ágil e seu dano aumenta para 1d6 (ocupando 2 espaços). Sofre –O em ataques à distância com a arma de fogo.',
    stats: {
      Dano_Base: '1d4',
      Dano_Tipo: 'Perfuração',
      Critico: '19',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Bastão',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Pode ser empunhado com uma mão (dano 1d6) ou com as duas (dano 1d8).',
    stats: {
      Dano_Base: '1d6/1d8',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Cajado',
    categoria: 0,
    espaco: 2,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Arma Ágil e pode ser usada com Combater com Duas Armas (se aplica).',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Faca',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Lâmina afiada. É uma arma Ágil e pode ser arremessada.',
    stats: {
      Dano_Base: '1d4',
      Dano_Tipo: 'Corte',
      Critico: '19',
      Alcance: 'Curto (Arremesso)'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Gancho de Carne',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Gancho metálico. Se amarrado a uma corda/corrente, aumenta o alcance para 4,5m e ocupa 2 espaços.',
    stats: {
      Dano_Base: '1d4',
      Dano_Tipo: 'Perfuração',
      Critico: 'x4',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Lança',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Pode ser arremessada.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Perfuração',
      Critico: 'x2',
      Alcance: 'Curto (Arremesso)'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Machete',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Lâmina longa.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Corte',
      Critico: '19',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Martelo',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Ferramenta comum.',
    stats: {
      Dano_Base: '1d4',
      Dano_Tipo: 'Impacto',
      Critico: 'x3',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Picareta',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Ferramenta de mineração. Dano com alto multiplicador de crítico.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Perfuração',
      Critico: 'x4',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Punhal',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Arma Ágil. Faca de lâmina longa e pontiaguda.',
    stats: {
      Dano_Base: '1d4',
      Dano_Tipo: 'Perfuração',
      Critico: '19',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  // Armas Simples de Disparo
  {
    nome: 'Arco',
    categoria: 0,
    espaco: 2,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Arma de Disparo de Duas Mãos. Usa Flechas.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Perfuração',
      Critico: 'x3',
      Alcance: 'Médio'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Besta',
    categoria: 0,
    espaco: 2,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Arma de Disparo de Duas Mãos. Recarregar exige uma ação de movimento. Usa Flechas.',
    stats: {
      Dano_Base: '1d8',
      Dano_Tipo: 'Perfuração',
      Critico: '19',
      Alcance: 'Médio'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Estilingue',
    categoria: 0,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Arma de Disparo de Duas Mãos. Permite aplicar valor de Força nas rolagens de dano. Usa projéteis reaproveitáveis (Bolinhas).',
    stats: {
      Dano_Base: '1d4',
      Dano_Tipo: 'Perfuração',
      Critico: 'x2',
      Alcance: 'Curto'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  // Armas Simples de Fogo
  {
    nome: 'Pistola',
    categoria: 1,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Arma de Fogo de Uma Mão. Usa Balas Curtas.',
    stats: {
      Dano_Base: '1d12',
      Dano_Tipo: 'Balístico',
      Critico: '18',
      Alcance: 'Curto'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Revólver',
    categoria: 1,
    espaco: 1,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Arma de Fogo de Uma Mão. Usa Balas Curtas.',
    stats: {
      Dano_Base: '2d6',
      Dano_Tipo: 'Balístico',
      Critico: '19/x3',
      Alcance: 'Curto'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Fuzil de Caça',
    categoria: 1,
    espaco: 2,
    tipo: 'Simples',
    proficiencia: 'Armas Simples',
    descricao: 'Arma de Fogo de Duas Mãos. Usa Balas Longas.',
    stats: {
      Dano_Base: '2d8',
      Dano_Tipo: 'Balístico',
      Critico: '19/x3',
      Alcance: 'Médio'
    },
    livro: 'Ordem Paranormal RPG'
  },

  // ===================================================================
  // ARMAS TÁTICAS (Proficiência: Armas Táticas)
  // Inclui Armas Táticas Categoria 0, I, II e III
  // ===================================================================
  // Armas Táticas Corpo a Corpo
  {
    nome: 'Machadinha',
    categoria: 0,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Pode ser arremessada.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Corte',
      Critico: 'x3',
      Alcance: 'Curto (Arremesso)'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Nunchaku',
    categoria: 0,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma Ágil.',
    stats: {
      Dano_Base: '1d8',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Bastão Policial',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma Ágil. Quando usa Esquiva com esta arma, o bônus na Defesa aumenta em +1.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Curto'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Corrente',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Fornece +2 em testes para desarmar e derrubar.',
    stats: {
      Dano_Base: '2d4',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Espada',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Pode ser empunhada com uma mão (1d8) ou duas (1d10).',
    stats: {
      Dano_Base: '1d8/1d10',
      Dano_Tipo: 'Corte',
      Critico: '19',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Faca Tática',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma Ágil. Se usada em Contra-ataque, fornece +2 no teste. Pode ser sacrificada (2 PE) em Bloqueio para +20 RD. Pode ser arremessada.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Corte',
      Critico: '19',
      Alcance: 'Curto (Arremesso)'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Florete',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma Ágil.',
    stats: {
      Dano_Base: '1d6',
      Dano_Tipo: 'Corte',
      Critico: '18',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Machado',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Ferramenta de lenhadores ou bombeiros.',
    stats: {
      Dano_Base: '1d8',
      Dano_Tipo: 'Corte',
      Critico: 'x3',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Maça',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Bastão com cabeça metálica.',
    stats: {
      Dano_Base: '2d4',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Acha',
    categoria: 1,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Machado grande (Duas Mãos).',
    stats: {
      Dano_Base: '1d12',
      Dano_Tipo: 'Corte',
      Critico: 'x3',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Gadanho',
    categoria: 1,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Ferramenta agrícola (Duas Mãos).',
    stats: {
      Dano_Base: '2d4',
      Dano_Tipo: 'Corte',
      Critico: 'x4',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Katana',
    categoria: 1,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma Ágil. Espada longa e curva (Duas Mãos). Se Veterano em Luta, pode usar com uma mão.',
    stats: {
      Dano_Base: '1d10',
      Dano_Tipo: 'Corte',
      Critico: '19',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Marreta',
    categoria: 1,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Usada para demolição (Duas Mãos).',
    stats: {
      Dano_Base: '3d4',
      Dano_Tipo: 'Impacto',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Montante',
    categoria: 1,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Espada enorme e pesada (Duas Mãos).',
    stats: {
      Dano_Base: '2d6',
      Dano_Tipo: 'Corte',
      Critico: '19',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Motosserra',
    categoria: 1,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Causa dano adicional ao rolar 6 no dado de dano. Impõe –O no teste de ataque. Ligar exige ação de movimento (Duas Mãos).',
    stats: {
      Dano_Base: '3d6',
      Dano_Tipo: 'Perfuração',
      Critico: 'x2',
      Alcance: 'Corpo a Corpo'
    },
    livro: 'Ordem Paranormal RPG'
  },

  // Armas Táticas de Disparo
  {
    nome: 'Shuriken',
    categoria: 1,
    espaco: 0.5,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Arremesso. Se Veterano em Pontaria, pode gastar 1 PE para ataque adicional contra o mesmo alvo uma vez por rodada. Pacote dura 2 cenas.',
    stats: {
      Dano_Base: '1d4',
      Dano_Tipo: 'Perfuração',
      Critico: 'x2',
      Alcance: 'Curto'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Arco Composto',
    categoria: 1,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Disparo de Duas Mãos. Aplica valor de Força nas rolagens de dano. Usa Flechas.',
    stats: {
      Dano_Base: '1d10',
      Dano_Tipo: 'Perfuração',
      Critico: 'x3',
      Alcance: 'Médio'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Balestra',
    categoria: 1,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Disparo de Duas Mãos. Exige ação de movimento para recarregar a cada disparo. Usa Flechas.',
    stats: {
      Dano_Base: '1d12',
      Dano_Tipo: 'Perfuração',
      Critico: '19',
      Alcance: 'Médio'
    },
    livro: 'Ordem Paranormal RPG'
  },
  // Armas Táticas de Fogo (Leves/Uma Mão)
  {
    nome: 'Pistola Pesada',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Fogo de Uma Mão. Impõe –O em testes de ataque; empunhá-la com duas mãos anula a penalidade. Usa Balas Curtas.',
    stats: {
      Dano_Base: '2d8',
      Dano_Tipo: 'Balístico',
      Critico: '18',
      Alcance: 'Curto'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Revólver Compacto',
    categoria: 1,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Fogo de Uma Mão. Se treinado em Crime, ocupa 0 espaço. Usa Balas Curtas.',
    stats: {
      Dano_Base: '2d4',
      Dano_Tipo: 'Perfuração',
      Critico: '19/x3',
      Alcance: 'Curto'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Submetralhadora',
    categoria: 2,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Fogo Automática (Duas Mãos). Usa Balas Curtas.',
    stats: {
      Dano_Base: '2d10',
      Dano_Tipo: 'Balístico',
      Critico: '19/x3',
      Alcance: 'Curto'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Pregador Pneumático',
    categoria: 2,
    espaco: 1,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Ferramenta que conta como Arma de Fogo para efeitos de poderes. Usa pregos (munição para uma missão).',
    stats: {
      Dano_Base: '4d6',
      Dano_Tipo: 'Balístico',
      Critico: 'x3',
      Alcance: 'Curto'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  // Armas Táticas de Fogo (Duas Mãos)
  {
    nome: 'Espingarda',
    categoria: 2,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Fogo de Duas Mãos. Causa metade do dano em alcance médio ou maior. Usa Cartuchos.',
    stats: {
      Dano_Base: '4d6',
      Dano_Tipo: 'Balístico',
      Critico: 'x3',
      Alcance: 'Curto'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Espingarda de Cano Duplo',
    categoria: 2,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Fogo de Duas Mãos. Recarregar exige ação de movimento após 2 disparos. Pode disparar os dois canos no mesmo alvo (sofre –O no ataque, dano aumenta para 6d6). Usa Cartuchos.',
    stats: {
      Dano_Base: '4d6',
      Dano_Tipo: 'Balístico',
      Critico: 'x3',
      Alcance: 'Curto'
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Fuzil de Assalto',
    categoria: 3,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Fogo Automática (Duas Mãos). Usa Balas Longas.',
    stats: {
      Dano_Base: '2d8',
      Dano_Tipo: 'Balístico',
      Critico: '19/x3',
      Alcance: 'Médio'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Fuzil de Precisão',
    categoria: 3,
    espaco: 2,
    tipo: 'Tática',
    proficiencia: 'Armas Táticas',
    descricao: 'Arma de Fogo de Duas Mãos. Se Veterano em Pontaria e usar a ação Mirar, recebe +5 na margem de ameaça. Usa Balas Longas.',
    stats: {
      Dano_Base: '2d10',
      Dano_Tipo: 'Balístico',
      Critico: '19/x3',
      Alcance: 'Longo'
    },
    livro: 'Ordem Paranormal RPG'
  },

  // ===================================================================
  // ARMAS PESADAS (Proficiência: Armas Pesadas)
  // ===================================================================
  {
    nome: 'Bazuca',
    categoria: 3,
    espaco: 2,
    tipo: 'Pesada',
    proficiencia: 'Armas Pesadas',
    descricao: 'Arma de Fogo de Duas Mãos. Causa dano no alvo e em todos os seres num raio de 3m (Reflexos DT Agi reduz à metade). Recarregar exige uma ação de movimento. Usa Foguete (1e).',
    stats: {
      Dano_Base: '10d8',
      Dano_Tipo: 'Fogo',
      Critico: 'x2',
      Alcance: 'Médio'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Lança-chamas',
    categoria: 3,
    espaco: 2,
    tipo: 'Pesada',
    proficiencia: 'Armas Pesadas',
    descricao: 'Arma de Fogo de Duas Mãos. Atinge todos os seres em uma linha de 1,5m de largura em alcance Curto e causa a condição Em Chamas. Usa Combustível.',
    stats: {
      Dano_Base: '6d6',
      Dano_Tipo: 'Fogo',
      Critico: 'x2',
      Alcance: 'Curto'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Metralhadora',
    categoria: 3,
    espaco: 2,
    tipo: 'Pesada',
    proficiencia: 'Armas Pesadas',
    descricao: 'Arma de Fogo Automática (Duas Mãos). Requer Força 4+ ou ação de movimento para apoiar (senão sofre –5 no ataque). Usa Balas Longas.',
    stats: {
      Dano_Base: '2d12',
      Dano_Tipo: 'Balístico',
      Critico: '19/x3',
      Alcance: 'Longo'
    },
    livro: 'Ordem Paranormal RPG'
  },

  // ===================================================================
  // ITENS MUNIÇÃO (Não são armas, mas necessários para o gerenciador)
  // ===================================================================
  {
    nome: 'Balas curtas (Pacote)',
    categoria: 0,
    espaco: 1,
    tipo: 'Munição',
    proficiencia: 'N/A',
    descricao: 'Munição para pistolas, revólveres e submetralhadoras. Dura duas cenas.',
    stats: {
      Dano_Base: '—',
      Dano_Tipo: '—',
      Critico: '—',
      Alcance: '—'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Balas longas (Pacote)',
    categoria: 1,
    espaco: 1,
    tipo: 'Munição',
    proficiencia: 'N/A',
    descricao: 'Munição para fuzis e metralhadoras. Dura uma cena.',
    stats: {
      Dano_Base: '—',
      Dano_Tipo: '—',
      Critico: '—',
      Alcance: '—'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Cartuchos (Pacote)',
    categoria: 1,
    espaco: 1,
    tipo: 'Munição',
    proficiencia: 'N/A',
    descricao: 'Munição para espingardas. Dura uma cena.',
    stats: {
      Dano_Base: '—',
      Dano_Tipo: '—',
      Critico: '—',
      Alcance: '—'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Flechas (Pacote)',
    categoria: 0,
    espaco: 1,
    tipo: 'Munição',
    proficiencia: 'N/A',
    descricao: 'Munição para arcos e bestas. Dura uma missão inteira (reaproveitável).',
    stats: {
      Dano_Base: '—',
      Dano_Tipo: '—',
      Critico: '—',
      Alcance: '—'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Combustível (Tanque)',
    categoria: 1,
    espaco: 1,
    tipo: 'Munição',
    proficiencia: 'N/A',
    descricao: 'Munição para lança-chamas. Dura uma cena.',
    stats: {
      Dano_Base: '—',
      Dano_Tipo: '—',
      Critico: '—',
      Alcance: '—'
    },
    livro: 'Ordem Paranormal RPG'
  },
  {
    nome: 'Foguete (Unidade)',
    categoria: 1,
    espaco: 1,
    tipo: 'Munição',
    proficiencia: 'N/A',
    descricao: 'Munição para bazucas. Dura um único disparo.',
    stats: {
      Dano_Base: '—',
      Dano_Tipo: '—',
      Critico: '—',
      Alcance: '—'
    },
    livro: 'Ordem Paranormal RPG'
  }
];