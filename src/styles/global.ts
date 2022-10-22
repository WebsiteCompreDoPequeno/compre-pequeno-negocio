import { createGlobalStyle } from 'styled-components'
import * as GlobalConstants from './global.constants'

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${GlobalConstants.gray};
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    body {
      font-family: 'Poppins', sans-serif;
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }
    border-style, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }
    button {
      cursor: pointer;
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
export default GlobalStyle
