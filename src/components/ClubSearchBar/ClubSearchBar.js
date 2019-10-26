import React, { Component } from 'react'
import './ClubSearchBar.css'

export default class Homepage extends Component {
    render() {
        return (
            <>
                <form>
                    <input placeholder=' Find a book club' />
                    <button className='search-button'>Search</button>
                </form>
            </>
        )
    }
}