import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import config from '../../config'
import AppContext from '../../AppContext'

import Navigation from '../Navigation/Navigation'
import StartClubPage from '../StartClubPage/StartClubPage'
import Footer from '../Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clubs: [],
      bookComments: [],
      clubComments: [],
      promptsToAdd: {},
      bookCommentsToAdd: {},
      clubCommentsToAdd: {}
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/clubs`),
      fetch(`${config.API_ENDPOINT}/api/club-comments`),
      fetch(`${config.API_ENDPOINT}/api/book-comments`)
    ])
      .then(([clubs, bookComments, clubComments]) => {
        if (!clubs.ok) {
          return clubs.json().then(e => Promise.reject(e));
        }
        if (!bookComments.ok) {
          return bookComments.json().then(e => Promise.reject(e));
        }
        if (!clubComments.ok) {
          return clubComments.json().then(e => Promise.reject(e));
        }
        return Promise.all([
          clubs.json(),
          bookComments.json(),
          clubComments.json()
        ]);
      })
      .then(([clubsJson, clubCommentsJson, bookCommentsJson]) => {
        this.setState({
          clubs: clubsJson,
          clubComments: clubCommentsJson,
          bookComments: bookCommentsJson
        });
        console.log(clubsJson);
      })
      .catch(error => {
        console.log(error);
      })
  }

  addClub = (newClub) => {
    fetch(`${config.API_ENDPOINT}/api/clubs`)
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => Promise.reject(error))
        }
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          clubs: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });

    const newClubs = [...this.state.clubs, newClub]
    this.setState({
      clubs: newClubs
    });
  }

  addClubComment = (newClubComment) => {
    fetch(`${config.API_ENDPOINT}/api/club-comments`)
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => Promise.reject(error))
        }
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          clubComments: responseJson
        });
      })
      .catch(error => {
        console.log(error)
      })

    const newClubComments = [...this.state.clubComments, newClubComment]
    this.setState({
      clubComments: newClubComments
    });
  }

  addBookComment = (newBookComment) => {
    fetch(`${config.API_ENDPOINT}/api/book-comments`)
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => Promise.reject(error))
        }
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          bookComments: responseJson
        });
      })
      .catch(error => {
        console.log(error)
      })

    const newBookComments = [...this.state.bookComments, newBookComment]
    this.setState({
      bookComments: newBookComments
    });
  }

  updateClub = (editedClub) => {
    fetch(`${config.API_ENDPOINT}/api/clubs`)
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => Promise.reject(error))
        }
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          clubs: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderRoutes() {
    const paths = ['/add-club']

    return paths.map((path, index) => {
      if (path === '/add-club') {
        return <Route key={index} path={path} component={StartClubPage} />
      }
    });
  }

  render() {
    const contextValue = {
      clubs: this.state.clubs,
      addClub: this.addClub,
      deleteClub: this.deleteClub,
      updateClub: this.updateClub,
      clubComments: this.state.clubComments,
      addClubComment: this.addClubComment,
      deleteClubComment: this.deleteClubComment,
      updateClubComment: this.updateClubComment,
      bookComments: this.state.clubComments,
      addBookComment: this.addBookComment,
      deleteBookComment: this.deleteBookComment,
      updateBookComment: this.updateBookComment
    };

    return (
      <>
        <Navigation />

        <main>
          <AppContext.Provider value={contextValue}>
            <section className='main'>
              {this.renderRoutes()}
            </section>
          </AppContext.Provider>
        </main>

        <Footer />
      </>
    )
  }
}

export default App;