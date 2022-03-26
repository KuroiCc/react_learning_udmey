import i18n from 'i18next'

import { Language } from '../../i18n/configs'
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionType } from './actions'

interface LanguageState {
  language: Language
  languageList: { name: string; code: string }[]
}

const defaultState: LanguageState = {
  language: <Language>i18n.language,
  languageList: [
    { name: 'English', code: 'en' },
    { name: '中文', code: 'zh' },
    { name: '日本語', code: 'ja' }
  ]
}

const languageReducer = (state = defaultState, action: LanguageActionType) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return { ...state, languageList: [...state.languageList, action.payload] }
    default:
      return state
  }
}

export default languageReducer
