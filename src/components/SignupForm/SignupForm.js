import React from 'react';
import { Button, Input, Required } from '../Utils/Utils'
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        const { first_name, last_name, email, password } = event.target

        this.setState({ error: null })

        AuthApiService.postUser({
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
                this.setState({ error: res.error })
            })
            console.log('User is registered!')
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

                    <label htmlFor="first_name">First Name<Required /></label>
                    <Input type="text" name='first_name' id='first_name' />

                    <label htmlFor="last_name">Last Name<Required /></label>
                    <Input type="text" name='last_name' id='last_name' />

                    <label htmlFor="email">Email<Required /></label>
                    <Input type="text" name='email' id='email' />

                    <label htmlFor="password">Password<Required /></label>
                    <Input type="password" name='password' id='password' />

                    <br />

                    <Button type='submit'>Sign Up</Button>
                </form>
            </>
        );
    }
}

export default SignupForm;