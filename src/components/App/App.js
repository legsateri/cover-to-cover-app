import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import ClubList from '../../routes/ClubList'
import Login from '../../routes/Login'
import NotFound from '../../routes/NotFound'
import Footer from '../Footer/Footer'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <>
        <Navigation />

        <main>
          {this.state.hasError && <p>Oh no! Something is wonky...</p>}

          <Switch>
            <Route 
              exact
              path={'/clubs'}
              component={ClubList}
            />

            <PublicOnlyRoute 
              path={'/login'}
              component={Login}
            />

            <Route 
              component={NotFound}
            />
          </Switch>
        </main>

        <Footer />
      </>
    )
  }
}

export default App;            