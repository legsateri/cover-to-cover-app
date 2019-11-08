import React, { Component } from 'react'
import ClubContext from '../../contexts/ClubContext'
import TokenService from '../../services/token-service'
import config from '../../config'
import ValidationError from '../ValidationError/ValidationError'
import { Button, Input, Required } from '../Utils/Utils'


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

    handleChangeName(event) {
        const input = event.target.value
        const clubIndex = this.context.clubs.length.toString()
        const hasError = this.validateName(input).hasError
        const inputError = this.validateName(input).inputError

        this.setState({
            club: {
                club_id: clubIndex,
                name: input,
                description: this.state.club.description,
                topic: this.state.club.topic,
                location: this.state.club.location,
                type: this.state.club.type,
                number_members: this.state.club.number_members,
                owner_id: this.state.club.owner_id,
                nameValid: !hasError,
                descriptionValid: this.state.club.descriptionValid,
                topicValid: this.state.club.topicValid,
                locationValid: this.state.club.locationValid,
                typeValid: this.state.club.typeValid,
                memberNumberValid: this.state.club.memberNumberValid,
                formValid: false,
                validationMessageName: inputError,
                validationMessageDescription: this.state.club.validationMessageDescription,
                validationMessageTopic: this.state.club.validationMessageTopic,
                validationMessageLocation: this.state.club.validationMessageLocation,
                validationMessageType: this.state.club.validationMessageType,
                validationMessageNumber: this.state.club.validationMessageNumber,
            }
        })
        this.validateForm()
    }

    handleChangeDescription(event) {
        const input = event.target.value
        const clubIndex = this.context.clubs.length.toString()
        const hasError = this.validateDescription(input).hasError
        const inputError = this.validateDescription(input).inputError

        this.setState({
            club: {
                club_id: clubIndex,
                name: this.state.club.name,
                description: input,
                topic: this.state.club.topic,
                location: this.state.club.location,
                type: this.state.club.type,
                number_members: this.state.club.number_members,
                owner_id: this.state.club.owner_id,
                nameValid: this.state.club.nameValid,
                descriptionValid: !hasError,
                topicValid: this.state.club.topicValid,
                locationValid: this.state.club.locationValid,
                typeValid: this.state.club.typeValid,
                memberNumberValid: this.state.club.memberNumberValid,
                formValid: false,
                validationMessageName: this.state.club.validationMessageName,
                validationMessageDescription: inputError,
                validationMessageTopic: this.state.club.validationMessageTopic,
                validationMessageLocation: this.state.club.validationMessageLocation,
                validationMessageType: this.state.club.validationMessageType,
                validationMessageNumber: this.state.club.validationMessageNumber,
            }
        })
        this.validateForm()
    }

    handleChangeTopic(event) {
        const input = event.target.value
        const clubIndex = this.context.clubs.length.toString()
        const hasError = this.validateTopic(input).hasError
        const inputError = this.validateTopic(input).inputError

        this.setState({
            club: {
                club_id: clubIndex,
                name: this.state.club.name,
                description: this.state.club.description,
                topic: input,
                location: this.state.club.location,
                type: this.state.club.type,
                number_members: this.state.club.number_members,
                owner_id: this.state.club.owner_id,
                nameValid: this.state.club.nameValid,
                descriptionValid: this.state.club.descriptionValid,
                topicValid: !hasError,
                locationValid: this.state.club.locationValid,
                typeValid: this.state.club.typeValid,
                memberNumberValid: this.state.club.memberNumberValid,
                formValid: false,
                validationMessageName: this.state.club.validationMessageName,
                validationMessageDescription: this.state.club.validationMessageDescription,
                validationMessageTopic: inputError,
                validationMessageLocation: this.state.club.validationMessageLocation,
                validationMessageType: this.state.club.validationMessageType,
                validationMessageNumber: this.state.club.validationMessageNumber,
            }
        })
        this.validateForm()
    }

    handleSelectLocation(option) {
        const hasError = this.validateLocation(option).hasError
        const inputError = this.validateLocation(option).inputError

        this.setState({
            club: {
                name: this.state.club.name,
                description: this.state.club.description,
                topic: this.state.club.topic,
                location: option,
                type: this.state.club.type,
                number_members: this.state.club.number_members,
                owner_id: this.state.club.owner_id,
                nameValid: this.state.club.nameValid,
                descriptionValid: this.state.club.descriptionValid,
                topicValid: this.state.club.topicValid,
                locationValid: !hasError,
                typeValid: this.state.club.typeValid,
                memberNumberValid: this.state.club.memberNumberValid,
                formValid: false,
                validationMessageName: this.state.club.validationMessageName,
                validationMessageDescription: this.state.club.validationMessageDescription,
                validationMessageTopic: this.state.club.validationMessageTopic,
                validationMessageLocation: inputError,
                validationMessageType: this.state.club.validationMessageType,
                validationMessageNumber: this.state.club.validationMessageNumber,
            }
        })
        this.validateForm()
    }

    handleSelectType(option) {
        const hasError = this.validateType(option).hasError
        const inputError = this.validateType(option).inputError

        this.setState({
            club: {
                name: this.state.club.name,
                description: this.state.club.description,
                topic: this.state.club.topic,
                location: this.state.club.location,
                type: option,
                number_members: this.state.club.number_members,
                owner_id: this.state.club.owner_id,
                nameValid: this.state.club.nameValid,
                descriptionValid: this.state.club.descriptionValid,
                topicValid: this.state.club.topicValid,
                locationValid: this.state.club.locationValid,
                typeValid: !hasError,
                memberNumberValid: this.state.club.memberNumberValid,
                formValid: false,
                validationMessageName: this.state.club.validationMessageName,
                validationMessageDescription: this.state.club.validationMessageDescription,
                validationMessageTopic: this.state.club.validationMessageTopic,
                validationMessageLocation: this.state.club.validationMessageLocation,
                validationMessageType: inputError,
                validationMessageNumber: this.state.club.validationMessageNumber,
            }
        })
        this.validateForm()
    }

    handleSelectMemberNumber(option) {
        const hasError = this.validateMemberNumber(option).hasError
        const inputError = this.validateMemberNumber(option).inputError

        this.setState({
            club: {
                name: this.state.club.name,
                description: this.state.club.description,
                topic: this.state.club.topic,
                location: this.state.club.location,
                type: this.state.club.type,
                number_members: option,
                owner_id: this.state.club.owner_id,
                nameValid: this.state.club.nameValid,
                descriptionValid: this.state.club.descriptionValid,
                topicValid: this.state.club.topicValid,
                locationValid: this.state.club.locationValid,
                typeValid: this.state.club.typeValid,
                memberNumberValid: !hasError,
                formValid: false,
                validationMessageName: this.state.club.validationMessageName,
                validationMessageDescription: this.state.club.validationMessageDescription,
                validationMessageTopic: this.state.club.validationMessageTopic,
                validationMessageLocation: this.state.club.validationMessageLocation,
                validationMessageType: this.state.validationMessageType,
                validationMessageNumber: inputError,
            }
        })
        this.validateForm()
    }

    // TODO: handleOwnerId

    validateName(inputValue) {
        let inputError = ''
        let hasError = false

        inputValue = inputValue.trim()

        if (inputValue.length === 0) {
            inputError = 'A club name is required.'
            hasError = true
        } else {
            if (inputValue.length < 3) {
                inputError = 'Name must be at least 4 characters long.'
                hasError = true
            } else {
                inputError = ''
                hasError = false
            }
        }

        let validity = {
            hasError: hasError,
            inputError: inputError
        }

        return validity
    }

    validateDescription(inputValue) {
        let inputError = ''
        let hasError = false

        inputValue = inputValue.trim()

        if (inputValue.length === 0) {
            inputError = 'Club description is required.'
            hasError = true
        } else {
            if (inputValue.length < 8) {
                inputError = 'Club description must be at least 10 characterslong.'
                hasError = true
            } else {
                inputError = ''
                hasError = false
            }
        }

        let validity = {
            hasError: hasError,
            inputError: inputError
        }

        return validity
    }

    validateTopic(inputValue) {
        let inputError = ''
        let hasError = false

        inputValue = inputValue.trim()

        if (inputValue.length === 0) {
            inputError = 'A club topic is required.'
            hasError = true
        } else {
            if (inputValue.length < 3) {
                inputError = 'Topic must be at least 4 characters long.'
                hasError = true
            } else {
                inputError = ''
                hasError = false
            }
        }

        let validity = {
            hasError: hasError,
            inputError: inputError
        }

        return validity
    }

    validateLocation(inputValue) {
        let inputError = ''
        let hasError = false

        inputValue = inputValue.trim()

        if (inputValue.length < 3) {
            inputError = 'Please select a location.'
            hasError = true
        } else {
            inputError = ''
            hasError = false
        }

        let validity = {
            hasError: hasError,
            inputError: inputError
        }

        return validity
    }

    validateType(inputValue) {
        let inputError = ''
        let hasError = false

        inputValue = inputValue.trim()

        if (inputValue.length < 3) {
            inputError = 'Please select a type.'
            hasError = true
        } else {
            inputError = ''
            hasError = false
        }

        let validity = {
            hasError: hasError,
            inputError: inputError
        }

        return validity
    }

    validateMemberNumber(inputValue) {
        let inputError = ''
        let hasError = false

        inputValue = inputValue.trim()

        if (inputValue.length === 0) {
            inputError = 'Please select the maximum number of members.'
            hasError = true
        } else {
            inputError = ''
            hasError = false
        }

        let validity = {
            hasError: hasError,
            inputError: inputError
        }

        return validity
    }

    validateForm() {
        const name = this.state.club.nameValid
        const description = this.state.club.descriptionValid
        const topic = this.state.club.topicValid

        if (name && description && topic) {
            this.setState({
                formValid: true
            })
        }
    }

    render() {
        return (
            <>
                <header>
                    <h1>Start A Book Club</h1>
                </header>

                <section>
                    <form onSubmit={event => this.handleSubmitClub(event)}>
                        <label htmlFor='name'>Book Club Name<Required /></label><br />
                        <Input
                            className='name'
                            type='text'
                            id='name'
                            name='name'
                            required
                            onChange={event => this.handleChangeName(event)} />
                        <ValidationError
                            hasError={!this.state.club.nameValid}
                            message={this.state.club.validationMessageName} />

                        <label htmlFor='description'>Description<Required /></label><br />
                        <textarea
                            className='description'
                            value={this.state.club.description}
                            onChange={event => this.handleChangeDescription(event)}
                            rows='7' />
                        <ValidationError
                            hasError={!this.state.club.descriptionValid}
                            message={this.state.club.validationMessageDescription} />

                        <label htmlFor='topic'>Topic<Required /></label><br />
                        <Input
                            className='topic'
                            type='text'
                            id='topic'
                            name='topic'
                            required
                            onChange={event => this.handleChangeTopic(event)} />
                        <ValidationError
                            hasError={!this.state.club.topicValid}
                            message={this.state.club.validationMessageTopic} />

                        <label htmlFor="location">Location<Required /></label><br />
                        <select
                            className='location'
                            id='location'
                            name='location'
                            required
                            onChange={event => this.handleSelectLocation(event.target.value)}
                        >
                            <option value='Choose One'>Choose One</option>
                            <option value='Online'>Online</option>
                            <option value='Not Online'>Not Online</option>
                        </select><br />

                        <label htmlFor="type">Club Type<Required /></label><br />
                        <select
                            className='type'
                            id='type'
                            name='type'
                            required
                            onChange={event => this.handleSelectType(event.target.value)}
                        >
                            <option value='Choose One'>Choose One</option>
                            <option value='Private'>Private</option>
                            <option value='Public'>Public</option>
                        </select><br />

                        <label htmlFor="number_members">Maximum Number of Members<Required /></label><br />
                        <select
                            className='number_members'
                            id='number_members'
                            name='number_members'
                            required
                            onChange={event => this.handleSelectMemberNumber(event.target.value)}
                        >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select><br />

                        <br />

                        <Button
                            className='submit_club_button'
                            type='submit'
                            disabled={!this.state.formValid}
                        >Submit</Button>
                    </form>
                </section>
            </>
        )
    }
}