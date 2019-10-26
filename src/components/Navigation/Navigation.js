import React, { Component } from 'react'
import './Navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <>
                <nav role="navigation">
                    <ul>
                        <li>[Placeholder For Logo]</li>
                        <li>Find A Book Club</li>
                        <li>View Your Book Clubs</li>
                        <li>Start A Book Club</li>
                        <li>Account</li>
                    </ul>
                </nav>
            </>
        )
    }
}