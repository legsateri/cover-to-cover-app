////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////

class Search extends Component {
    static contextType = ClubContext;

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleChangeQuery = e => {
        this.setState({ query: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault()
        this.context.clearClubResults()
        this.context.clearError()

        this.context.setQuery(this.state.query)
        this.setState({ query: '' })

        this.props.history.push('/search')
    }

    render() {
        const { query } = this.state
        return (
            <>
                <form className='search' onSubmit={this.handleSubmit}>
                    <label htmlFor='query'>
                        <input
                            type='text'
                            name='query'
                            value={query}
                            onChange={this.handleChangeQuery}
                            placeholder='Search Clubs'
                            required
                        />
                    </label>
                    <button type='submit'>Search</button>
                </form>
            </>
        )
    }
}

export default withRouter(Search)