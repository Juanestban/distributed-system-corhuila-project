import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { useToken } from './hooks'
import { HomePage, LoginPage } from './pages'
import { Navbar } from './components/Molecules'

export default function App() {
  const { token } = useToken()

  return (
    <div className="container-app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to={token ? '/home' : '/login'} />
          </Route>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="*" component={() => <h1>Not Found</h1>} />
        </Switch>
      </Router>
    </div>
  )
}
