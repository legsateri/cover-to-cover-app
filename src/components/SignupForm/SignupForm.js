import React from 'react';
import { Link } from 'react-router-dom'
import './SignupForm.css';
import AuthApiService from '../../services/auth-api-service';

class SignupForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    constructor() {
        super();
        this.state = {
            error: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { first_name, last_name, email, password } = event.target

        this.setState({ error: null })
        AuthApiService.postUser({
            // FIXME: Cannot read property 'value' of undefined
            email: email.value,
            password: password.value,
            first_name: first_name.value,
            last_name: last_name.value
        })
            .then(user => {
                first_name.value = ''
                last_name.value = ''
                email.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.srror })
            })
    }

    render() {
        const { error } = this.state

        return (
            <>
                <form
                    className='signup_form'
                    onSubmit={this.handleSubmit}
                >
                    <div role='alert'>
                        {error && <p>{error}</p>}
                    </div>

                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name='first-name' id='first-name' />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name='last-name' id='last-name' />

                    <label htmlFor="signupEmail">Email</label>
                    <input type="text" name='emsignupEmailail' id='signupEmail' />

                    <label htmlFor="signupPassword">Password</label>
                    <input type="signupPassword" name='signupPassword' id='signupPassword' />

                    <br />

                    <button type='submit'>Sign Up</button>
                </form>
            </>
        );
    }
}

export default SignupForm;