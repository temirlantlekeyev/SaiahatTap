import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'




const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка 
  .use(LanguageDetector)
  // модуль инициализации
  .use (initReactI18next)
  .init({
    // Стандартный язык
    fallbackLng: 'en',
    debug: true,
    // Распознавание и кэширование языковых кук
    detection: DETECTION_OPTIONS,
    interpolation: {
      escapeValue: false
    },
    
  })

export default i18n;