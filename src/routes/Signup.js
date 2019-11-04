import React, { Component } from 'react'
import { Section } from '../components/Utils/Utils'
import SignupForm from '../components/SignupForm/SignupForm'

export default class Signup extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

    handleRegistrationSuccess(user) {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <Section className='SignupPage'>
                <SignupForm onRegistrationSuccess={this.handleRegistrationSuccess} />
            </Section>
        )
    }
}