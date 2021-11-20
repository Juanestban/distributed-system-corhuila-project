import { HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { useToken } from './hooks'
import { HomePage, LoginPage, RegisterPage, EditPage } from './pages'
import { Navbar } from './components/Molecules'
import { ShortenUrlProvider } from './contexts'

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
              <Route path="/edit/:idUrl" component={EditPage} />
              <Route exact path="/home">
                <ShortenUrlProvider>
                  <HomePage />
                </ShortenUrlProvider>
              </Route>
              <Route path="*" component={() => <h1>Not Found</h1>} />
            </Switch>
          </div>
        </Router>
      </HelmetProvider>
    </div>
  )
}
