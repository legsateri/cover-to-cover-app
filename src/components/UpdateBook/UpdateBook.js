////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import BookClubApiService from '../../services/BookClubApiService';
////////////////////////////////////////////////////////////////////////////////
import './UpdateBook.css'
////////////////////////////////////////////////////////////////////////////////

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
            .then(() => {
                window.location.reload(false)
            })
            .then(() => {
                this.setState({
                    currently_reading: ''
                })
            })
    }

    componentDidMount() {
        this.context.clearError()
        const selectedClub = this.props.match.params.club_id
        BookClubApiService.getClub(selectedClub)
            .then(res => this.setState({
                currently_reading: res.currently_reading
            }))
            .catch(this.context.setError)
            .then(() => {
                this.setState({
                    currently_reading: ''
                })
            })
    }

    render() {
        const { currently_reading } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <label className='reading_label' htmlFor='currently_reading'>Update Book: </label>
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
                <button className='add_book'>Add</button>
            </form >
        )
    }
}

export default withRouter(UpdateBoook)