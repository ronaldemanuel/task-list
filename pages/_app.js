import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(238.98deg, 
      #29B6D6 7.53%, 
      rgba(39, 204, 165, 0.8) 33.7%, 
      #207B95 78.89%, 
      #16034F 98.87%);
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }
`

const theme = {
  colors: {
    main: '#44B0B7',
    card: '#fff',
    goodGreen: '#00B876',
    badRed: '#B80000',
    niceBlue: '#0A3588',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
