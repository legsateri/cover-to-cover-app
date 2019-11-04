import React from 'react';
import { Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Homepage from '../Homepage/Homepage'
import FindClubPage from '../FindClubPage/FindClubPage'
import SearchResults from '../SearchResults/SearchResults'
import NotMemberBookClubPage from '../NotMemberBookClubPage/NotMemberBookClubPage'
import MemberBookClubPage from '../MemberBookClubPage/MemberBookClubPage'
import AssignedBookPage from '../AssignedBookPage/AssignedBookPage'
import StartClubPage from '../StartClubPage/StartClubPage'
import Login from '../../routes/Login'
import AccountPage from '../AccountPage/AccountPage'
import AddCommentForm from '../AddCommentForm/AddCommentForm'
import FindBookResults from '../FindBookResults/FindBookResults'
import Footer from '../Footer/Footer'

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Route exact path='/' component={Homepage} />
        <Route path='/find' component={FindClubPage} />
        <Route path='/results' component={SearchResults} />
        <Route path='/no-member-club' component={NotMemberBookClubPage} />
        <Route path='/member-club' component={MemberBookClubPage} />
        <Route path='/assigned-book' component={AssignedBookPage} />
        <Route path='/start-club' component={StartClubPage} />
        <Route path='/login' component={Login} />
        <Route path='/account' component={AccountPage} />
        <Route path='/add-comment' component={AddCommentForm} />
        <Route path='/books' component={FindBookResults} />
      </main>

      <Footer />
    </>
  );
}

export default App;
