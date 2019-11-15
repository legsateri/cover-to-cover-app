////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import BookClubApiService from '../../services/BookClubApiService';
////////////////////////////////////////////////////////////////////////////////

// FIXME: Clear form upon submit
// FIXME: Auto add book title to page upon submit

class UpdateBoook extends Component {
    static defaultProps = {
        match: { params: {} },
        onUpdateSuccess: () => { }
    }

    static contextType = ClubContext

    constructor(props) {
        super(props)
        this.state = {
            currently_reading: ''
        }
    }

    handleChangeBook = e => {
        this.setState({ currently_reading: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const club_id = this.props.match.params.club_id
        const { currently_reading } = this.state
        const newClub = {
            currently_reading: currently_reading
        }

        BookClubApiService.updateClub(newClub, club_id)
            .then(() => {
                this.props.onUpdateSuccess()
            })
            .catch(this.context.setError)
    }

    componentDidMount() {
        this.context.clearError()
        const selectedClub = this.props.match.params.club_id
        BookClubApiService.getClub(selectedClub)
            .then(res => this.setState({
                currently_reading: res.currently_reading
            }))
            .catch(this.context.setError)
    }

    render() {
        const { currently_reading } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Update Book: </label>
                <br />
                <input
                    className='currently_reading'
                    placeholder=' Book Title'
                    type='text'
                    id='currently_reading'
                    name='currently_reading'
                    value={currently_reading}
                    onChange={this.handleChangeBook}
                />
                <button>Add</button>
            </form >
        )
    }
}

export default withRouter(UpdateBoook)