////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css'
////////////////////////////////////////////////////////////////////////////////

export default class Navigation extends Component {
    render() {
        return (
            <>
                <nav role="navigation">
                    <ul className='nav'>
                        <li>[Placeholder For Logo]</li>
                        <li>Find A Book Club</li>
                        <li><Link to='/add-club' style={{ textDecoration: 'none' }}>Start A Book Club</Link></li>
                        <li>Account</li>
                    </ul>
                </nav>
            </>
        )
    }
}