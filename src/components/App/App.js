////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import LoginPage from '../../routes/LoginPage/LoginPage';
import CreateClubPage from '../../routes/CreateClubPage/CreateClubPage';
import Homepage from '../../routes/Homepage/Homepage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import ClubListPage from '../../routes/ClubListPage/ClubListPage';
import ClubPage from '../../routes/ClubPage/ClubPage';
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
              exact
              path={'/'}
              component={Homepage}
            />

            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />

            <PrivateRoute
              path={'/add-club'}
              component={CreateClubPage}
            />

            <PrivateRoute
              path={'/clubs'}
              component={ClubListPage}
            />

            <PrivateRoute
              path={'/clubs/:club_id'}
              component={ClubPage}
            />

            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>

        <Footer />
      </>
    )
  }
}

export default App;