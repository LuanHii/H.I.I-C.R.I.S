import { useCallback, useEffect, useMemo, useState } from 'react';
import { Personagem } from '../types';

export interface FichaRegistro {
  id: string;
  personagem: Personagem;
  atualizadoEm: string;
}

const STORAGE_KEY = 'fichas-origem';
const LIMITE_FICHAS = 50;

function lerFichas(): FichaRegistro[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const normalizados = parsed
      .map((entry) => normalizarRegistro(entry))
      .filter((registro): registro is FichaRegistro => Boolean(registro));
    return normalizados;
  } catch (err) {
    console.error('Erro ao ler fichas locais', err);
    return [];
  }
}

function normalizarRegistro(entrada: unknown): FichaRegistro | null {
  if (!entrada || typeof entrada !== 'object') return null;
  const registroPossivel = entrada as Partial<FichaRegistro>;
  if (registroPossivel.personagem) {
    return {
      id: registroPossivel.id ?? crypto.randomUUID(),
      personagem: registroPossivel.personagem,
      atualizadoEm: registroPossivel.atualizadoEm ?? new Date().toISOString(),
    };
  }

  const personagemPossivel = entrada as Personagem;
  if (personagemPossivel && typeof personagemPossivel === 'object' && 'classe' in personagemPossivel) {
    return {
      id: crypto.randomUUID(),
      personagem: personagemPossivel,
      atualizadoEm: new Date().toISOString(),
    };
  }

  return null;
}

function gravarFichas(fichas: FichaRegistro[]) {
  if (typeof window === 'undefined') return;
  try {
    const payload = JSON.stringify(fichas.slice(0, LIMITE_FICHAS));
    window.localStorage.setItem(STORAGE_KEY, payload);
  } catch (err) {
    console.error('Erro ao salvar fichas locais', err);
  }
}

export function useStoredFichas() {
  const [fichas, setFichas] = useState<FichaRegistro[]>([]);

  useEffect(() => {
    setFichas(lerFichas());
  }, []);

  const salvar = useCallback((personagem: Personagem, id?: string) => {
    setFichas((prev) => {
      const fichaId = id ?? personagem.nome ?? crypto.randomUUID();
      const registro: FichaRegistro = {
        id: fichaId,
        personagem,
        atualizadoEm: new Date().toISOString(),
      };
      const existentes = prev.filter((f) => f.id !== fichaId);
      const atualizadas = [registro, ...existentes];
      gravarFichas(atualizadas);
      return atualizadas;
    });
  }, []);

  const remover = useCallback((id: string) => {
    setFichas((prev) => {
      const filtradas = prev.filter((f) => f.id !== id);
      gravarFichas(filtradas);
      return filtradas;
    });
  }, []);

  const duplicar = useCallback((id: string) => {
    setFichas((prev) => {
      const alvo = prev.find((f) => f.id === id);
      if (!alvo) return prev;
      const novo: FichaRegistro = {
        id: crypto.randomUUID(),
        personagem: { ...alvo.personagem, nome: `${alvo.personagem.nome} (cópia)` },
        atualizadoEm: new Date().toISOString(),
      };
      const atualizadas = [novo, ...prev];
      gravarFichas(atualizadas);
      return atualizadas;
    });
  }, []);

  return useMemo(
    () => ({ fichas, salvar, remover, duplicar }),
    [fichas, salvar, remover, duplicar],
  );
}
