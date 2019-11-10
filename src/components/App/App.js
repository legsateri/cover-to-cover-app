////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../Navigation/Navigation'
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import LoginPage from '../../routes/LoginPage'
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService';
////////////////////////////////////////////////////////////////////////////////
import PrivateRoute from '../../utils/PrivateRoute';
import PublicOnlyRoute from '../../utils/PublicOnlyRoute';
////////////////////////////////////////////////////////////////////////////////


class App extends Component {
  static contextType = ClubContext;

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
          <Navigation checkforLogin={this.checkforLogin} hasLogin={this.state.hasLogin} />
        </header>

        <main>
          <Switch>
            <Route 
              path={'/login'}
              render={(props) => <LoginPage {...props} checkForLogin={this.checkForLogin} />} 
            />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;