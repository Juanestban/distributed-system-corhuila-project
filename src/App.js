import React from 'react'
import favicon from './favicon.ico'

const App = () => {
  console.log('hello, anothers')

  return (
    <div className="header-app">
      <h1 className="app">welcome to React-App with Webpack</h1>
      <img src={favicon} width={200} height={200} alt="" />
      <h2 className="app">otro cambio Rapidoooo</h2>
    </div>
  )
}

export default App
