////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
////////////////////////////////////////////////////////////////////////////////
import LoginPage from '../../routes/LoginPage';
import Homepage from '../../routes/Homepage';
import NotFoundPage from '../../routes/NotFoundPage';
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService';
////////////////////////////////////////////////////////////////////////////////
import PublicOnlyRoute from '../../utils/PublicOnlyRoute';
////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasLogin: TokenService.hasAuthToken()
    }
  };

  checkforLogin = () => {
    this.setState({
      hasLogin: TokenService.hasAuthToken()
    })
  };

  render() {
    return (
      <>
        <header className='app'>
          <Navigation checkForLogin={this.checkForLogin} hasLogin={this.state.hasLogin} />
        </header>

        <main>
          <Switch>
            <Route
              exact
              path={'/'}
              component={Homepage}
            />

            <PublicOnlyRoute
              path={'/login'}
              render={(props) => <LoginPage {...props} checkForLogin={this.checkForLogin}/>}
            />

            <Route 
              component={NotFoundPage}
            />
          </Switch>
        </main>

        <div>
          <Footer />
        </div>
      </>
    )
  }
}

export default App;