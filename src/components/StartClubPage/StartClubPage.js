import React, { Component } from 'react'
import ClubContext from '../../contexts/ClubContext'
import TokenService from '../../services/token-service'
import config from '../../config'


export default class StartClubPage extends Component {
    static contextType = ClubContext

    constructor(props) {
        super(props)
        this.state = {
            club: {
                club_id: null,
                name: '',
                description: '',
                topic: '',
                location: '',
                type: '',
                number_members: '',
                owner_id: null,
                nameValid: false,
                descriptionValid: false,
                topicValid: false,
                locationValid: false,
                typeValid: false,
                memberNumberValid: false,
                formValid: false,
                validationMessageName: '',
                validationMessageDescription: '',
                validationMessageTopic: '',
                validationMessageLocation: '',
                validationMessageType: '',
                validationMessageNumber: '',
            }
        }
    }

    handleSubmitClub(event) {
        event.preventDefault()
        const clubId = parseInt(this.context.clubs.length)
        const newClub = {
            club_id: clubId,
            name: this.state.club.name,
            description: this.state.club.description,
            topic: this.state.club.topic,
            location: this.state.club.location,
            type: this.state.club.type,
            number_members: this.state.number_members,
            owner_id: this.state.club.owner_id,
        }

        fetch(`${config.API_ENDPOINT}/api/clubs`, {
            method: 'POST',
            body: JSON.stringify(newClub),
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(error => Promise.reject(error))
                }
                return response.json();
            })
            .then(responseJson => {
                this.context.addClub(this.state.prompt);
            })
            .catch(error => {
                console.log(error)
            });
        this.props.history.push(`/clubs`)
    }

    // TODO: handleChangeName
    // TODO: handleChangeDescription
    // TODO: handleChangeTopic
    // TODO: handleChangeLocation
    // TODO: handleChangeType
    // TODO: handleChangeMemberNumber
    // TODO: handleOwnerId
    // TODO: validateName
    // TODO: validateDescription
    // TODO: validateTopic
    // TODO: validateForm

    render() {
        return (
            <>
                <header>
                    <h1>Start A Book Club</h1>
                </header>

                <section>
                    <form id='start-club'>
                        <label for='name'>Book Club Name</label>
                        <input
                            className='name'
                            type='text'
                            id='name'
                            name='name'
                            required />

                        <label for='description'>Description</label>
                        <textarea
                            className='description'
                            id='description'
                            name='description'
                            rows='7'
                            required />

                        <label for='topic'>Topic</label>
                        <input
                            className='topic'
                            type='text'
                            id='topic'
                            name='topic'
                            required />

                        <label for="location">Location</label>
                        <select
                            className='location'
                            id='location'
                            name='location'
                            required
                        >
                            <option value='Choose One'>Choose One</option>
                            <option value='Online'>Online</option>
                            <option value='Not Online'>Not Online</option>
                        </select>

                        <label for="type">Club Type</label>
                        <select
                            className='type'
                            id='type'
                            name='type'
                            required
                        >
                            <option value='Choose One'>Choose One</option>
                            <option value='Private'>Private</option>
                            <option value='Public'>Public</option>
                        </select>

                        <label for="number_members">Maximum Number of Members</label>
                        <select
                            className='number_members'
                            id='number_members'
                            name='number_members'
                            required
                        >
                            <option value='One'>One</option>
                            <option value='Two'>Two</option>
                            <option value='Three'>Three</option>
                            <option value='Four'>Four</option>
                            <option value='Five'>Five</option>
                        </select>

                        <br />

                        {/* TODO: Want this to be a popup modal not a new page. */}
                        <button
                            className='submit_club_button'
                            type="submit"
                        >Submit</button>
                    </form>
                </section>
            </>
        )
    }
}