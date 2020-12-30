import React from "react"
import "./App.css"
import favicon from "./favicon.ico"

const App = () => {
  return (
    <div className="header-app">
      <h1 className="app">welcome to React-App with Webpack</h1>
      <img src={favicon} width={200} height={200} alt="" />
    </div>
  )
}

export default App
