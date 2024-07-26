import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.whisper};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.17rem;
  }

  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
  }

  h1, h2, h3, h4, p, span {
    margin: 0;
  }
`

export default GlobalStyle
