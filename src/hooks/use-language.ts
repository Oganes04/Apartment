'use client';

import { atom, useAtom } from 'jotai';

// Возможные варианты языков, например, 'ru' и 'en'
const LANGUAGE_OPTIONS = {
  RU: 'ru',
  EN: 'en',
};

// 1. Создаем атом для хранения текущего языка с поддержкой работы в изоморфной среде (SSR)
const isomorphicLanguageAtom = atom(
  typeof window !== 'undefined'
    ? localStorage.getItem('isomorphic-language')
    : LANGUAGE_OPTIONS.EN // Язык по умолчанию - английский
);

// 2. Атом с персистентностью для сохранения выбранного языка в localStorage
const isomorphicLanguageAtomWithPersistence = atom(
  (get) => get(isomorphicLanguageAtom),
  (get, set, newLanguage: any) => {
    set(isomorphicLanguageAtom, newLanguage);
    localStorage.setItem('isomorphic-language', newLanguage);
  }
);

// 3. Хук для использования языка в приложении
export function useLanguage() {
  const [language, setLanguage] = useAtom(isomorphicLanguageAtomWithPersistence);
  return {
    language: language === null ? LANGUAGE_OPTIONS.EN : language, // Если язык не выбран, используем язык по умолчанию
    setLanguage,
  };
}
