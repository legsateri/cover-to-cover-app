////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/token-service'
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css'
////////////////////////////////////////////////////////////////////////////////

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
                    <Link to='/'>[Placeholder For Logo]</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </>
        )
    };

    renderPrivateLinks() {
        return (
            <>
                <div className='private_nav'>
                    <Link to='/'>[Placeholder For Logo]</Link>
                    <Link to='/clubs'>Find Clubs</Link>
                    <Link to='/my-clubs'>My Clubs</Link>
                    <Link to='/add-club'>Start Club</Link>
                    <Link onClick={this.handleLogout} to='/'>Logout</Link>
                </div>
            </>
        )
    };

    render() {
        const { hasLogin } = this.props

        return (
            <>
                <nav role="navigation">
                    {hasLogin
                        ? this.renderPrivateLinks()
                        : this.renderPublicLinks()}
                </nav>
            </>
        )
    };
};

export default Navigation;