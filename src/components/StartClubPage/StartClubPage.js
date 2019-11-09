////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import 'react-dates/initialize'
import AppContext from '../../AppContext'
import config from '../../config'
////////////////////////////////////////////////////////////////////////////////
import ValidationError from '../ValidationError/ValidationError'
////////////////////////////////////////////////////////////////////////////////
import 'react-dates/lib/css/_datepicker.css'
////////////////////////////////////////////////////////////////////////////////

export default class StartClubPage extends Component {
    static contextType = AppContext

    constructor(props) {
        super(props)
        this.state = {
            club: {
                club_id: null,
                name: '',
                description: '',
                topic: '',
                nameValid: false,
                descriptionValid: false,
                topicValid: false,
                formValid: false,
                validationMessageName: '',
                validationMessageDescription: '',
                validationMessageTopic: ''
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
            topic: this.state.club.topic
        }

        fetch(`${config.API_ENDPOINT}/api/clubs`, {
            method: 'POST',
            body: JSON.stringify(newClub),
            headers: {
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
                nameValid: !hasError,
                descriptionValid: this.state.club.descriptionValid,
                topicValid: this.state.club.topicValid,
                formValid: false,
                validationMessageName: inputError,
                validationMessageDescription: this.state.club.validationMessageDescription,
                validationMessageTopic: this.state.club.validationMessageTopic
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
                nameValid: this.state.club.nameValid,
                descriptionValid: !hasError,
                topicValid: this.state.club.topicValid,
                formValid: false,
                validationMessageName: this.state.club.validationMessageName,
                validationMessageDescription: inputError,
                validationMessageTopic: this.state.club.validationMessageTopic,
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
                nameValid: this.state.club.nameValid,
                descriptionValid: this.state.club.descriptionValid,
                topicValid: !hasError,
                formValid: false,
                validationMessageName: this.state.club.validationMessageName,
                validationMessageDescription: this.state.club.validationMessageDescription,
                validationMessageTopic: inputError,
            }
        })
        this.validateForm()
    }

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
                        <label htmlFor='name'>Book Club Name</label><br />
                        <input
                            className='name'
                            type='text'
                            id='name'
                            name='name'
                            required
                            onChange={event => this.handleChangeName(event)} />
                        <ValidationError
                            hasError={!this.state.club.nameValid}
                            message={this.state.club.validationMessageName} />

                        <label htmlFor='description'>Description</label><br />
                        <textarea
                            className='description'
                            value={this.state.club.description}
                            onChange={event => this.handleChangeDescription(event)}
                            rows='7' />
                        <ValidationError
                            hasError={!this.state.club.descriptionValid}
                            message={this.state.club.validationMessageDescription} />

                        <label htmlFor='topic'>Topic</label><br />
                        <input
                            className='topic'
                            type='text'
                            id='topic'
                            name='topic'
                            required
                            onChange={event => this.handleChangeTopic(event)} />
                        <ValidationError
                            hasError={!this.state.club.topicValid}
                            message={this.state.club.validationMessageTopic} />

                        <br />

                        <button
                            className='submit_club_button'
                            type='submit'
                            disabled={!this.state.formValid}
                        >Submit</button>
                    </form>
                </section>
            </>
        )
    }
}