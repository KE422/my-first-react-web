import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
  secondaryColor: '#949494',
  highlight: '#ffabbf',
  border: '#e5e5e5',
}

export const darkTheme = {
  body: '#1c1c1c',
  fontColor: '#fff',
  secondaryColor: '#cacaca',
  highlight: '#ffabbf',
  border: '#383838',
}

export const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.body};
    button:focus {
      outline: 0;
    }
    input:focus {
      outline: 0;
    }
    textarea:focus {
      outline: 0;
    }
  }
`
