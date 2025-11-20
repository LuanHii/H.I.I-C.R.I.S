import { db } from './config';
import { doc, setDoc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { Personagem } from '../types';

export const saveAgentToCloud = async (agentId: string, agentData: Personagem) => {
  try {
    await setDoc(doc(db, "agentes", agentId), agentData);
    console.log("Agente salvo na nuvem:", agentId);
  } catch (e) {
    console.error("Erro ao salvar agente na nuvem: ", e);
  }
};

export const updateAgentInCloud = async (agentId: string, updates: Partial<Personagem>) => {
    try {
        const agentRef = doc(db, "agentes", agentId);
        await updateDoc(agentRef, updates);
    } catch (e) {
        console.error("Erro ao atualizar agente: ", e);
    }
}

export const subscribeToAgent = (agentId: string, callback: (data: Personagem | null) => void) => {
    return onSnapshot(doc(db, "agentes", agentId), (doc) => {
        if (doc.exists()) {
            callback(doc.data() as Personagem);
        } else {
            callback(null);
        }
    });
};

export const getAgentFromCloud = async (agentId: string): Promise<Personagem | null> => {
    const docRef = doc(db, "agentes", agentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as Personagem;
    } else {
        return null;
    }
}
