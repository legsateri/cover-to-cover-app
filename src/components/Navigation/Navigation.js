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
        window.location.reload(false)
    };

    renderPublicLinks() {
        return (
            <>
                <div className='left_justify'>
                    <Link to='/'><img src={require('./logo.png')} alt='cover to cover logo' /></Link>

                    <div className='right_justify'>
                        <Link to='/clubs' className='link_style' style={{ textDecoration: 'none' }}><p className='space_between'>Find Clubs</p></Link>
                        <Link to='/add-club' className='link_style' style={{ textDecoration: 'none' }}><p className='space_between'>Start Club</p></Link>
                        <Link to='/login' className='link_style' style={{ textDecoration: 'none' }}><p className='space_between'>Login</p></Link>
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
                        <Link to='/clubs' className='link_style' style={{ textDecoration: 'none' }}><p className='space_between'>Find Clubs</p></Link>
                        <Link to='/add-club' className='link_style' style={{ textDecoration: 'none' }}><p className='space_between'>Start Club</p></Link>
                        <Link onClick={this.handleLogout} to='/' style={{ textDecoration: 'none' }} className='link_style'><p className='space_between'>Logout</p></Link>
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