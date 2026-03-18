'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, LanguageType } from '@/data/translations';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: keyof typeof translations['EN']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageType>('EN');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as LanguageType;
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0].toUpperCase() as LanguageType;
      if (translations[browserLang]) {
        setLanguageState(browserLang);
      }
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: keyof typeof translations['EN']): string => {
    return translations[language][key] || translations['EN'][key] || key;
  };

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
