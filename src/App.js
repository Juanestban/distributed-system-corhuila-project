import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { useToken } from './hooks'
import { HomePage, LoginPage, RegisterPage } from './pages'
import { Navbar } from './components/Molecules'

export default function App() {
  const { token } = useToken()

  return (
    <div className="container-root">
      <HelmetProvider>
        <Router>
          <Navbar />
          <div className="container-app">
            <Switch>
              <Route exact path="/">
                <Redirect to={token ? '/home' : '/login'} />
              </Route>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/home" component={HomePage} />
              <Route path="*" component={() => <h1>Not Found</h1>} />
            </Switch>
          </div>
        </Router>
      </HelmetProvider>
    </div>
  )
}
