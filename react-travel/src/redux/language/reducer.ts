import i18n, { Language } from '../../i18n/configs'

interface LanguageState {
  language: Language
  languageList: { name: string; code: Language }[]
}

const defaultState: LanguageState = {
  language: <Language>i18n.language,
  languageList: [
    { name: 'English', code: 'en' },
    { name: '中文', code: 'zh' },
    { name: '日本語', code: 'ja' }
  ]
}

const languageReducer = (state = defaultState, action: unknown) => {
  return state
}

export default languageReducer
