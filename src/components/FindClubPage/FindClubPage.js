import React, { Component } from 'react'
import ClubSearchBar from '../ClubSearchBar/ClubSearchBar'
import './FindClubPage.css'

export default class FindClubPage extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>What do you want to read?</h1>
                    <p>Search for book clubs based on genre, location, theme and more.</p>

                    <br />

                    <ClubSearchBar />
                </header>
            </>
        )
    }
}