////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService'
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css'
////////////////////////////////////////////////////////////////////////////////

// FIXME: When login the nav bar doesn't expand to more links automatically, have to refresh the page

class Navigation extends Component {
    static defaultProps = {
        checkForLogin: () => { }
    };

    handleLogout = () => {
        TokenService.clearAuthToken()
        this.props.checkForLogin()
    };

    renderPublicLinks() {
        return (
            <>
                <div className='public_nav'>
                    <li><Link to='/'>[Placeholder For Logo]</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </div>
            </>
        )
    };

    // TODO: Maybe hamburger some of the private links? Look up visual inspo for top navs.
    renderPrivateLinks() {
        return (
            <>
                <ul className='private_nav'>
                    <Link to='/'><li>[Placeholder For Logo]</li></Link>
                    <Link to='/clubs'><li> Find Club</li></Link>
                    {/* TODO: This should be a hover, so the clubs you belong to drop down 
                    and you can actually link to them from there. */}
                    <li>My Clubs</li>
                    <li><Link to='/add-club'>Start Club</Link></li>
                    <li><Link onClick={this.handleLogout} to='/'>Logout</Link></li>
                </ul>
            </>
        )
    };

    render() {
        const { hasLogin } = this.props

        return (
            <>
                <nav className="navigation" role="navigation">
                    {hasLogin
                        ? this.renderPrivateLinks()
                        : this.renderPublicLinks()}
                </nav>
            </>
        )
    };
};

export default Navigation;