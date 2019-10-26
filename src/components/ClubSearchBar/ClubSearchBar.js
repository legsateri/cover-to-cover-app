import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ClubSearchBar.css'

export default class ClubSearchBar extends Component {
    render() {
        return (
            <>
                <form>
                    <input placeholder=' Find a book club' />
                    <Link to='/results'><button className='search-button'>Search</button></Link>
                </form>
            </>
        )
    }
}