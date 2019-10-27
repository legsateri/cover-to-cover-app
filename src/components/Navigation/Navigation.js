import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <>
                <nav role="navigation">
                    <ul className='nav'>
                        <Link to='/'><li>[Placeholder For Logo]</li></Link>
                        <Link to='/find'><li>Find A Book Club</li></Link>
                        {/* TODO: Add hover that shows your clubs when logged in, prompts login when not. */}
                        <li>View Your Book Clubs</li>
                        <Link to='/start-club'><li>Start A Book Club</li></Link>
                        <Link to='/login'><li>Account</li></Link>
                    </ul>
                </nav>
            </>
        )
    }
}