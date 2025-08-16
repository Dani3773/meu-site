import { create } from 'zustand';

interface LanguageState {
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: 'en', // Idioma padrão
  setLanguage: (language) => set({ currentLanguage: language }),
}));

export default useLanguageStore;
