////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
////////////////////////////////////////////////////////////////////////////////
import Search from '../Search/Search'
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService'
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

                <Search />
            </>
        )
    };

    renderPrivateLinks() {
        return (
            <>
                <div className='private_nav'>
                    <Link to='/'>[Placeholder For Logo]</Link>
                    <Link to='/my-clubs'>My Clubs</Link>
                    <Link to='/add-club'>Start Club</Link>
                    <Link onClick={this.handleLogout} to='/'>Logout</Link>
                </div>

                <Search />
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