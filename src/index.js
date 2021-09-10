import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
  module.hot.addStatusHandler((status) => {
    console.log(status)
    if (status === 'check') console.clear()
  })
}
