////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService'
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css'
////////////////////////////////////////////////////////////////////////////////

// FIXME: When login the nav bar doesn't update automatically, have to refresh the page.
// FIXME: When logout the nav bar doesn't update automatically, have to refresh the page.

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
                <div className='left_justify'>
                    <Link to='/'><img src={require('./logo.png')} alt='cover to cover logo' /></Link>

                    <div className='right_justify'>
                        <Link to='/clubs'><p className='space_between'>Find Clubs</p></Link>
                        <Link to='/add-club'><p className='space_between'>Start Club</p></Link>
                        <Link to='/login'><p className='space_between'>Login</p></Link>
                    </div>
                </div>
            </>
        )
    };

    renderPrivateLinks() {
        return (
            <>
                <div className='left_justify'>
                    <Link to='/'><img src={require('./logo.png')} alt='cover to cover logo' /></Link>

                    <div className='right_justify'>
                        <Link to='/clubs'><p className='space_between'>Find Clubs</p></Link>
                        <Link to='/add-club'><p className='space_between'>Start Club</p></Link>
                        <Link onClick={this.handleLogout} to='/'><p className='space_between'>Logout</p></Link>
                    </div>
                </div>
            </>
        )
    };

    render() {
        const { hasLogin } = this.props

        return (
            <>
                <nav className='navigation' role='navigation'>
                    {hasLogin
                        ? this.renderPrivateLinks()
                        : this.renderPublicLinks()}
                </nav>
            </>
        )
    };
};

export default Navigation;