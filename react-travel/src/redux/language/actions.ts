import { Language } from '../../i18n/configs'

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const ADD_LANGUAGE = 'ADD_LANGUAGE'

export type LanguageActionType = ChangeLanguageAction | AddLanguageAction

// Action: change language
interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE
  payload: Language
}

export const changeLanguageActionCreator = (language: Language): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  }
}

// Action: add new language
interface AddLanguageAction {
  type: typeof ADD_LANGUAGE
  payload: { name: string; code: string }
}

export const addLanguageActionCreator = (name: string, code: string): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code }
  }
}
