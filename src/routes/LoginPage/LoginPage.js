////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';
////////////////////////////////////////////////////////////////////////////////
import './LoginPage.css'
////////////////////////////////////////////////////////////////////////////////

class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            form: 'login'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSignupSuccess = this.handleSignupSuccess.bind(this)
    };

    handleChange(event) {
        this.setState({
            form: event.target.value
        })
    }

    static defaultProps = {
        location: {},
        history: {
            push: () => { },
            goBack: () => { },
        },
        checkForLogin: () => { }
    }

    handleSignupSuccess = () => {
        const success = []
        success.push(<>Success! You can now login.</>)
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/clubs'
        history.push(destination)
        this.props.checkForLogin()
    }

    render() {
        let formOutput;

        if (this.state.form === 'login') {
            formOutput =
                <>
                    <LoginForm
                        onLoginSuccess={this.handleLoginSuccess}
                    />
                </>
        } else {
            formOutput =
                <>
                    <SignupForm
                        onSignupSuccess={this.handleSignupSuccess}
                    />
                </>
        }

        return (
            <>
                <main>
                    <header className='margins header'>
                        <h1 className='h1_size'>Start Reading</h1>

                        <form className='radio_form'>
                            <div className='radio login_radio'>
                                <label className='radio_label'>
                                    <input
                                        type='radio'
                                        value='login'
                                        checked={this.state.form === 'login'}
                                        onChange={this.handleChange}
                                        onClick={this.handleForms}
                                    />
                                    Login
                                </label>
                            </div>

                            <div className='radio'>
                                <label className='radio_label'>
                                    <input
                                        type='radio'
                                        value='signup'
                                        checked={this.state.form === 'signup'}
                                        onChange={this.handleChange}
                                        onClick={this.handleForms}
                                    />
                                    Signup
                                </label>
                            </div>
                        </form>
                        <br />
                    </header>

                    <div className='form_output'>
                        {formOutput}
                    </div>
                </main>
            </>
        )
    }
}

export default LoginPage;