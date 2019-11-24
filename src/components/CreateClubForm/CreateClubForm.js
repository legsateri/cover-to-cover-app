////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import BookClubApiService from '../../services/BookClubApiService'
////////////////////////////////////////////////////////////////////////////////
import './CreateClubForm.css'
////////////////////////////////////////////////////////////////////////////////

class CreateClubForm extends Component {
    static defaultProps = {
        match: { params: {} },
        onClubSuccess: () => { }
    }

    static contextType = ClubContext

    state = {
        error: null,
        name: '',
        description: '',
        topic: '',
    }

    handleChangeName = e => {
        this.setState({ name: e.target.value })
    }

    handleChangeDescription = e => {
        this.setState({ description: e.target.value })
    }

    handleChangeTopic = e => {
        this.setState({ topic: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const clubId = parseInt(this.context.clubs.length)
        const { name, description, topic } = this.state

        const club = {
            club_id: clubId,
            name: name,
            description: description,
            topic: topic
        }

        BookClubApiService.postClub(club)
            .then(() => {
                this.props.onClubSuccess()
            })
            .catch(this.context.setError)

        this.props.history.push(`/clubs`);
    }

    render() {
        const { name, description, topic } = this.state

        return (
            <>
                <form className='margins' onSubmit={this.handleSubmit}>
                    <label className='name_label' htmlFor='name'>Book Club Name*</label>
                    <br />
                    <input
                        className='name'
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={this.handleChangeName}
                        required
                    />
                    <br />

                    <label className='description_label' htmlFor='description'>Description*</label>
                    <br />
                    <textarea
                        className='description club_description'
                        rows='7'
                        value={description}
                        onChange={this.handleChangeDescription}
                        required
                    />
                    <br /><br />

                    <label className='topic_label' htmlFor='topic'>Topic*</label>
                    <br />
                    <input
                        className='topic'
                        type='text'
                        id='topic'
                        name='topic'
                        value={topic}
                        onChange={this.handleChangeTopic}
                        required
                    />
                    <br />

                    <button className='create_club_button' type='submit'>Submit</button>
                    <br />
                </form>
            </>
        )
    }
}

export default withRouter(CreateClubForm)