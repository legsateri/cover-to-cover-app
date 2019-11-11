////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <li><Link to='/'>[Placeholder For Logo]</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </div>
            </>
        )
    };

    renderPrivateLinks() {
        return (
            <>
                <ul className='private_nav'>
                    <Link to='/'><li>[Placeholder For Logo]</li></Link>
                    <li> Find Club</li>
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