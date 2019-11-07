import React, { Component } from 'react'
import LoginPage from '../components/LoginPage/LoginPage'
import { Section } from '../components/Utils/Utils'

export default class Login extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { }
        }
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    render() {
        return (
            <Section className='login_page'>
                <LoginPage onLoginSuccess={this.handleLoginSuccess} />
            </Section>
            )
        }
}