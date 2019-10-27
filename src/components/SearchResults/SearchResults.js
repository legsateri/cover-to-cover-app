import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FindClubPage from '../FindClubPage/FindClubPage'
import './SearchResults.css'

export default class SearchResults extends Component {
    render() {
        return (
            <>
                <header>
                    <FindClubPage />
                </header>

                <section>
                    <h2>UCWbLadies</h2>
                    <p>Four gals worked at the writing center. Now they read things.</p>

                    {/* TODO: Set up real functionality. */}
                    <Link to='/no-member-club'><button>View</button></Link>
                </section>
            </>
        )
    }
}