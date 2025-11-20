import { Item } from '../core/types';

export const ITENS: Item[] = [
  // ===================================================================
  // ITENS AMALDIÇOADOS (SOBREVIVENDO AO HORROR)
  // Nota: A categoria II é a mais comum para itens amaldiçoados especiais.
  // ===================================================================
  {
    nome: 'Medidor de Condição Vertebral',
    categoria: 2, // Categoria II,
    espaco: 1, // 1 espaço,
    tipo: 'Amaldiçoado',
    descricao: 'Este item é uma coluna vertebral sustentada por Lodo de Morte e revestida com cabos e fios de Energia. Para ser usado, deve ser conectado à coluna vertebral (ação completa, deixando o usuário atordoado por 1 rodada). Conta como uma vestimenta que fornece +2 em Fortitude. Se ilumina em cores indicando a saúde (verde = melhor) e emitirá pulsos de luz lilás se o usuário estiver sob um efeito paranormal,. Fornece um bônus de +5 em testes de Medicina feitos para auxiliar o usuário.',
    stats: {
      resistencia: 2 // Bônus em Fortitude
    },
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Pé de Morto',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado',
    descricao: 'Botas costuradas com pele de cadáveres amaldiçoados pela Morte. Você recebe +5 em Furtividade e, em cenas de furtividade, qualquer ação chamativa que envolva apenas se mover (correr ou saltar) aumenta a visibilidade em apenas +1.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Pen Drive Selado',
    categoria: 2, // Categoria II,
    espaco: 0.5, // 0,5 espaço,
    tipo: 'Amaldiçoado',
    descricao: 'Gravado com sigilos dourados de Conhecimento, o pen drive não pode ser invadido ou afetado por rituais, seres e efeitos de Energia,. Permite invadir outros dispositivos sem ser contaminado pela entidade.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Valete da Salvação',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Amaldiçoado',
    descricao: 'Carta de baralho (valete de ouros) coberta com sigilos de Conhecimento. Para usá-la, você deve gastar uma ação padrão para atirá-la ao ar. Ela voa em alcance médio, apontando para a melhor rota de fuga. Consumível (deixa de existir após o uso). Se usada em uma cena de perseguição, você é bem-sucedido em uma ação de cortar caminho.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Lente de Revelação',
    categoria: 1, // Modificação aumenta a categoria em I, categoria base do acessório não é clara, mas listada como Cat I na tabela.
    espaco: 1, // Ocupa o espaço da câmera.
    tipo: 'Modificação Paranormal (Acessório)',
    descricao: 'Modificação para câmeras de aura paranormal. Permite ver seres invisíveis e incorpóreos e ignorar a camuflagem deles. Ação padrão + 1 PE: fotografa criatura em alcance curto. Até o fim da cena, a criatura perde camuflagem e invisibilidade e se torna corpórea (Vontade DT Presença evita).',
    livro: 'Sobrevivendo ao Horror'
  },
  // ITENS AMALDIÇOADOS ADICIONAIS (SaH)
  {
    nome: 'Conector de Membros',
    categoria: 3, // Categoria III
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Sangue)',
    descricao: 'Reconecta braço, perna ou cabeça decepados em até três rodadas, usando uma ação padrão. Remove as condições morrendo ou morto, mas deixa o alvo inconsciente com 1 PV. Se removido, a parte é decepada novamente.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Ligação Direta Infernal',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Sangue/Energia)',
    descricao: 'Amontoado de fios de cobre contaminados com Sangue e Energia. Ação completa: usa para ligar um veículo automaticamente, que recebe RD 20 (cumulativa) e imunidade a Sangue. Você recebe +5 em testes de Pilotagem, mas falhas são amplificadas pelo mestre,.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Mandíbula Agonizante',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Sangue)',
    descricao: 'Parte inferior de um crânio que emite sons perturbadores. Ação padrão: pressiona e arremessa em alcance médio. Grita muito alto, acobertando outros sons em um raio de 30m até o fim da cena. Atrai criaturas de Sangue (Vontade DT 35 evita ir até ela).',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Retalho Tenebroso',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Sangue)',
    descricao: 'Pedaço de carne que atua como máscara. Ação padrão: aplica no rosto. Recebe faro e visão no escuro, mas sofre vulnerabilidade a Morte e –2O em testes de perícias para interação social,. Recebe +1 em rolagens de dano cumulativo por dia. Ao final de cada dia, perde 1d6 PV (Fortitude DT 15 +5 por teste),.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Ampulheta do Tempo Sofrido',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Morte)',
    descricao: 'Gasta 5 PE (empunhando) para receber imediatamente os benefícios de uma ação de interlúdio. Só pode ser usada novamente após outra ação de interlúdio para devolver o tempo.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Injeção de Lodo',
    categoria: 2, // Categoria II
    espaco: 0.5, // 0,5 espaço
    tipo: 'Amaldiçoado (Morte)',
    descricao: 'Seringa preenchida com Lodo da Morte. Ação padrão: injeta em ser voluntário/você. Alvo recebe vulnerabilidade a dano balístico e de Energia até o fim da cena, mas na próxima vez que for reduzido a 0 PV, fica com 1 PV,.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Rádio Chiador',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Morte)',
    descricao: 'Emite um chiado perturbador e constante. Causa 1d6 Morte em criaturas com invisibilidade, incorporeidade ou camuflagem.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Enxame Fantasmagórico',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Conhecimento)',
    descricao: 'Manto de traças e mariposas esbranquiçadas. Enquanto vestido, deixa o usuário invisível. Contudo, o usuário sofre 1 ponto de dano mental no início de cada um de seus turnos (ignora resistência),.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Repositório do Fracasso',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Conhecimento)',
    descricao: 'Pequena caixinha de madeira. Recebe 1 carga (máximo 6) para cada resultado 1 em d20 de criatura paranormal em alcance médio. 1x/rodada: consome 1 carga para recuperar 1d4 PE, mas sofre –1 em Vontade cumulativo até o próximo interlúdio.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Tábula do Saber Custoso',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Conhecimento)',
    descricao: 'Tábula marcada com sigilos. Empunhando: pode receber os benefícios de ser treinado em uma perícia por um único teste. Perde Sanidade igual ao atributo-chave da perícia.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Espelho Refletor',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Amaldiçoado (Energia)',
    descricao: 'Placa metálica. Usado para se separar em nível energético (perdendo metade dos atributos e recuperando no interlúdio).',
    livro: 'Sobrevivendo ao Horror'
  },
  // ITENS GERAIS (SOBREVIVENDO AO HORROR)
  {
    nome: 'Amuleto Sagrado',
    categoria: 0, // Categoria 0
    espaco: 1, // 1 espaço
    tipo: 'Geral (Acessório)',
    descricao: 'Ocupa o espaço de um item vestido. Fornece +2 em Religião e Vontade.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Notebook',
    categoria: 0, // Categoria 0
    espaco: 2, // 2 espaços
    tipo: 'Geral (Utensílio)',
    descricao: 'Fornece +2 em testes de perícia que envolvem adquirir informações (com internet). Ao relaxar em cenas de interlúdio, recupera 1 ponto adicional de Sanidade.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Antibiótico',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Medicamento)',
    descricao: 'Fornece +5 no próximo teste de Fortitude contra efeitos de uma doença feito até o fim do dia.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Antídoto',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Medicamento)',
    descricao: 'Fornece +5 no próximo teste de Fortitude contra efeitos de um veneno até o fim do dia. Antídoto específico remove completamente o veneno,.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Antiemético',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Medicamento)',
    descricao: 'Remove a condição enjoado e fornece +5 em testes para evitar essa condição até o fim da cena.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Anti-inflamatório',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Medicamento)',
    descricao: 'Fornece 1d8+2 PV temporários.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Antitérmico',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Medicamento)',
    descricao: 'Permite um novo teste contra uma condição mental que o usuário esteja sofrendo (só funciona 1x por cena).',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Broncodilatador',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Medicamento)',
    descricao: 'Fornece +5 em testes para evitar as condições asfixiado ou fatigado feitos até o fim do dia.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Coagulante',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Medicamento)',
    descricao: 'Fornece +5 em testes para se estabilizar da condição sangrando. Se usado com Medicina, +5 no teste para remover a condição morrendo,.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Granada de PEM',
    categoria: 1, // Categoria I
    espaco: 1, // 1 espaço
    tipo: 'Explosivo',
    descricao: 'Emite pulso eletromagnético que desativa todos os equipamentos elétricos em um raio de 18m até o fim da cena. Criaturas de Energia na área sofrem 6d6 impacto e ficam paralisadas por 1 rodada (Fortitude DT Agi reduz/evita).',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Alimento Energético',
    categoria: 1, // Categoria I
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Operacional)',
    descricao: 'Pode gastar uma ação padrão para consumir e recuperar 1d4 PE.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Coldre Saque Rápido',
    categoria: 0, // Categoria 0
    espaco: 1, // 1 espaço
    tipo: 'Geral (Operacional)',
    descricao: 'Uma vez por rodada, você pode sacar ou guardar uma arma de fogo leve como uma ação livre.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Braçadeiras de Bloqueio',
    categoria: 1, // Categoria I
    espaco: 1, // 1 espaço
    tipo: 'Geral (Operacional)',
    descricao: 'Aumentam em +2 a RD que você recebe por usar um bloqueio.',
    livro: 'Sobrevivendo ao Horror'
  },
  {
    nome: 'Isqueiro',
    categoria: 0, // Categoria 0
    espaco: 0.5, // 0,5 espaço
    tipo: 'Geral (Operacional)',
    descricao: 'Ação de movimento: produz uma pequena chama (3m de raio),.',
    livro: 'Sobrevivendo ao Horror'
  },

  // ITENS GERAIS (REGRAS BÁSICAS)
  {
    nome: 'Kit de Perícia',
    categoria: 0, // Categoria 0
    espaco: 1, // 1 espaço
    tipo: 'Geral (Acessório)',
    descricao: 'Necessário para algumas perícias. Sem o kit, você sofre –5 no teste.',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Utensílio',
    categoria: 1, // Categoria I
    espaco: 1, // 1 espaço
    tipo: 'Geral (Acessório)',
    descricao: 'Um item comum (canivete, smartphone, etc.) que fornece +2 em uma perícia (exceto Luta e Pontaria).',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Vestimenta',
    categoria: 1, // Categoria I
    espaco: 1, // 1 espaço
    tipo: 'Geral (Acessório)',
    descricao: 'Roupa ou item com benefício. Permite um máximo de quatro itens vestidos,.',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Cicatrizante',
    categoria: 0, // Categoria 0
    espaco: 1, // 1 espaço
    tipo: 'Geral (Operacional)',
    descricao: 'Ação padrão: cura 2d8+2 PV em você ou em ser adjacente.',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Granada de Atordoamento',
    categoria: 1, // Categoria I
    espaco: 1, // 1 espaço
    tipo: 'Explosivo',
    descricao: 'Cria estouro e luz. Seres na área ficam atordoados por 1 rodada (Fortitude DT Agi reduz para ofuscado e surdo).',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Granada de Fragmentação',
    categoria: 0, // Categoria 0
    espaco: 1, // 1 espaço
    tipo: 'Explosivo',
    descricao: 'Espalha fragmentos. Seres na área sofrem 8d6 perfuração (Reflexos DT Agi reduz à metade).',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Mina Antipessoal',
    categoria: 1, // Categoria I
    espaco: 2, // 2 espaços
    tipo: 'Explosivo',
    descricao: 'Ativada por controle remoto. Dispara bolas de aço em cone de 6m, causando 12d6 perfuração (Reflexos DT Int reduz à metade).',
    livro: 'Regras Básicas'
  },
  // ITENS PARANORMAIS (REGRAS BÁSICAS)
  {
    nome: 'Amarras de (Elemento)',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Paranormal',
    descricao: 'Prepara para imobilizar criaturas vulneráveis ao elemento. Laçar (ação padrão, 2 PE): paralisa criatura (Vontade DT Agi repete no próximo turno).',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Câmera de Aura Paranormal',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Paranormal',
    descricao: 'Tirar uma foto (ação padrão, 1 PE) revela auras paranormais em pessoas e objetos (cores associadas ao elemento).',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Componentes Ritualísticos de (Elemento)',
    categoria: 0, // Categoria 0
    espaco: 1, // 1 espaço
    tipo: 'Paranormal',
    descricao: 'Conjunto de objetos necessários para a conjuração de rituais do elemento em questão.',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Emissor de Pulsos Paranormais',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Paranormal',
    descricao: 'Ação completa + 1 PE: emite pulso de elemento escolhido. Atrai criaturas do mesmo elemento e afasta criaturas do elemento oposto (Vontade DT Pre evita).',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Escuta de Ruídos Paranormais',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Paranormal',
    descricao: 'Ação completa + 2 PE: grava ruídos paranormais (até 24h). Ouvir a escuta fornece +5 em testes de Ocultismo para identificar criatura.',
    livro: 'Regras Básicas'
  },
  {
    nome: 'Scanner de Manifestação Paranormal de (Elemento)',
    categoria: 2, // Categoria II
    espaco: 1, // 1 espaço
    tipo: 'Paranormal',
    descricao: 'Ação padrão, 1 PE/rodada: revela a direção de todas as manifestações paranormais ativas do elemento escolhido em alcance longo.',
    livro: 'Regras Básicas'
  }
];