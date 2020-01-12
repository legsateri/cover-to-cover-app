////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import AuthApiService from '../../services/AuthApiService';
////////////////////////////////////////////////////////////////////////////////
import './SignupForm.css';
////////////////////////////////////////////////////////////////////////////////

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            successMessage: ''
        }
    }

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
                this.setState({successMessage: 'Success! You can now login.'})
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state

        return (
            <>
                <p>{this.state.successMessage}</p>
                <form className='signup_form margins' onSubmit={this.handleSubmit}>
                    <div role='alert'>
                        {error && <p>{error}</p>}
                    </div>

                    <label className='name_label' htmlFor='full_name'>Full Name</label>
                    <br />
                    <input placeholder=' Sally Reads-A-Lot' type='text' name='full_name' id='full_name' className='full_name' />
                    <br />

                    <label className='email_label' htmlFor='email'>Email</label>
                    <br />
                    <input placeholder=' loves2read@gmail.com' type='text' name='email' id='email' className='email' />
                    <br />

                    <label className='password_label' htmlFor='password'>Password</label>
                    <br />
                    <input placeholder=' *******' type='password' name='password' id='password' className='password' />
                    <br />

                    <button type='submit' className='signup_button'>Sign Up</button>
                </form>

                <div className='margins signup_info'>
                    <p>Password must contain:</p>
                    <li className='password_list'>At least 8 characters</li>
                    <li className='password_list'>At least 1 uppercase letter</li>
                    <li className='password_list'>At least 1 lowercase letter</li>
                    <li className='password_list'>At least 1 number</li>
                    <li className='password_list'>At least 1 of these symbols: !@#$%^&</li>
                </div>
            </>
        );
    }
}

export default SignupForm;