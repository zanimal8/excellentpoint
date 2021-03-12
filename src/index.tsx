import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, StyleReset } from 'atomize'
import 'react-quill/dist/quill.snow.css'

const theme = {
  colors: {
    brand100: '#F9F8FC',
    brand200: '#F3F1FA',
    brand300: '#E9E6F6',
    brand400: '#D2CCEC',
    brand500: '#BCB3E2',
    brand600: '#9C8FD6',
    brand700: '#6F5CC3',
    brand800: '#553EB5',
    brand900: '#382683'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
