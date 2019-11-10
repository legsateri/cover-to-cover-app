////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import AuthApiService from '../../services/AuthApiService'
////////////////////////////////////////////////////////////////////////////////

class SignupForm extends Component {
    static defaultProps = {
        onSignUpSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = e => {
        e.preventDefault()
        const { full_name, email, password } = e.target

        this.setState({ error: null })

        AuthApiService.postUser({
            full_name: full_name.value,
            email: email.value,
            password: password.value
        })
            .then(user => {
                full_name.value = ''
                email.value = ''
                password.value = ''
                this.props.onSignUpSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state

        return (
            <>
                <form className='signup_form' onSubmit={this.handleSubmit}>
                    <div role='alert'>
                        {error && <p>{error}</p>}
                    </div>

                    <label htmlFor="full_name">Full Name</label>
                    <input placeholder='Full Name' type="text" name='full_name' id='full_name' />

                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' />

                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />

                    <button type='submit'>Sign Up</button>
                </form>
            </>
        );
    }
}

export default SignupForm;