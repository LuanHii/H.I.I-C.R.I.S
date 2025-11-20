import { useCallback, useEffect, useState } from 'react';
import { Ameaca } from '../types';

export interface MonsterRegistro {
  id: string;
  ameaca: Ameaca;
  atualizadoEm: string;
}

const STORAGE_KEY = 'monstros-customizados';
const LIMITE_MONSTROS = 50;

function lerMonstros(): MonsterRegistro[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (err) {
    console.error('Erro ao ler monstros locais', err);
    return [];
  }
}

function gravarMonstros(monstros: MonsterRegistro[]) {
  if (typeof window === 'undefined') return;
  try {
    const payload = JSON.stringify(monstros.slice(0, LIMITE_MONSTROS));
    window.localStorage.setItem(STORAGE_KEY, payload);
  } catch (err) {
    console.error('Erro ao salvar monstros locais', err);
  }
}

export function useStoredMonsters() {
  const [monstros, setMonstros] = useState<MonsterRegistro[]>([]);

  useEffect(() => {
    setMonstros(lerMonstros());
  }, []);

  const salvar = useCallback((ameaca: Ameaca, id?: string) => {
    setMonstros((prev) => {
      const monsterId = id ?? crypto.randomUUID();
      const registro: MonsterRegistro = {
        id: monsterId,
        ameaca,
        atualizadoEm: new Date().toISOString(),
      };
      const existentes = prev.filter((m) => m.id !== monsterId);
      const atualizados = [registro, ...existentes];
      gravarMonstros(atualizados);
      return atualizados;
    });
  }, []);

  const remover = useCallback((id: string) => {
    setMonstros((prev) => {
      const filtradas = prev.filter((m) => m.id !== id);
      gravarMonstros(filtradas);
      return filtradas;
    });
  }, []);

  return {
    monstros,
    salvar,
    remover,
  };
}
