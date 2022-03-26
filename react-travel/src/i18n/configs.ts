import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'

import translationEN from './en.json'
import translationZH from './zh.json'
import translationJA from './ja.json'

export type Language = 'en' | 'zh' | 'ja'

const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  },
  ja: {
    translation: translationJA
  }
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
