import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, StyleReset } from 'atomize'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import 'react-quill/dist/quill.snow.css'

const debug =
  process.env.NODE_ENV === 'production' ? undefined : new DebugEngine()

// 1. Create a client engine instance
const engine = new Styletron()

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
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <App />
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
