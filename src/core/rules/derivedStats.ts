import { Atributos, ClasseName } from '../types';
import { CLASSES } from '../../data/classes';

export interface DerivedStats {
  pvMax: number;
  peMax: number;
  sanMax: number;
  pdMax: number;
}

export function calculateDerivedStats(
  classe: ClasseName,
  atributos: Atributos,
  nex: number,
  estagio: number = 1
): DerivedStats {
  const stats = CLASSES[classe];
  
  let nivel = Math.floor(nex / 5);
  if (nivel < 1) nivel = 1;
  
  const growthSteps = Math.max(0, nivel - 1);

  let basePD = 4;
  if (classe === 'Combatente') basePD = 6;
  if (classe === 'Especialista') basePD = 5;
  
  const pdMax = basePD + atributos.PRE;


  if (classe === 'Sobrevivente') {
    const survivorGrowth = Math.max(0, estagio - 1);
    
    return {
      pvMax: stats.pvInicial + atributos.VIG + (survivorGrowth * (stats.pvPorNivel + atributos.VIG)),
      peMax: stats.peInicial + atributos.PRE + (survivorGrowth * (stats.pePorNivel + atributos.PRE)),
      sanMax: stats.sanInicial + (survivorGrowth * stats.sanPorNivel),
      pdMax: 4 + atributos.PRE
    };
  }

  return {
    pvMax: stats.pvInicial + atributos.VIG + (growthSteps * (stats.pvPorNivel + atributos.VIG)),
    peMax: stats.peInicial + atributos.PRE + (growthSteps * (stats.pePorNivel + atributos.PRE)),
    sanMax: stats.sanInicial + (growthSteps * stats.sanPorNivel),
    pdMax: pdMax
  };
}
