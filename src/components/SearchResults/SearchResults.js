import React, { Component } from 'react'
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

                    <button>View</button> 
                    <button>Join</button>
                </section>
            </>
        )
    }
}