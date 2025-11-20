import { Personagem } from '../core/types';
import { condicoes } from '../data/conditions';

export function calcularDefesaEfetiva(personagem: Personagem): number {
  let defesa = personagem.defesa;
  
  if (personagem.efeitosAtivos) {
    personagem.efeitosAtivos.forEach(nome => {
      const condicao = condicoes.find(c => c.nome === nome);
      if (condicao?.efeito?.defesa) {
        defesa += condicao.efeito.defesa;
      }
    });
  }

  return defesa;
}

export function getPenalidadesPericia(personagem: Personagem, atributo: string): number {
  let penalidadeDados = 0;

  if (personagem.efeitosAtivos) {
    personagem.efeitosAtivos.forEach(nome => {
      const condicao = condicoes.find(c => c.nome === nome);
      if (condicao?.efeito?.pericias) {
        const { atributos, penalidadeDados: dados } = condicao.efeito.pericias;
        if (atributos && atributos.includes(atributo as any) && dados) {
          penalidadeDados += dados;
        }
      }
    });
  }

  return penalidadeDados;
}
