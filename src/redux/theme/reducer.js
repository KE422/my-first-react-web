import { TOGGLE_THEME_MODE } from './types'

const initialState = {
  theme: 'light',
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME_MODE:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
    default:
      return state
  }
}

export default themeReducer
