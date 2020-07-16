import App from 'App'
import theme from 'config/theme'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import { ThemeProvider } from 'styled-components/macro'

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  rootElement
)
