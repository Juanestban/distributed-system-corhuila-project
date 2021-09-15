import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './config/themes'
import AuthProvider from './contexts/AuthContext'
import App from './App'

import './index.css'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ChakraProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') console.clear()
  })
}
