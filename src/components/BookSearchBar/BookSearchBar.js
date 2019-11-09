import React, { Component } from 'react'

export default class BookSearchBar extends Component {
    state = {
        searchInput: ''
    }

    handleSearchInput = (searchEvent) => {
        this.setState({
            searchInput: searchEvent.target.value
        });
    }

    render() {
        const { handleSearchSubmit } = this.props
        const { searchInput } = this.state

        return (
            <>
                <label>Assign Book</label><br />
                <input placeholder=' Find a book' />
                <button className='book_search_button'>Search</button>
            </>
        )
    }
}